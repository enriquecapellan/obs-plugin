"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/socket",{

/***/ "./pages/socket.tsx":
/*!**************************!*\
  !*** ./pages/socket.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_enriquecapellan_Develop_obs_plugin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_enriquecapellan_Develop_obs_plugin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_enriquecapellan_Develop_obs_plugin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar socket;\nvar Home = function() {\n    var toggleInstagram = function toggleInstagram() {\n        socket.emit(\"set-instagram\", !instagram);\n        setInstagram(!instagram);\n        setTimeout(function() {\n            setInstagram(false);\n        }, 15000);\n    };\n    var toggleInfo = function toggleInfo() {\n        socket && socket.emit(\"set-info\", _objectSpread({}, info, {\n            active: !info.active\n        }));\n        setInfo(_objectSpread({}, info, {\n            active: !info.active\n        }));\n        setTimeout(function() {\n            setInfo(_objectSpread({}, info, {\n                active: false\n            }));\n        }, 15000);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        title: \"\",\n        description: \"\",\n        active: false\n    }), info = ref[0], setInfo = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), instagram = ref1[0], setInstagram = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        socketInitializer();\n    }, []);\n    var socketInitializer = function() {\n        var _ref = _asyncToGenerator(_Users_enriquecapellan_Develop_obs_plugin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_enriquecapellan_Develop_obs_plugin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"/api/socket\");\n                    case 2:\n                        socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function socketInitializer() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"panel\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"container2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"setting-container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"checkbox-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"instagram\",\n                                children: \"Instagram\"\n                            }, void 0, false, {\n                                fileName: \"/Users/enriquecapellan/Develop/obs-plugin/pages/socket.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                id: \"instagram\",\n                                checked: instagram,\n                                onChange: toggleInstagram\n                            }, void 0, false, {\n                                fileName: \"/Users/enriquecapellan/Develop/obs-plugin/pages/socket.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/enriquecapellan/Develop/obs-plugin/pages/socket.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 6\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/enriquecapellan/Develop/obs-plugin/pages/socket.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"setting-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"checkbox-container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                    htmlFor: \"info\",\n                                    children: \"Information\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/enriquecapellan/Develop/obs-plugin/pages/socket.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    id: \"info\",\n                                    checked: info.active,\n                                    onChange: toggleInfo\n                                }, void 0, false, {\n                                    fileName: \"/Users/enriquecapellan/Develop/obs-plugin/pages/socket.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 7\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/enriquecapellan/Develop/obs-plugin/pages/socket.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            placeholder: \"Name\",\n                            value: info.title,\n                            onChange: function(e) {\n                                return setInfo(_objectSpread({}, info, {\n                                    title: e.target.value\n                                }));\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/enriquecapellan/Develop/obs-plugin/pages/socket.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            placeholder: \"Description\",\n                            value: info.description,\n                            onChange: function(e) {\n                                return setInfo(_objectSpread({}, info, {\n                                    description: e.target.value\n                                }));\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/enriquecapellan/Develop/obs-plugin/pages/socket.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 6\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/enriquecapellan/Develop/obs-plugin/pages/socket.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 5\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/enriquecapellan/Develop/obs-plugin/pages/socket.tsx\",\n            lineNumber: 43,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/enriquecapellan/Develop/obs-plugin/pages/socket.tsx\",\n        lineNumber: 42,\n        columnNumber: 3\n    }, _this));\n};\n_s(Home, \"WWzaYPkPFfrg/VVSplLw2CmIrd4=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNHLEtBQUs7NEJBQUVZLFFBQVEsRUFBRSxRQUFRLENBQVBHLENBQUM7Z0NBQUtoQixNQUFNLENBQU5BLE9BQU8sbUJBQU1GLElBQUk7b0NBQUVHLEtBQUssRUFBRWUsQ0FBQyxDQUFDQyxNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7O29HQUNyR04sQ0FBSzs0QkFDTEssV0FBVyxFQUFDLENBQWE7NEJBQ3pCQyxLQUFLLEVBQUVqQixJQUFJLENBQUNJLFdBQVc7NEJBQ3ZCVyxRQUFRLEVBQUUsUUFBUSxDQUFQRyxDQUFDO2dDQUFLaEIsTUFBTSxDQUFOQSxPQUFPLG1CQUFNRixJQUFJO29DQUFFSSxXQUFXLEVBQUVjLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJFLENBQUM7R0E3REt4QixJQUFJO0tBQUpBLElBQUk7QUErRFYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zb2NrZXQudHN4PzFlN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGlvLCB7IFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5cbmxldCBzb2NrZXQ6IFNvY2tldDtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblx0Y29uc3QgW2luZm8sIHNldEluZm9dID0gdXNlU3RhdGUoe1xuXHRcdHRpdGxlOiBcIlwiLFxuXHRcdGRlc2NyaXB0aW9uOiBcIlwiLFxuXHRcdGFjdGl2ZTogZmFsc2Vcblx0fSk7XG5cblx0Y29uc3QgW2luc3RhZ3JhbSwgc2V0SW5zdGFncmFtXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNvY2tldEluaXRpYWxpemVyKCk7XG5cdH0sIFtdKTtcblxuXHRmdW5jdGlvbiB0b2dnbGVJbnN0YWdyYW0oKSB7XG5cdFx0c29ja2V0LmVtaXQoXCJzZXQtaW5zdGFncmFtXCIsICFpbnN0YWdyYW0pO1xuXHRcdHNldEluc3RhZ3JhbSghaW5zdGFncmFtKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHNldEluc3RhZ3JhbShmYWxzZSk7XG5cdFx0fSwgMTUwMDApO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG9nZ2xlSW5mbygpIHtcblx0XHRzb2NrZXQgJiYgc29ja2V0LmVtaXQoXCJzZXQtaW5mb1wiLCB7IC4uLmluZm8sIGFjdGl2ZTogIWluZm8uYWN0aXZlIH0pO1xuXHRcdHNldEluZm8oeyAuLi5pbmZvLCBhY3RpdmU6ICFpbmZvLmFjdGl2ZSB9KTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0c2V0SW5mbyh7IC4uLmluZm8sIGFjdGl2ZTogZmFsc2UgfSk7XG5cdFx0fSwgMTUwMDApO1xuXHR9XG5cblx0Y29uc3Qgc29ja2V0SW5pdGlhbGl6ZXIgPSBhc3luYyAoKSA9PiB7XG5cdFx0YXdhaXQgZmV0Y2goXCIvYXBpL3NvY2tldFwiKTtcblx0XHRzb2NrZXQgPSBpbygpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJpbnN0YWdyYW1cIj5JbnN0YWdyYW08L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiaW5zdGFncmFtXCIgY2hlY2tlZD17aW5zdGFncmFtfSBvbkNoYW5nZT17dG9nZ2xlSW5zdGFncmFtfSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGVja2JveC1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiaW5mb1wiPkluZm9ybWF0aW9uPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImluZm9cIiBjaGVja2VkPXtpbmZvLmFjdGl2ZX0gb25DaGFuZ2U9e3RvZ2dsZUluZm99IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0ey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCI+QWN0aXZhcjwvYnV0dG9uPiAqL31cblx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdmFsdWU9e2luZm8udGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5mbyh7IC4uLmluZm8sIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxuXHRcdFx0XHRcdFx0dmFsdWU9e2luZm8uZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEluZm8oeyAuLi5pbmZvLCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbyIsInNvY2tldCIsIkhvbWUiLCJ0b2dnbGVJbnN0YWdyYW0iLCJlbWl0IiwiaW5zdGFncmFtIiwic2V0SW5zdGFncmFtIiwic2V0VGltZW91dCIsInRvZ2dsZUluZm8iLCJpbmZvIiwiYWN0aXZlIiwic2V0SW5mbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzb2NrZXRJbml0aWFsaXplciIsImZldGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/socket.tsx\n");

/***/ })

});