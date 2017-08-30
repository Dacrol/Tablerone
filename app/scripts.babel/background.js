'use strict';

var tabView;

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

//chrome.browserAction.setBadgeText({text: '\'Allo'});

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log(tabView);
  openTabView();
});

function openTabView() {
  if (tabView) {
    chrome.windows.update(tabView, {focused: true},  function() {
    if (chrome.runtime.lastError) {
        createTabView();
    }
});
  } else {
    createTabView();
  }
}

function createTabView() {
  chrome.windows.create(
        {'url': 'tabview.html', 'width': 400, 'height': 600, 'type': 'popup', 'focused': true},
        function(chromeWindow) {
            tabView = chromeWindow.id;
        });
}
