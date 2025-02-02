console.log("Script de conteúdo injetado!");

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (tabs.length > 0) {
    const currentUrl = tabs[0].url;
    chrome.runtime.sendMessage({ url: currentUrl });
  }
});