/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/component/Error.tsx":
/*!*********************************!*\
  !*** ./src/component/Error.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
// Importing necessary libraries and types from React and framer-motion


// Defining the ErrorMessage component
const ErrorMessage = ({ message }) => {
    return (
    // Error container with center alignment
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "error-container flex items-center justify-center m-auto" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, null, message && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div
        // Initial state of the animation
        , { 
            // Initial state of the animation
            initial: { opacity: 0, y: -20 }, 
            // State to animate to
            animate: { opacity: 1, y: 0 }, 
            // State to animate to when component is removed
            exit: { opacity: 0, y: -20 }, 
            // Transition timings
            transition: { duration: 0.3 }, 
            // Styling and layout for the error message
            className: "error-message text-black p-2  flex flex-col items-center" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { role: "img", "aria-label": "Error", className: " mb-2", style: { fontSize: '6rem' } }, "\u26A0\uFE0F"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-lg" }, message))))));
};
// Exporting the ErrorMessage component
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMessage);


/***/ }),

/***/ "./src/component/Facts.tsx":
/*!*********************************!*\
  !*** ./src/component/Facts.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Fact = ({ text }) => {
    // Split the input text into paragraphs by empty lines and remove any leading/trailing whitespace
    // const paragraphs = text.split('\n').filter(item => item.trim().length > 1);
    // console.log(paragraphs,"text")
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "max-w-md mx-auto p-4" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "space-y-4" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-start space-x-2" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-gray-600" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex-1 bg-white border rounded p-4 ml-2 text-base" }, text.trim())))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fact);


/***/ }),

/***/ "./src/component/Header.tsx":
/*!**********************************!*\
  !*** ./src/component/Header.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/tailwind.css */ "./src/assets/tailwind.css");


const Header = ({ header }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "sticky top-0 z-50", style: { backgroundColor: 'black', color: 'white', padding: '13px 5px', cursor: 'grabbing', fontWeight: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "m-0 ml-1 text-base" }, header)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/component/MyLoader.tsx":
/*!************************************!*\
  !*** ./src/component/MyLoader.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");


// Defining MyLoader component which uses ContentLoader to create a placeholder loading screen
const MyLoader = (props) => (
// ContentLoader component creates SVG based (scalable vector graphics) loading placeholders
react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_1__["default"]
// Speed of the loading animation
, Object.assign({ 
    // Speed of the loading animation
    speed: 2, 
    // Width of the SVG container
    width: 400, 
    // Height of the SVG container
    height: 460, 
    // The view box of the SVG container
    viewBox: "0 0 400 460", 
    // Background color of the SVG
    backgroundColor: "#f3f3f3", 
    // Foreground color (the loading animation color)
    foregroundColor: "#ecebeb" }, props),
    "// Circle element in the SVG",
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", { cx: "31", cy: "31", r: "15" })
// Rectangular elements in the SVG
,
    "// Rectangular elements in the SVG",
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { x: "58", y: "18", rx: "2", ry: "2", width: "140", height: "10" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { x: "58", y: "34", rx: "2", ry: "2", width: "140", height: "10" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { x: "0", y: "60", rx: "2", ry: "2", width: "400", height: "400" })));
// Exporting the MyLoader component
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyLoader);


/***/ }),

/***/ "./src/popup/index.tsx":
/*!*****************************!*\
  !*** ./src/popup/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _assets_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/tailwind.css */ "./src/assets/tailwind.css");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup */ "./src/popup/popup.tsx");
// Import the necessary modules and styles


 // Import your Tailwind CSS file
 // Import your Popup component
// Function to initialize the app
function init() {
    // Create a new div element to serve as the app container
    const appContainer = document.createElement('div');
    document.body.appendChild(appContainer);
    // Check if the app container was successfully created
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    // Create a root for rendering the app inside the app container
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(appContainer);
    // Log the app container for debugging
    console.log(appContainer);
    // Render the Popup component within the app container
    root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popup__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}
// Initialize the app
init();


/***/ }),

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Error */ "./src/component/Error.tsx");
/* harmony import */ var _component_MyLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/MyLoader */ "./src/component/MyLoader.tsx");
/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Header */ "./src/component/Header.tsx");
/* harmony import */ var _component_Facts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Facts */ "./src/component/Facts.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






const Popup = () => {
    const [twitterData, setTwitterData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [scrollDirection, setScrollDirection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // Get active tab information
        chrome.tabs.query({ active: true, currentWindow: true }, ([activeTab]) => {
            if (activeTab) {
                const tabUrl = activeTab.url || "";
                if (tabUrl.includes("twitter.com")) {
                    // Proceed only if the active tab URL contains "twitter.com"
                    // Fetch Twitter data
                    chrome.tabs.sendMessage(activeTab.id, { message: "getTwitterData" }, (response) => {
                        if (response) {
                            setLoading(false);
                            setTwitterData([response.username] || 0);
                        }
                        else {
                            setError(true);
                        }
                    });
                    // Set up a listener for background messages
                    function messageListener(message) {
                        if (message.message === "scrollTwitterUsername") {
                            setTwitterData(prevData => {
                                // Check if the username is not already in the state
                                if (!prevData.includes(message.username)) {
                                    return [...prevData, message.username];
                                }
                                return prevData;
                            });
                            // Set the scroll direction in the state
                            setScrollDirection(message.direction);
                        }
                    }
                    // Add the listener
                    chrome.runtime.onMessage.addListener(messageListener);
                    // Set up throttling for scroll events
                    const throttledScrollHandler = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.throttle)(() => {
                        // Your existing code to fetch Twitter data and update state goes here
                    }, 100); // Adjust the throttle interval as needed (e.g., 300 milliseconds)
                    // Add scroll event listener with throttling
                    window.addEventListener('scroll', throttledScrollHandler);
                    // Clean up the listener and throttled function on component unmount
                    return () => {
                        chrome.runtime.onMessage.removeListener(messageListener);
                        window.removeEventListener('scroll', throttledScrollHandler);
                        throttledScrollHandler.cancel(); // Ensure the throttled function is canceled on unmount
                        setScrollDirection(null); // Clear the scroll direction on unmount
                    };
                }
                else {
                    console.log(error, "error12");
                    setError(true);
                    return;
                }
            }
            else {
                setError(true);
                return;
            }
        });
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "popup-container" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Header__WEBPACK_IMPORTED_MODULE_3__["default"], { header: "Twitter Reader" }),
        error ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Error__WEBPACK_IMPORTED_MODULE_1__["default"], { message: "Please Go to Twitter Acc or Refresh." })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "content-container" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "overflow-y-auto h-full text-container" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-4" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "prose prose-sm prose-primary mb-4 max-w-none overflow-auto break-words dark:prose-invert", id: "main", dir: "auto" }, loading ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "loader-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_MyLoader__WEBPACK_IMPORTED_MODULE_2__["default"], null))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        twitterData.map((username, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Facts__WEBPACK_IMPORTED_MODULE_4__["default"], { key: index, text: `Name: ${username}` }))),
                        scrollDirection && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "scroll-direction" },
                            "Scroll Direction: ",
                            scrollDirection)))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreactjs_chrome"] = self["webpackChunkreactjs_chrome"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e","vendors-node_modules_lodash_lodash_js-node_modules_react-content-loader_dist_react-content-lo-d1ce5e","src_assets_tailwind_css"], () => (__webpack_require__("./src/popup/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map