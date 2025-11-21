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

/***/ "./src/assets/js/components/hero-section.js":
/*!**************************************************!*\
  !*** ./src/assets/js/components/hero-section.js ***!
  \**************************************************/
/***/ (() => {

eval("{document.addEventListener(\"DOMContentLoaded\", function () {\n  var _salla;\n  // تحقق من وجود salla.api و request\n  console.log(\"salla.api:\", salla.api);\n  console.log(\"salla.api.request:\", salla.api.request);\n  if ((_salla = salla) !== null && _salla !== void 0 && (_salla = _salla.api) !== null && _salla !== void 0 && _salla.request) {\n    // هنا يمكنك استخدام salla.api.request بأمان\n    salla.api.request(\"component/list\").then(function (list) {\n      console.log(\"Components list:\", list);\n    })[\"catch\"](function (err) {\n      console.error(\"Error fetching components:\", err);\n    });\n  } else {\n    console.warn(\"salla.api.request غير موجود\");\n  }\n});\n\n//# sourceURL=webpack://theme-raed/./src/assets/js/components/hero-section.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/components/hero-section.js"]();
/******/ 	
/******/ })()
;