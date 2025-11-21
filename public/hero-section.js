/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _taggedTemplateLiteral)\n/* harmony export */ });\nfunction _taggedTemplateLiteral(e, t) {\n  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {\n    raw: {\n      value: Object.freeze(t)\n    }\n  }));\n}\n\n\n//# sourceURL=webpack://theme-raed/./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js?\n}");

/***/ }),

/***/ "./src/assets/js/components/hero-section.js":
/*!**************************************************!*\
  !*** ./src/assets/js/components/hero-section.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n\nvar _templateObject, _templateObject2;\nalert(\"tmammm\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var heroWrap = app.element(\"#hero-section\");\n  \"\"(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nif (!heroWrap) {\\n    console.error(\\\"Hero Section wrapper (#hero-section) not found in DOM!\\\");\\n    return;\\n}\\n\\nsalla.api.request(\\\"component/list\\\", { params: { paths: [\\\"home.hero-section\\\"] } })\\n.then(function(res) {\\n    console.log(\\\"Hero Section API response:\\\", res);\\n\\n    var block = (res.data && res.data[0] && res.data[0].component) ? res.data[0].component : null;\\n\\n    if (!block) {\\n        console.warn(\\\"Hero Section component is not configured in Theme Dashboard.\\\");\\n        heroWrap.innerHTML = '<p style=\\\"color:red; text-align:center;\\\">Hero Section component is missing!</p>';\\n        return;\\n    }\\n\\n    var title = block.title ? block.title : \\\"\\u0645\\u0631\\u062D\\u0628\\u064B\\u0627 \\u0628\\u0643 \\u0641\\u064A \\u0645\\u062A\\u062C\\u0631\\u0646\\u0627\\\";\\n    var desc  = block.desc  ? block.desc  : \\\"\\u0623\\u0641\\u0636\\u0644 \\u0627\\u0644\\u0645\\u0646\\u062A\\u062C\\u0627\\u062A \\u0645\\u0639 \\u0623\\u0641\\u0636\\u0644 \\u0627\\u0644\\u0639\\u0631\\u0648\\u0636\\\";\\n    var btn   = block.btn   ? block.btn   : \\\"\\u062A\\u0633\\u0648\\u0642 \\u0627\\u0644\\u0622\\u0646\\\";\\n\\n    heroWrap.innerHTML = \\n        '<section class=\\\"hero-section container\\\" style=\\\"' +\\n            'background: linear-gradient(135deg, #ff7e5f, #feb47b);' +\\n            'color: #fff;' +\\n            'padding: 100px 0;' +\\n            'text-align: center;' +\\n            'border-radius: 20px;' +\\n            'overflow: hidden;' +\\n        '\\\">' +\\n            '<div class=\\\"hero-item\\\">' +\\n                '<h1 style=\\\"font-size: 3rem; font-weight: bold; margin-bottom: 20px;\\\">' + title + '</h1>' +\\n                '<p style=\\\"font-size: 1.5rem; margin-bottom: 30px;\\\">' + desc + '</p>' +\\n                '<a href=\\\"#!\\\" style=\\\"display: inline-block; padding: 15px 40px; background-color: #fff; color: #ff7e5f; font-weight: bold; text-decoration: none; border-radius: 50px; transition: 0.3s;\\\">' + btn + '</a>' +\\n            '</div>' +\\n        '</section>';\\n})\\n.catch(function(err) {\\n    console.error(\\\"Hero Section load error:\\\", err);\\n    heroWrap.innerHTML = '<p style=\\\"color:red; text-align:center;\\\">Error loading Hero Section</p>';\\n});\\n\"])))(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\"])));\n});\n\n//# sourceURL=webpack://theme-raed/./src/assets/js/components/hero-section.js?\n}");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/components/hero-section.js");
/******/ 	
/******/ })()
;