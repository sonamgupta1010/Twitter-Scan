/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
// background.ts
let twitterData = [];
let prevScrollY = 0;
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    var _a;
    if (msg.message === "scrollTwitterUsername") {
        const scrollTwitterData = msg.username;
        twitterData.push(scrollTwitterData);
        const currentScrollY = msg.scrollY;
        let scrollDirection = null;
        if (currentScrollY > prevScrollY) {
            scrollDirection = "down";
        }
        else if (currentScrollY < prevScrollY) {
            scrollDirection = "up";
        }
        // Update previous scroll position
        prevScrollY = currentScrollY;
        // Check if sender.tab.id is valid before sending a message to the content script
        if ((_a = sender === null || sender === void 0 ? void 0 : sender.tab) === null || _a === void 0 ? void 0 : _a.id) {
            chrome.tabs.sendMessage(sender.tab.id, { message: "scrollDirection", direction: scrollDirection });
        }
        sendResponse("Twitter data received in background");
    }
    else if (msg.message === "getTwitterData") {
        // Send the stored Twitter data to the popup
        sendResponse({ data: twitterData });
    }
});

/******/ })()
;
//# sourceMappingURL=background.js.map