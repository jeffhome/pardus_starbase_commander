window.browser = (function () {
	return window.msBrowser ||
		window.browser ||
		window.chrome;
})();

if (navigator.userAgent.indexOf('Chrome') > -1) {
	let _bodyEl = document.querySelector('body');
	_bodyEl.classList.add('chrome');
}

function save_options() {

	browser.storage.local.set({

		boolEnabledPopulationDeclineOrion : document.getElementById('boolEnabledPopulationDeclineOrion').checked,
		boolEnabledOverviewLinksOrion : document.getElementById('boolEnabledOverviewLinksOrion').checked,
		
		boolEnabledPopulationDeclineArtemis : document.getElementById('boolEnabledPopulationDeclineArtemis').checked,
		boolEnabledOverviewLinksArtemis : document.getElementById('boolEnabledOverviewLinksArtemis').checked,
		
		boolEnabledPopulationDeclinePegasus : document.getElementById('boolEnabledPopulationDeclinePegasus').checked,
		boolEnabledOverviewLinksPegasus : document.getElementById('boolEnabledOverviewLinksPegasus').checked

	}, function() {
		// Update status to let user know options were saved.
		browser.runtime.sendMessage('REPAINT');
		
		let status = document.getElementById('status');
		status.textContent = 'Options saved';
		setTimeout(function() {
			status.textContent = '';
		}, 750);
	});
}

function restore_options() {

	browser.storage.local.get({

		boolEnabledPopulationDeclineOrion: true,
		boolEnabledOverviewLinksOrion: true,
		
		boolEnabledPopulationDeclineArtemis: true,
		boolEnabledOverviewLinksArtemis: true,
		
		boolEnabledPopulationDeclinePegasus: true,
		boolEnabledOverviewLinksPegasus: true


	}, function(items) {

		document.getElementById('boolEnabledPopulationDeclineOrion').checked = items.boolEnabledPopulationDeclineOrion;
		document.getElementById('boolEnabledOverviewLinksOrion').checked = items.boolEnabledOverviewLinksOrion;

		document.getElementById('boolEnabledPopulationDeclineArtemis').checked = items.boolEnabledPopulationDeclineArtemis;
		document.getElementById('boolEnabledOverviewLinksArtemis').checked = items.boolEnabledOverviewLinksArtemis;

		document.getElementById('boolEnabledPopulationDeclinePegasus').checked = items.boolEnabledPopulationDeclinePegasus;
		document.getElementById('boolEnabledOverviewLinksPegasus').checked = items.boolEnabledOverviewLinksPegasus;

	});
}

function toggle_settings_visibility(e) {
	document.getElementById('orion_settings_list').className = e.currentTarget.id === 'orion_settings' ? 'show' : '';
	document.getElementById('artemis_settings_list').className = e.currentTarget.id === 'artemis_settings' ? 'show' : '';
	document.getElementById('pegasus_settings_list').className = e.currentTarget.id === 'pegasus_settings' ? 'show' : '';
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

document.getElementById('orion_settings').addEventListener('click', toggle_settings_visibility);
document.getElementById('artemis_settings').addEventListener('click', toggle_settings_visibility);
document.getElementById('pegasus_settings').addEventListener('click', toggle_settings_visibility);


