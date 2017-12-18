window.browser = (function () {
	return window.msBrowser ||
		window.browser ||
		window.chrome;
})();

/*
	This method gets called when a content script asks us to do some work for them.
	We use this to allow communication from the options page via the background.js
	directly to this script.
*/

function onMessage(message) {
	if (message === 'REPAINT') {
		Starbase.reset(true);
	}
}
browser.runtime.onMessage.addListener(onMessage);

/*
	This is our main class.
*/
function Starbase() {
	this.doc = document;
	this.setCurrentUniverse();	
	this.setupSettingsForCurrentUniverse();
}

Starbase.prototype.init = function() {

	// Population Decline implementation
	if (this['boolEnabledPopulationDecline' + this.universe]) {
		if (this.doc.URL.indexOf('pardus.at/starbase_overview.php') > -1) {
			this.showStarbasePopulationDecline();
		} 
		else
		if (this.doc.URL.indexOf('pardus.at/starbase_misc_settings.php') > -1) {
			this.setMaxWorkersPopulationDecline();
		}
	}

	// Overview Links implementation
	if (this['boolEnabledOverviewLinks' + this.universe]) {
		if (this.doc.URL.indexOf('pardus.at/starbase_') > -1) {
			this.showOverviewLinks();
		} 
	}
	
	// Equipment and Ship Pricing implementation
	if (this['boolEnabledEquipmentPricer' + this.universe]) {
		if (this.doc.URL.indexOf('pardus.at/starbase_overview.php') > -1) {
			this.getRsrcPricesEquipmentPricer();
		} 
		else
		if (this.doc.URL.indexOf('pardus.at/starbase_eq_prices.php') > -1 || this.doc.URL.indexOf('pardus.at/starbase_ship_prices.php') > -1) {
			this.showPricesEquipmentPricer();
		} 
	}

}

/*
	Population Decline implementation start
*/
Starbase.prototype.showStarbasePopulationDecline = function() {
	let initialStarbaseData = this.scrapeDataFromStarbaseOverviewPagePopulationDecline();
	if (initialStarbaseData !== false) {
		let maxWorkers = this.getPref('StarbaseWorkerMax', 50000);
		this.appendToPagePopulationDecline(initialStarbaseData, maxWorkers);
	}
}

Starbase.prototype._appendToPagePopulationDecline = function(initialStarbaseData, limit, maxWorkers) {
	let starbaseAfterTick = this.starbaseTickPopulationDecline(initialStarbaseData, maxWorkers);
	let ticks = 1;
	while (starbaseAfterTick.population > limit) {
		starbaseAfterTick = this.starbaseTickPopulationDecline(starbaseAfterTick, maxWorkers);
		ticks++;
	}
	return ticks;
}

Starbase.prototype._getMessageRowPopulationDecline = function(limit, ticks, message) {
	let _trEl = this.doc.createElement('TR');
	let _tdEl = this.doc.createElement('TD');
		_tdEl.textContent = ' - workers drop below ';
		let _tdElBold = this.doc.createElement('B');
			_tdElBold.textContent = limit;
		_tdEl.appendChild(_tdElBold);
		_tdEl.appendChild(this.doc.createTextNode(' in '));
			_tdElBold = this.doc.createElement('B');
			_tdElBold.textContent = '~' + ticks + ' ticks';
		_tdEl.appendChild(_tdElBold);
	_trEl.appendChild(_tdEl);
		_tdEl = this.doc.createElement('TD');
		_tdEl.setAttribute('class', 'info');
		_tdEl.textContent = message;
	_trEl.appendChild(_tdEl);
	return _trEl;
}

Starbase.prototype.appendToPagePopulationDecline = function(initialStarbaseData, maxWorkers) {

	if (initialStarbaseData !== false) {
		let eLs = this.doc.getElementsByTagName('B');
		let table;
		for (let loop=0; loop<eLs.length; loop++) {
			if (eLs[loop].textContent.indexOf('Estimates') > -1) {
				table = this.doc.createElement('TABLE');
					table.setAttribute('width', '80%');
					table.setAttribute('class', 'messagestyle');
					table.setAttribute('id', 'starbase_population_decline_data');
				let td = this.doc.createElement('TD');
					td.setAttribute('align', 'center');
					td.appendChild(table);
				let tr = this.doc.createElement('TR');
					tr.setAttribute('id', 'starbase_population_decline_row');
					tr.appendChild(td);
				let insertPoint = eLs[loop].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
					insertPoint.parentNode.insertBefore(tr, insertPoint);
				break;
			}
		}


		let trEl = this.doc.createElement('TR');
		let thEl = this.doc.createElement('TH');
			thEl.setAttribute('colspan', 2);
			thEl.textContent = 'Estimated Worker Population and Starbase Decline';
		trEl.appendChild(thEl);
		table.appendChild(trEl);

		if (this.getPref('StarbaseWorkerMax') === null) {
		
			trEl = this.doc.createElement('TR');
			tdEl = this.doc.createElement('TD');
				tdEl.setAttribute('class', 'info');
				tdEl.setAttribute('colspan', 2);
				tdEl.style.paddingTop = '5px';
			
				let aEl = this.doc.createElement('A');
					aEl.href = 'starbase_misc_settings.php';
					aEl.setAttribute('title', 'Miscellaneous Settings');
					aEl.appendChild(this.doc.createTextNode('Miscellaneous Settings page'));
			
			tdEl.appendChild(this.doc.createTextNode('Visit your Starbase '));
			tdEl.appendChild(aEl);
			tdEl.appendChild(this.doc.createTextNode(' to ensure the correct Worker Maximum is used here'));
			trEl.appendChild(tdEl);
			table.appendChild(trEl);
			
			trEl = this.doc.createElement('TR');
			tdEl = this.doc.createElement('TD');
				tdEl.setAttribute('class', 'info');
				tdEl.setAttribute('colspan', 2);

				let bEl = this.doc.createElement('B');
					bEl.textContent = 50000;

			tdEl.appendChild(this.doc.createTextNode('In the meantime, the Worker Maximum is assumed to be '));
			tdEl.appendChild(bEl);
			tdEl.appendChild(this.doc.createTextNode(' workers'));
			trEl.appendChild(tdEl);
			table.appendChild(trEl);

		} else {
		
			trEl = this.doc.createElement('TR');
			tdEl = this.doc.createElement('TD');
				tdEl.setAttribute('class', 'info');
				tdEl.setAttribute('colspan', 2);
				tdEl.style.paddingTop = '5px';
			
				let aEl = this.doc.createElement('A');
					aEl.href = 'starbase_misc_settings.php';
					aEl.setAttribute('title', 'Miscellaneous Settings');
					aEl.appendChild(this.doc.createTextNode('Miscellaneous Settings page'));
				
				let bEl = this.doc.createElement('B');
					bEl.textContent = maxWorkers;

			tdEl.appendChild(this.doc.createTextNode('Based on your Starbase '));
			tdEl.appendChild(aEl);
			tdEl.appendChild(this.doc.createTextNode(' , the Worker Maximum used here is now '));
			tdEl.appendChild(bEl);
			tdEl.appendChild(this.doc.createTextNode(' workers'));
			trEl.appendChild(tdEl);
			table.appendChild(trEl);		
		
		}

		trEl = this.doc.createElement('TR');
		tdEl = this.doc.createElement('TD');
			tdEl.setAttribute('class', 'info');
			tdEl.setAttribute('colspan', 2);
			tdEl.style.paddingBottom = '5px';
			tdEl.textContent = 'Worker gains are random between 1.2% and 2.4% for a fully supplied upkeep - an average of 1.88% is used';
		trEl.appendChild(tdEl);
		table.appendChild(trEl);		


		let ticks;

		if (initialStarbaseData.population > 30000) {
			ticks = this._appendToPagePopulationDecline(initialStarbaseData, 30000, maxWorkers);
			table.appendChild(this._getMessageRowPopulationDecline(30000, ticks, '- the blackmarket and a pylon with 4 building slots disappears'));
		}

		if (initialStarbaseData.population > 15000) {
			ticks = this._appendToPagePopulationDecline(initialStarbaseData, 15000, maxWorkers);
			table.appendChild(this._getMessageRowPopulationDecline(15000, ticks, '- a pylon with 4 building slots disappears'));
		}

		if (initialStarbaseData.population > 5000) {
			ticks = this._appendToPagePopulationDecline(initialStarbaseData, 5000, maxWorkers);
			table.appendChild(this._getMessageRowPopulationDecline(5000, ticks, '- a pylon with 4 building slots disappears'));
		}

		ticks = this._appendToPagePopulationDecline(initialStarbaseData, 500, maxWorkers);
		table.appendChild(this._getMessageRowPopulationDecline(500, ticks, '- your Starbase downgrades to a Trading Outpost... and is lost'));
	}
}

Starbase.prototype.scrapeDataFromStarbaseOverviewPagePopulationDecline = function() {
	let population = -1;
	let food = -1;
	let water = -1;
	let eLs = this.doc.getElementsByTagName('TD');
	let loop;
	for (loop=0; loop<eLs.length; loop++) {
		if (eLs[loop].textContent.indexOf('Population') > -1) {
			population = parseInt(eLs[loop].textContent.substr(eLs[loop].textContent.indexOf('Population: ')+'Population: '.length).replace(',',''), 10);
			break;
		}
	}
	eLs = this.doc.getElementsByTagName('FONT');
	for (loop=0; loop<eLs.length; loop++) {
		if (eLs[loop].textContent.indexOf('Food') > -1) {
			food = parseInt(eLs[loop].parentNode.parentNode.cells[2].textContent.replace(',',''), 10);
		}
		if (eLs[loop].textContent.indexOf('Water') > -1) {
			water = parseInt(eLs[loop].parentNode.parentNode.cells[2].textContent.replace(',',''), 10);
			break;
		}
	}
	if (population > -1 && food > -1 && water > -1) {
		return {'population':population, 'food':food, 'water':water};
	} else {
		return false;
	}
}

Starbase.prototype.setMaxWorkersPopulationDecline = function() {
	let maxWorkers = this.doc.getElementsByName('pop_max')[0].value;
	this.setPref('StarbaseWorkerMax', parseInt(maxWorkers, 10));
}

/*
	Given a population and food and water on hand, this method returns the population and food and water after
	the tick. We can accurately predict population decline if Food and/or Water requirements are not met, but
	we have to deal with an average between 1.2% and 2.4% for population growth. I chose 1.88% as the average.
*/
Starbase.prototype.starbaseTickPopulationDecline = function(starbaseData, maxWorkers) {

	let population = starbaseData.population;
	let food_bal = starbaseData.food;
	let water_bal = starbaseData.water;

	let food_needed_for_tick = Math.ceil(3 * population / 1000);
	let water_needed_for_tick = Math.ceil(2 * population / 1000);
	let growth_amount = 1;
	let new_food_bal = food_bal - food_needed_for_tick;
	if (new_food_bal < 0) {
		new_food_bal = 0;
		growth_amount += 0.03;
	}
	let new_water_bal = water_bal - water_needed_for_tick;
	if (new_water_bal < 0) {
		new_water_bal = 0;
		growth_amount += 0.03;
	}
	let new_population = Math.floor(population * 1.0188);
	if (growth_amount > 1) {
		new_population = Math.floor(population / growth_amount);
	}
	if (new_population > maxWorkers) {
		new_population = maxWorkers;
	}
	return { 'population': new_population, 'food': new_food_bal, 'water': new_water_bal };
};


/*
	Overview Links implementation start
*/
Starbase.prototype.showOverviewLinks = function() {

	let overviewLink = this.doc.createElement('A');
		overviewLink.href = 'overview_sb.php';
		overviewLink.appendChild(this.doc.createTextNode('Return to overview'));

	let starbaseLink = this.doc.createElement('A');
		starbaseLink.href = 'starbase.php';
		starbaseLink.appendChild(this.doc.createTextNode('Return to starbase'));

	let mainLink = this.doc.createElement('A');
		mainLink.href = 'main.php';
		mainLink.appendChild(this.doc.createTextNode('Return to main screen'));

	let spacer = this.doc.createElement('SPAN');
		spacer.textContent = ' | ';

	let spacer2 = this.doc.createElement('SPAN');
		spacer2.textContent = ' | ';

	let divWrap = this.doc.createElement('DIV');
	divWrap.id = 'overviewLinks';
	divWrap.appendChild(overviewLink);
	divWrap.appendChild(spacer);

	if (this.doc.URL.search('pardus.at/starbase_overview.php') > -1 || document.URL.search('pardus.at/starbase_ship_construction.php') > -1 || document.URL.search('pardus.at/starbase_eq_construction.php') > -1) {
		divWrap.appendChild(mainLink);
	} else {
		divWrap.appendChild(starbaseLink);
		divWrap.appendChild(spacer2);
		divWrap.appendChild(mainLink);
	}

	let h1El = this.doc.querySelector('h1');
	if (h1El) {
		h1El.parentNode.insertBefore(divWrap, h1El.nextSibling);
	}
}


/*
	Equipment and Ship Pricing implementation start
*/
Starbase.prototype.getRsrcPricesEquipmentPricer = function() {
	let tRows;
	let nodeWalking = this.doc.getElementsByTagName('TH');
	for (let i = 0; i < nodeWalking.length; i++) {
		if (nodeWalking[i].textContent === 'Base pays') {
			tRows = nodeWalking[i].parentNode.parentNode.getElementsByTagName('TR');
			break;		
		}
	}
	if (tRows.length) {
		for (let i = 1; i < tRows.length - 3; i++) {
			if (typeof tRows[i].cells[1] !== 'undefined') {
				var tRow = tRows[i];
				var _rsrcName = tRow.cells[0].getElementsByTagName('IMG')[0].src;
				_rsrcName = _rsrcName.substring(_rsrcName.lastIndexOf('/') + 1, _rsrcName.indexOf('.png'));
				var _pricePaid = tRow.cells[8].textContent.replace(',','');
				this.setPref(_rsrcName, _pricePaid);
			}
		}
		this.setPref('Priced', 'true');
	}
}

Starbase.prototype.showPricesEquipmentPricer = function() {
	var showBuildCost = this.getPref('Priced', '') === 'true';

	// why did I ever think it was smart to add stuff to the page... sigh...
	var tableEl = this.doc.getElementsByTagName('FORM')[0].getElementsByTagName('TABLE')[0];
	tableEl.id = "equipmentPricer";
	tableEl.rows[0].setAttribute('class','titleHead');
	var colspan = 7;
	var divEl = this.doc.createElement('DIV');
		divEl.setAttribute('class', 'widget');
	var spanBtn1El = this.doc.createElement('SPAN');
		spanBtn1El.id = 'fakeBtnPlanetPrices';
		spanBtn1El.setAttribute('class', 'fakeBtn');
		spanBtn1El.textContent = 'Change all sell prices';
	var textEl1a = this.doc.createTextNode(' to be ');
	var inputEl1 = this.doc.createElement('INPUT');
		inputEl1.id = 'discountBoxPlanetPrices';
		inputEl1.setAttribute('type', 'text');
		inputEl1.setAttribute('class', 'discountBox');
		inputEl1.setAttribute('max', '3');
		inputEl1.value = "100";
	var textEl1b = this.doc.createTextNode(' % of planet price ');
	var brEl = this.doc.createElement('BR');
		brEl.style.clear = 'left';
	var spanBtn2El = this.doc.createElement('SPAN');
		spanBtn2El.id = 'fakeBtnBuildCost';
		spanBtn2El.setAttribute('class', 'fakeBtn');
		spanBtn2El.textContent = 'Change all sell prices';
	var textEl2a = this.doc.createTextNode(' to be ');
	var inputEl2 = this.doc.createElement('INPUT');
		inputEl2.id = 'discountBoxBuildCost';
		inputEl2.setAttribute('type', 'text');
		inputEl2.setAttribute('class', 'discountBox');
		inputEl2.setAttribute('max', '3');
		inputEl2.value = "100";
	var textEl2b = this.doc.createTextNode(' % of build cost ');
	var pEl1 = this.doc.createElement('P');
		pEl1.setAttribute('class', 'widgetInstruction');
	var textEl3a = this.doc.createTextNode('Scroll to the bottom and click the ');
	var aEl1 = this.doc.createElement('A');
		aEl1.href = '#setPricesButton';
		aEl1.textContent = 'Set Prices';
	var textEl3b = this.doc.createTextNode(' button to apply these changes');
	var pEl2 = this.doc.createElement('P');
		pEl2.setAttribute('class', 'widgetInstruction');
	var textEl4a = this.doc.createTextNode('Visit the ');
	var aEl2 = this.doc.createElement('A');
		aEl2.href = '/starbase_overview.php';
		aEl2.textContent = 'Starbase Overview';
	var textEl4b = this.doc.createTextNode(' screen to enable display of the cost to build column');
	var pEl3 = this.doc.createElement('P');
		pEl3.setAttribute('class', 'instruction');
	var textEl5a = this.doc.createTextNode('Ensure the Build Cost remains correct - visit the ');
	var aEl3 = this.doc.createElement('A');
		aEl3.href = '/starbase_overview.php';
		aEl3.textContent = 'STARBASE OVERVIEW';
		aEl3.style.fontWeight = 'bold';
		aEl3.style.color = '#000';
	var textEl5b = this.doc.createTextNode(' screen every time you alter your resource pricing');
	divEl.appendChild(spanBtn1El);
	divEl.appendChild(textEl1a);
	divEl.appendChild(inputEl1);
	divEl.appendChild(textEl1b);
	if (showBuildCost) {
		colspan = 8;
		divEl.appendChild(brEl);
		divEl.appendChild(spanBtn2El);
		divEl.appendChild(textEl2a);
		divEl.appendChild(inputEl2);
		divEl.appendChild(textEl2b);
	}
	pEl1.appendChild(textEl3a);
	pEl1.appendChild(aEl1);
	pEl1.appendChild(textEl3b);
	divEl.appendChild(pEl1);
	if (!showBuildCost) {
		pEl2.appendChild(textEl4a);
		pEl2.appendChild(aEl2);
		pEl2.appendChild(textEl4b);
		divEl.appendChild(pEl2);
	}
	tableEl.rows[0].cells[0].setAttribute('colspan',colspan);
	var h2El = this.doc.createElement('H2');
		h2El.textContent = tableEl.rows[0].cells[0].textContent;
	tableEl.rows[0].cells[0].textContent = '';
	tableEl.rows[0].cells[0].appendChild(h2El);
	tableEl.rows[0].cells[0].appendChild(divEl);
	if (showBuildCost) {
		pEl3.appendChild(textEl5a);
		pEl3.appendChild(aEl3);
		pEl3.appendChild(textEl5b);
		tableEl.rows[0].cells[0].appendChild(pEl3);
	}
	this.doc.getElementById('fakeBtnPlanetPrices').addEventListener('click', this.changePricesUsingPlanetPrices.bind(this), false);
	if (showBuildCost) {
		this.doc.getElementById('fakeBtnBuildCost').addEventListener('click', this.changePricesUsingBuildCost.bind(this), false);
	}
	tableEl.rows[1].cells[0].setAttribute('colspan',colspan);
	tableEl.rows[2].setAttribute('class','titleHead');
	var headerRow = tableEl.rows[2];
	var thEl = this.doc.createElement('TH'); 
	thEl.textContent = "Planet Price";
	thEl.setAttribute("class", "planetPriceCol");
	thEl.setAttribute("nowrap", "nowrap");
	headerRow.insertBefore(thEl, headerRow.cells[4]);
	var thEl = this.doc.createElement('TH'); 
	thEl.textContent = "Scrap Value";
	thEl.setAttribute("class", "scrapPriceCol");
	thEl.setAttribute("nowrap", "nowrap");
	headerRow.insertBefore(thEl, headerRow.cells[5]);
	if (showBuildCost) {
		var thEl = this.doc.createElement('TH'); 
		thEl.textContent = "Build Cost";
		thEl.setAttribute("class", "buildCostCol");
		thEl.setAttribute("nowrap", "nowrap");
		headerRow.insertBefore(thEl, headerRow.cells[6]);
	}
	headerRow.cells[3].setAttribute("class", "minAmountCol");
	for (var loop=3; loop<tableEl.rows.length-4; loop++) {
		var row = tableEl.rows[loop];
		if (row.cells[0].getElementsByTagName('IMG')[0].width == 64) {
			row.cells[0].setAttribute("class", "shipImage");
		}
		row.cells[3].setAttribute("class", "minAmountCol");
		var item = row.cells[1].textContent;
		var planetPriceCell = row.insertCell(4);
		var scrapValueCell = row.insertCell(5);
		if (showBuildCost) {
			var buildCostCell = row.insertCell(6);
		}
		if (pricing_data[item] != null) {
			planetPriceCell.textContent = addCommas(pricing_data[item].rrp);
			planetPriceCell.setAttribute("class", "planetPriceCol");
			scrapValueCell.textContent = addCommas(pricing_data[item].scrap);
			scrapValueCell.setAttribute("class", "scrapPriceCol");
			if (showBuildCost) {
				if (document.URL.search('pardus.at/starbase_eq_prices.php') != - 1) {
					var rsrcs = item_build_data[item].pertick;
				}
				if (document.URL.search('pardus.at/starbase_ship_prices.php') != - 1) {
					var rsrcs = ship_build_data[item].pertick;
				}
				var buildCost = 0;
				for (var i=0; i<rsrcs.length; i++) {
					rsrcCost = this.getPref(rsrcs[i].rsrc, 0);
					buildCost += rsrcs[i].qty * rsrcCost;
				}
				if (document.URL.search('pardus.at/starbase_eq_prices.php') != - 1) {
					buildCost = item_build_data[item].ticks * buildCost;
				}
				if (document.URL.search('pardus.at/starbase_ship_prices.php') != - 1) {
					buildCost = ship_build_data[item].ticks * buildCost;
				}
				buildCostCell.textContent = addCommas(buildCost);
				buildCostCell.setAttribute("class", "buildCostCol");
				if (buildCost < pricing_data[item].scrap) {
					var clazz = row.getAttribute('class');
					row.setAttribute('class', clazz + ' jackpot');
				}
			}
			var inpts = row.cells[row.cells.length-1].getElementsByTagName('INPUT');
			if (inpts.length) {
				inpts[0].setAttribute('planetPrice', pricing_data[item].rrp);
				if (showBuildCost) {
					inpts[0].setAttribute('buildCost', buildCost);
					if (buildCost > parseInt(inpts[0].value, 10)) {
						var clazz = row.getAttribute('class');
						if (clazz == null) clazz = '';
						clazz = clazz.replace('jackpot','');
						row.setAttribute('class', clazz + ' loss');
					}
				}
			}
			row.cells[row.cells.length-1].appendChild(this.makeCoinsElement());
		}
	}
	tableEl.rows[tableEl.rows.length-4].cells[0].setAttribute('colspan', colspan);
	tableEl.rows[tableEl.rows.length-3].cells[0].setAttribute('colspan', colspan);
	tableEl.rows[tableEl.rows.length-2].cells[0].setAttribute('colspan', colspan);
	tableEl.rows[tableEl.rows.length-1].cells[0].setAttribute('colspan', colspan);
	var inpts = tableEl.rows[tableEl.rows.length-1].cells[0].getElementsByTagName('INPUT');
	if (inpts.length) {
		inpts[0].setAttribute('id', 'setPricesButton');
	}
}

Starbase.prototype.makeCoinsElement = function() {
	// A pile of coins
	const _COINSPNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAACKFBMVEUAAAChVhrIhQyxfRaCWwYxHAgGAwxUNBNMPxZHQR5SJQSIUBHusC/diArQeQ+/dQ+GZggSEQMnExSYcBTpu2vIyUDVxCbnnFyJXxiLUwnashXwyDLajQjUjg7QeRCnewYaFQWYfA/j0UDe3WvN4BvP5BDo5EzKwh/ckBPczgjI0zzghwjegRXodhnTgBMsFgQsHArUv0zU9HLl4R3S5wm47gzT6xbX5BPjoQzwyBLH7bvjqibjfhXmkQ3IlychFwomOgfi7Urk2HbnzDHa4xrx5zX14Cbc5CrKzDO+cxPFwjXq7YDj4BDhwCxZPBYsJxTn4mfitoLqoxfv1jfp5SLu8i3n6B/mxypDNiBuJAmbhimGoRVEQxUwHATOsTfb2krYlAzgnxzn1yjr3i3f5yjdwhxIMQgwFQklIAR1Vwrl0xDl1Bjpux7o2Szt1yjYujOTaBFILAmdWA2NXQgxGRJ3TQi3pCLN1i/06CzZoBWCTBtEFRGjXQzVwgrZniF2UwY9JgphOQaaZQjAvwjI2y/zuhihcR6EUBusbhDTwya+5xLN7Araqx/NawvftBXbqQ9ZMglXMw2QfxDAoWng2GDw6JrT4X6/tBuORw/QtBfG5xHU6Qy/sweLUhbJzzjg4/vf6+Hv2p3EloVYOR4wNQrTzw3H0BLL4A/TzRwrDwewcyXryF/arlZ6XSlCJhKHdBHU0x3izhhoUzQ2IgcjJxQ2IxcyJQkIDAu64HxCAAAAAXRSTlMAQObYZgAAAGxJREFUGBkFwSESAQEAQNH/kqC5gRs4wh7AjBndARxAkUhbFE3ZtkUyw7ia7D1V9bGt+qLqCfa9oGoCgKo7AFTVCEBVXYBzqRMA19IRALdyAMCjsgMAcwYA4G0DANAaANAKAFAt8GsJqKoq4A9gGwzz2SSz2QAAAABJRU5ErkJggg==";

	let imgEl = this.doc.createElement('IMG');
		imgEl.src = _COINSPNG;
		imgEl.setAttribute('title', 'Credits');
		imgEl.setAttribute('class', 'pileCoins');

	return imgEl;
}

Starbase.prototype._applyPercentagePriceChange = function(percentage, priceAttr) {
	if (isNaN(percentage)) return;
	var inpts = this.doc.getElementsByTagName('INPUT');
	for (let loop = 0; loop < inpts.length; loop++) {
		if (inpts[loop].getAttribute(priceAttr)) {
			inpts[loop].value = Math.floor(parseInt(inpts[loop].getAttribute(priceAttr), 10) * percentage);
		}
	}
}

Starbase.prototype.changePricesUsingPlanetPrices = function() {
	// change the prices for all equipment based on the planet prices
	this._applyPercentagePriceChange(parseInt(this.doc.getElementById('discountBoxPlanetPrices').value, 10) / 100, 'planetPrice');
}

Starbase.prototype.changePricesUsingBuildCost = function() {
	// change the prices for all equipment based on the cost to build the equipment
	this._applyPercentagePriceChange(parseInt(this.doc.getElementById('discountBoxBuildCost').value, 10) / 100, 'buildCost');
}




function addCommas(input) {
	if (isNaN(input)) return input; // fast fail if not a number
	var strungNum = new String(input);
	if (strungNum.match(/[^[0-9].]+/g)) return input; // fast fail if any characters other than 0-9 and . are present
	// if the number is less than 1000 then we do nothing to the data passed in
	if (strungNum < 1000) return input;
	// our input is considered satisfactory, so we add in the commas
	var fraction = (strungNum.indexOf('.')>-1) ? strungNum.substr(strungNum.indexOf('.')) : '';
	var wholeNum = strungNum.substr(0,(strungNum.indexOf('.')>-1)?strungNum.indexOf('.'):strungNum.length);
	// turn it into an array
	var a = wholeNum.split('');
	// loop through and get 3 at a time and append with commas
	for (var loop=a.length-3; loop>0; loop-=3) a.splice(loop, 0, ',');
	return a.join('') + fraction;
}

Starbase.prototype.reset = function(delay) {
	this.setupSettingsForCurrentUniverse();
	if (delay) {
		setTimeout(this._reload.bind(this), 60);
	} else {
		this._reload();
	}
}

Starbase.prototype._reload = function() {
	this.loadPage('main.php');
}

Starbase.prototype._readKeyboardInput = function(e) {
	let _keyPressed = '';
	let _keyPressCode = e.which;
	switch(_keyPressCode) {
		case 9: if (e.altKey == false && e.ctrlKey == false && e.metaKey == false && e.shiftKey == false) { _keyPressed = 'TAB'; e.preventDefault(); } break;
		case 16: if (e.altKey == false && e.ctrlKey == false && e.metaKey == false) { _keyPressed = 'SHFT'; } break;
		case 17: if (e.altKey == false && e.metaKey == false && e.shiftKey == false) { _keyPressed = 'CTRL'; } break;
		case 18: if (e.ctrlKey == false && e.metaKey == false && e.shiftKey == false) { _keyPressed = 'ALT'; } break;
		case 20: if (e.altKey == false && e.ctrlKey == false && e.metaKey == false && e.shiftKey == false) { _keyPressed = 'CAPS'; } break;
		case 224: if (e.altKey == false && e.ctrlKey == false && e.shiftKey == false) { _keyPressed = 'WIN'; } break;
		default: if (_keyPressCode < 128 && _keyPressCode > 31 && e.altKey == false && e.ctrlKey == false && e.metaKey == false && e.shiftKey == false) { _keyPressed = String.fromCharCode(_keyPressCode) };
	}
	return _keyPressed;
}

Starbase.prototype.loadPage = function(page) {
	this.doc.location.href = this.doc.location.protocol + '//' + this.doc.location.hostname + '/' + page;
}

Starbase.prototype.getPref = function(key, defValue) {
	let result = null;
	if (typeof(Storage) !== "undefined") {
	    let value = localStorage.getItem(key + this.universe);
	    if (value === null) {
	    	result = typeof(defValue) !== 'undefined' ? defValue : null;
	    } else {
			let type = value[0];
			value = value.substring(1);
			switch (type) {
				case 'b': result = value === 'true';
				case 'n': result = Number(value);
				default: result = value;
			}
		}
	}
	return result;
}

Starbase.prototype.setPref = function(key, value) {
	if (typeof(Storage) !== "undefined") {
		let _value = (typeof value)[0] + value;
		localStorage.setItem(key + this.universe, _value);
	}
}

Starbase.prototype.setCurrentUniverse = function() {
	let universe = this.doc.location.hostname.substring(0, this.doc.location.hostname.indexOf('.')).toLowerCase();
	this.universe = universe.substring(0, 1).toUpperCase() + universe.substring(1);
}

Starbase.prototype.setupSettingsForCurrentUniverse = function() {
	browser.storage.local.get({
	
		boolEnabledPopulationDeclineOrion: true,
		boolEnabledOverviewLinksOrion: true,
		boolEnabledEquipmentPricerOrion: true,

		boolEnabledPopulationDeclineArtemis: true,
		boolEnabledOverviewLinksArtemis: true,
		boolEnabledEquipmentPricerArtemis: true,

		boolEnabledPopulationDeclinePegasus: true,
		boolEnabledOverviewLinksPegasus: true,
		boolEnabledEquipmentPricerPegasus: true

	}, function(items) {
	
		this.boolEnabledPopulationDeclineOrion = items.boolEnabledPopulationDeclineOrion;
		this.boolEnabledOverviewLinksOrion = items.boolEnabledOverviewLinksOrion;
		this.boolEnabledEquipmentPricerOrion = items.boolEnabledEquipmentPricerOrion;
		
		this.boolEnabledPopulationDeclineArtemis = items.boolEnabledPopulationDeclineArtemis;
		this.boolEnabledOverviewLinksArtemis = items.boolEnabledOverviewLinksArtemis;
		this.boolEnabledEquipmentPricerArtemis = items.boolEnabledEquipmentPricerArtemis;
		
		this.boolEnabledPopulationDeclinePegasus = items.boolEnabledPopulationDeclinePegasus;
		this.boolEnabledOverviewLinksPegasus = items.boolEnabledOverviewLinksPegasus;
		this.boolEnabledEquipmentPricerPegasus = items.boolEnabledEquipmentPricerPegasus;

	}.bind(this));
}

let starbase = new Starbase();

let readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		starbase.init();
	}
}, 20);
