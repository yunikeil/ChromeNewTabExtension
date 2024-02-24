chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      id: "openAsHtml",
      title: "Открыть как HTML",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "openAsHtml") {
      chrome.tabs.create({
        url: 'data:text/html,' + encodeURIComponent(info.selectionText)
      });
    }
  });
  