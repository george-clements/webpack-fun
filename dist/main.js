/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/awin.js":
/*!*********************!*\
  !*** ./src/awin.js ***!
  \*********************/
/***/ ((module) => {

eval("{var awin = function (items) {\n  var awin_item_ids = [];\n  var awin_item_quantities = [];\n  var awin_item_names = [];\n  var awin_item_categories = [];\n  var awin_item_prices = [];\n\n  var sProducts = items.reduce(function (acc, item) {\n    awin_item_ids.push(item.item_id);\n    awin_item_quantities.push(item.quantity);\n    awin_item_names.push(item.item_name_affiliate);\n    awin_item_categories.push(item.item_main_category);\n    awin_item_prices.push(item.net_price);\n    return (\n      acc +\n      \"AW:P|\" +\n      \"123456\" +\n      \"|\" +\n      \"test1234\" +\n      \"|\" +\n      item.item_id +\n      \"|\" +\n      item.item_brand +\n      \";\" +\n      item.item_name +\n      \"|\" +\n      item.net_price +\n      \"|\" +\n      item.quantity +\n      \"|\" +\n      \"\" +\n      \"|\" +\n      \"gc10\" +\n      \"|\" +\n      item.item_main_category +\n      \"\\r\\n\"\n    );\n  }, \"\");\n  console.log(sProducts);\n  return sProducts;\n};\n\nmodule.exports = awin;\n\n\n//# sourceURL=webpack://webpack-fun/./src/awin.js?\n}");

/***/ }),

/***/ "./src/example_function.js":
/*!*********************************!*\
  !*** ./src/example_function.js ***!
  \*********************************/
/***/ (() => {

eval("{\n\n//# sourceURL=webpack://webpack-fun/./src/example_function.js?\n}");

/***/ }),

/***/ "./src/facebook.js":
/*!*************************!*\
  !*** ./src/facebook.js ***!
  \*************************/
/***/ ((module) => {

eval("{var facebook = function (items) {\n  var window = {};\n  if (!window.fbq) {\n    !(function (f, b, e, v, n, t, s) {\n      if (f.fbq) {\n        return;\n      }\n      n = f.fbq = function () {\n        n.callMethod\n          ? n.callMethod.apply(n, arguments)\n          : n.queue.push(arguments);\n      };\n      if (!f._fbq) {\n        f._fbq = n;\n      }\n      n.push = n;\n      n.loaded = !0;\n      n.version = \"2.0\";\n      n.queue = [];\n    })(window, \"\", \"script\", \"//connect.facebook.net/en_US/fbevents.js\");\n  }\n\n  var facebook_items = items.reduce(function (acc, item) {\n    acc.push({\n      id: item.item_id,\n      quantity: item.quantity,\n    });\n    return acc;\n  }, []);\n  console.log(facebook_items);\n  return facebook_items;\n};\n\nmodule.exports = facebook;\n\n\n//# sourceURL=webpack://webpack-fun/./src/facebook.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("{var items = __webpack_require__(/*! ./items */ \"./src/items.json\");\nvar facebook = __webpack_require__(/*! ./facebook */ \"./src/facebook.js\");\nvar awinProductData = __webpack_require__(/*! ./awin */ \"./src/awin.js\");\n__webpack_require__(/*! ./example_function */ \"./src/example_function.js\");\n\nfacebook(items);\nawinProductData(items);\n\n\n//# sourceURL=webpack://webpack-fun/./src/index.js?\n}");

/***/ }),

/***/ "./src/items.json":
/*!************************!*\
  !*** ./src/items.json ***!
  \************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = /*#__PURE__*/JSON.parse('[{\"item_name\":\"Glycolic Acid 7 %\",\"item_id\":\"1220479\",\"item_category\":\"\",\"item_brand\":\"The Ordinary\",\"item_main_category\":\"Gesichtswasser (120108)\",\"item_product_classification\":\"\",\"net_price\":10.25,\"gross_price\":12.2,\"quantity\":\"1\",\"item_name_affiliate\":\"The Ordinary;Glycolic Acid 7 %\",\"item_type\":\"PRODUCT\"},{\"item_name\":\"Direct Acids\",\"item_id\":\"015557\",\"item_category\":\"\",\"item_brand\":\"The Ordinary\",\"item_main_category\":\"Gesichtspeeling (120107)\",\"item_product_classification\":\"Pflege / Make-Up\",\"net_price\":9.08,\"gross_price\":10.8,\"quantity\":\"1\",\"item_name_affiliate\":\"The Ordinary;Direct Acids\",\"item_type\":\"PRODUCT\"}]');\n\n//# sourceURL=webpack://webpack-fun/./src/items.json?\n}");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;