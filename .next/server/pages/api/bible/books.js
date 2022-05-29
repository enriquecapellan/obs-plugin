"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/bible/books";
exports.ids = ["pages/api/bible/books"];
exports.modules = {

/***/ "(api)/./pages/api/bible/books.ts":
/*!**********************************!*\
  !*** ./pages/api/bible/books.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res1) {\n    fetch(\"https://bible-app-demo.herokuapp.com/api/books/\").then((res)=>res.json()\n    ).then((response)=>res1.status(200).json(response)\n    );\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmlibGUvYm9va3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVlLGVBQWVBLE9BQU8sQ0FBQ0MsR0FBbUIsRUFBRUMsSUFBb0IsRUFBRSxDQUFDO0lBQ2pGQyxLQUFLLENBQUMsQ0FBaUQsa0RBQ3JEQyxJQUFJLEVBQUVGLEdBQUcsR0FBS0EsR0FBRyxDQUFDRyxJQUFJO01BQ3RCRCxJQUFJLEVBQUVFLFFBQVEsR0FBS0osSUFBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxFQUFFRixJQUFJLENBQUNDLFFBQVE7O0FBQ25ELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbHVnaW4vLi9wYWdlcy9hcGkvYmlibGUvYm9va3MudHM/YzUxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG5cdGZldGNoKFwiaHR0cHM6Ly9iaWJsZS1hcHAtZGVtby5oZXJva3VhcHAuY29tL2FwaS9ib29rcy9cIilcblx0XHQudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UpKTtcbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiZmV0Y2giLCJ0aGVuIiwianNvbiIsInJlc3BvbnNlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/bible/books.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/bible/books.ts"));
module.exports = __webpack_exports__;

})();