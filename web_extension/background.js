window.browser = (function () {
	return window.msBrowser ||
		window.browser ||
		window.chrome;
})();

browser.runtime.onMessage.addListener( onMessage );

// This is called when a content script asks us to do some work for them.
function onMessage( message, sender, sendResponse ) {
	if (message === 'REPAINT') {
		sendMsgToTabs(message);
	}
	return false;
}

function sendMsgToTabs(msg) {
    return browser.tabs.query({}).then(tabs => {
        for (let tab of tabs) {
	        browser.tabs.sendMessage(tab.id, msg);
        }
    });
}
