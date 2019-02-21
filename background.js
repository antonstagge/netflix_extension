chrome.webRequest.onBeforeRequest.addListener((details) => {
        return {
            redirectUrl: chrome.extension.getURL("cadmium-playercore-6.0012.597.011-with_menu.js")
        }
    }, {
        urls: [
            "*://assets.nflxext.com/*/ffe/player/html/*",
            "*://www.assets.nflxext.com/*/ffe/player/html/*"
        ]
    }, ["blocking"]
);