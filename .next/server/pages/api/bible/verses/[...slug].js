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
exports.id = "pages/api/bible/verses/[...slug]";
exports.ids = ["pages/api/bible/verses/[...slug]"];
exports.modules = {

/***/ "(api)/./pages/api/bible/verses/[...slug].ts":
/*!*********************************************!*\
  !*** ./pages/api/bible/verses/[...slug].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res1) {\n    const { slug  } = req.query;\n    fetch(`https://bible-app-demo.herokuapp.com/api/books/${slug[0]}/verses/${slug[1]}`).then((res)=>res.json()\n    ).then((response)=>res1.status(200).json(response)\n    );\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmlibGUvdmVyc2VzL1suLi5zbHVnXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRWUsZUFBZUEsT0FBTyxDQUFDQyxHQUFtQixFQUFFQyxJQUFvQixFQUFFLENBQUM7SUFDakYsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO0lBRTFCQyxLQUFLLEVBQUUsK0NBQStDLEVBQUVGLElBQUksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFQSxJQUFJLENBQUMsQ0FBQyxLQUM5RUcsSUFBSSxFQUFFSixHQUFHLEdBQUtBLEdBQUcsQ0FBQ0ssSUFBSTtNQUN0QkQsSUFBSSxFQUFFRSxRQUFRLEdBQUtOLElBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsRUFBRUYsSUFBSSxDQUFDQyxRQUFROztBQUNuRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGx1Z2luLy4vcGFnZXMvYXBpL2JpYmxlL3ZlcnNlcy9bLi4uc2x1Z10udHM/MDAzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG5cdGNvbnN0IHsgc2x1ZyB9ID0gcmVxLnF1ZXJ5O1xuXG5cdGZldGNoKGBodHRwczovL2JpYmxlLWFwcC1kZW1vLmhlcm9rdWFwcC5jb20vYXBpL2Jvb2tzLyR7c2x1Z1swXX0vdmVyc2VzLyR7c2x1Z1sxXX1gKVxuXHRcdC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZSkpO1xufVxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzbHVnIiwicXVlcnkiLCJmZXRjaCIsInRoZW4iLCJqc29uIiwicmVzcG9uc2UiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/bible/verses/[...slug].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/bible/verses/[...slug].ts"));
module.exports = __webpack_exports__;

})();