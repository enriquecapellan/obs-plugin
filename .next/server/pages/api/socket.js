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
exports.id = "pages/api/socket";
exports.ids = ["pages/api/socket"];
exports.modules = {

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("socket.io");;

/***/ }),

/***/ "(api)/./pages/api/socket.ts":
/*!*****************************!*\
  !*** ./pages/api/socket.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ \"socket.io\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io__WEBPACK_IMPORTED_MODULE_0__]);\nsocket_io__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst SocketHandler = (req, res)=>{\n    if (!res.socket.server.io) {\n        console.log(\"Socket is initializing\");\n        const io = new socket_io__WEBPACK_IMPORTED_MODULE_0__.Server(res.socket.server);\n        res.socket.server.io = io;\n        io.on(\"connection\", (socket)=>{\n            socket.on(\"set-instagram\", (msg)=>{\n                socket.broadcast.emit(\"set-instagram\", msg);\n            });\n            socket.on(\"set-info\", (msg)=>{\n                socket.broadcast.emit(\"set-info\", msg);\n            });\n            socket.on(\"set-verse\", (msg)=>{\n                socket.broadcast.emit(\"set-verse\", msg);\n            });\n        });\n    }\n    res.end();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketHandler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc29ja2V0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtDO0FBRWxDLEtBQUssQ0FBQ0MsYUFBYSxJQUFJQyxHQUFRLEVBQUVDLEdBQVEsR0FBSyxDQUFDO0lBQzlDLEVBQUUsR0FBR0EsR0FBRyxDQUFDQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsRUFBRSxFQUFFLENBQUM7UUFDM0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXdCO1FBQ3BDLEtBQUssQ0FBQ0YsRUFBRSxHQUFHLEdBQUcsQ0FBQ04sNkNBQU0sQ0FBQ0csR0FBRyxDQUFDQyxNQUFNLENBQUNDLE1BQU07UUFDdkNGLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLENBQUNDLEVBQUUsR0FBR0EsRUFBRTtRQUV6QkEsRUFBRSxDQUFDRyxFQUFFLENBQUMsQ0FBWSxjQUFHTCxNQUFNLEdBQUssQ0FBQztZQUNoQ0EsTUFBTSxDQUFDSyxFQUFFLENBQUMsQ0FBZSxpQkFBR0MsR0FBRyxHQUFLLENBQUM7Z0JBQ3BDTixNQUFNLENBQUNPLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDLENBQWUsZ0JBQUVGLEdBQUc7WUFDM0MsQ0FBQztZQUVETixNQUFNLENBQUNLLEVBQUUsQ0FBQyxDQUFVLFlBQUdDLEdBQUcsR0FBSyxDQUFDO2dCQUMvQk4sTUFBTSxDQUFDTyxTQUFTLENBQUNDLElBQUksQ0FBQyxDQUFVLFdBQUVGLEdBQUc7WUFDdEMsQ0FBQztZQUVETixNQUFNLENBQUNLLEVBQUUsQ0FBQyxDQUFXLGFBQUdDLEdBQUcsR0FBSyxDQUFDO2dCQUNoQ04sTUFBTSxDQUFDTyxTQUFTLENBQUNDLElBQUksQ0FBQyxDQUFXLFlBQUVGLEdBQUc7WUFDdkMsQ0FBQztRQUNGLENBQUM7SUFDRixDQUFDO0lBQ0RQLEdBQUcsQ0FBQ1UsR0FBRztBQUNSLENBQUM7QUFFRCxpRUFBZVosYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGx1Z2luLy4vcGFnZXMvYXBpL3NvY2tldC50cz9hZGE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZlciB9IGZyb20gXCJzb2NrZXQuaW9cIjtcblxuY29uc3QgU29ja2V0SGFuZGxlciA9IChyZXE6IGFueSwgcmVzOiBhbnkpID0+IHtcblx0aWYgKCFyZXMuc29ja2V0LnNlcnZlci5pbykge1xuXHRcdGNvbnNvbGUubG9nKFwiU29ja2V0IGlzIGluaXRpYWxpemluZ1wiKTtcblx0XHRjb25zdCBpbyA9IG5ldyBTZXJ2ZXIocmVzLnNvY2tldC5zZXJ2ZXIpO1xuXHRcdHJlcy5zb2NrZXQuc2VydmVyLmlvID0gaW87XG5cblx0XHRpby5vbihcImNvbm5lY3Rpb25cIiwgKHNvY2tldCkgPT4ge1xuXHRcdFx0c29ja2V0Lm9uKFwic2V0LWluc3RhZ3JhbVwiLCAobXNnKSA9PiB7XG5cdFx0XHRcdHNvY2tldC5icm9hZGNhc3QuZW1pdChcInNldC1pbnN0YWdyYW1cIiwgbXNnKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRzb2NrZXQub24oXCJzZXQtaW5mb1wiLCAobXNnKSA9PiB7XG5cdFx0XHRcdHNvY2tldC5icm9hZGNhc3QuZW1pdChcInNldC1pbmZvXCIsIG1zZyk7XG5cdFx0XHR9KTtcblx0XHRcdFxuXHRcdFx0c29ja2V0Lm9uKFwic2V0LXZlcnNlXCIsIChtc2cpID0+IHtcblx0XHRcdFx0c29ja2V0LmJyb2FkY2FzdC5lbWl0KFwic2V0LXZlcnNlXCIsIG1zZyk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXHRyZXMuZW5kKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb2NrZXRIYW5kbGVyO1xuIl0sIm5hbWVzIjpbIlNlcnZlciIsIlNvY2tldEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzb2NrZXQiLCJzZXJ2ZXIiLCJpbyIsImNvbnNvbGUiLCJsb2ciLCJvbiIsIm1zZyIsImJyb2FkY2FzdCIsImVtaXQiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/socket.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/socket.ts"));
module.exports = __webpack_exports__;

})();