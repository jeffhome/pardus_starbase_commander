window.browser = (function () {
	return window.msBrowser ||
		window.browser ||
		window.chrome;
})();

function onDOMContentLoaded() {
	let version_display = document.getElementById('version-display');
	if (version_display) {
		version_display.textContent = 'Version ' + browser.runtime.getManifest().version;
	}
	let open_options = document.getElementById('open-options');
	if (version_display) {
		open_options.addEventListener('click', onOpenOptionsClick, false);
	}
}

function onOpenOptionsClick(event) {
	event.preventDefault();
	browser.runtime.openOptionsPage();
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded, false);