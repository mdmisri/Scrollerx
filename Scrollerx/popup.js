document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('scrollToTop');
    const scrollToBottomButton = document.getElementById('scrollToBottom');
  
    scrollToTopButton.addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tabId = tabs[0].id;
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          function: scrollToTop
        });
      });
    });
  
    scrollToBottomButton.addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tabId = tabs[0].id;
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          function: scrollToBottom
        });
      });
    });
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }
  
  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'instant'
    });
  }
  