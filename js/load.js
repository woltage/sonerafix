var script = document.createElement('script');
script.src = chrome.extension.getURL('js/remove.js');
(document.head||document.documentElement).appendChild(script);
