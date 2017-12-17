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

		boolEnabledPopulationDeclineArtemis: true,
		boolEnabledOverviewLinksArtemis: true,

		boolEnabledPopulationDeclinePegasus: true,
		boolEnabledOverviewLinksPegasus: true

	}, function(items) {
	
		this.boolEnabledPopulationDeclineOrion = items.boolEnabledPopulationDeclineOrion;
		this.boolEnabledOverviewLinksOrion = items.boolEnabledOverviewLinksOrion;
		
		this.boolEnabledPopulationDeclineArtemis = items.boolEnabledPopulationDeclineArtemis;
		this.boolEnabledOverviewLinksArtemis = items.boolEnabledOverviewLinksArtemis;
		
		this.boolEnabledPopulationDeclinePegasus = items.boolEnabledPopulationDeclinePegasus;
		this.boolEnabledOverviewLinksPegasus = items.boolEnabledOverviewLinksPegasus;

	}.bind(this));
}

let starbase = new Starbase();

let readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		starbase.init();
	}
}, 20);
