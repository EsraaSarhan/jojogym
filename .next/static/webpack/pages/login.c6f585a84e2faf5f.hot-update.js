"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/components/TfCounter.js":
/*!*************************************!*\
  !*** ./src/components/TfCounter.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cool_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cool-form */ \"./node_modules/react-cool-form/dist/index.esm.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\nvar _this = undefined;\n\n\n\n//import Cookies from 'universal-cookie';\n\nvar _s = $RefreshSig$();\nvar TfCounter = function(param) {\n    var nonst = param.nonst;\n    _s();\n    // const { formErrors, isLoaded, loginErrors } = this.state;\n    //const navigate = useNavigate();\n    //  const state = {\n    //   redirect: false\n    // }\n    var ref = (0,react_cool_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({\n        defaultValues: {\n            username: \"\",\n            email: \"\",\n            password: \"\"\n        },\n        onSubmit: function(values) {\n            return fetch('https://gym-mgmt-system-development.herokuapp.com/api/v1/auth/login/', {\n                method: 'POST',\n                headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(values, undefined, 2)\n            }).then(function(res) {\n                return res.json();\n            }).then(function(result) {\n                console.log(result);\n                // console.log(result.non_field_errors[0]);\n                // this.setState({ datastore: items })        \n                if (result.key) {\n                    // localStorage.setItem('token', result.key)\n                    //window.location.href = '/customers';\n                    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n                        localStorage.setItem('token', '55f376af8a137b773f72cccd5a184bdd4fec3f61');\n                    });\n                }\n            }, function(error) {\n                console.log(error);\n            });\n        }\n    }), form = ref.form, use = ref.use;\n    var errors = use(\"errors\");\n    //const { redirect } = state;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"tf-section tf-counter background-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"assets/images/pattern/fun-fact-1.png\",\n                alt: \"Image\",\n                className: \"fun-fact1 wow fadeInLeft animated\",\n                \"data-wow-delay\": \"0.3ms\",\n                \"data-wow-duration\": \"1200ms\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"assets/images/pattern/fun-fact-2.png\",\n                alt: \"Image\",\n                className: \"fun-fact2 wow fadeInRight animated\",\n                \"data-wow-delay\": \"0.3ms\",\n                \"data-wow-duration\": \"1200ms\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-11 m-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            ref: form,\n                            noValidate: true,\n                            method: \"post\",\n                            id: \"loginform\",\n                            className: \"comment-form\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"row-form st-1 mg-bt-20\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            required: true,\n                                            id: \"Username\",\n                                            name: \"username\",\n                                            placeholder: \"اسم المستخدم\",\n                                            error: errors.username\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 23\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"error\",\n                                            children: errors.username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"اسم المستخدم مطلوب\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                                                lineNumber: 92,\n                                                columnNumber: 69\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 25\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"row-form st-1 mg-bt-20\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            required: true,\n                                            placeholder: \"البريد الالكتروني\",\n                                            id: \"Email\",\n                                            name: \"email\",\n                                            error: errors.email\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 23\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"error\",\n                                            children: errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \" البريد الالكتروني مطلوب مثال (example@example.com)\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                                                lineNumber: 102,\n                                                columnNumber: 62\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 21\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"row-form st-1 mg-bt-20\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            required: true,\n                                            placeholder: \"كلمة المرور\",\n                                            id: \"Password\",\n                                            name: \"password\",\n                                            error: errors.password\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 23\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"error\",\n                                            children: errors.password && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"كلمةالمرور مطلوبة\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                                                lineNumber: 112,\n                                                columnNumber: 65\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                                            lineNumber: 112,\n                                            columnNumber: 21\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"row-form\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"fl-btn st-14\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"inner\",\n                                            children: \"تسجيل الدخول\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                                            lineNumber: 116,\n                                            columnNumber: 25\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                                        lineNumber: 115,\n                                        columnNumber: 23\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 21\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\esraa\\\\OneDrive\\\\Desktop\\\\jojo\\\\jojogym\\\\src\\\\components\\\\TfCounter.js\",\n        lineNumber: 58,\n        columnNumber: 7\n    }, _this);\n};\n_s(TfCounter, \"NcDJQqK5ykMDB5q/dZXg12kSCKw=\", false, function() {\n    return [\n        react_cool_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c = TfCounter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TfCounter);\nvar _c;\n$RefreshReg$(_c, \"TfCounter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDZixTQUFTLEVBQUMsQ0FBTztzREFBQyxDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzVELENBQUM7R0F0SEs3QixTQUFTOztRQU9TRixvREFBTzs7O0tBUHpCRSxTQUFTO0FBdUhmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGZDb3VudGVyLmpzP2JlZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICBSZWFjdCwge3NldFN0YXRlLCBzZXRQb3N0cywgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtY29vbC1mb3JtXCI7XHJcbi8vaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBUZkNvdW50ZXIgPSAoeyBub25zdCB9KSA9PiB7XHJcbiAvLyBjb25zdCB7IGZvcm1FcnJvcnMsIGlzTG9hZGVkLCBsb2dpbkVycm9ycyB9ID0gdGhpcy5zdGF0ZTtcclxuIC8vY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4vLyAgY29uc3Qgc3RhdGUgPSB7XHJcbi8vICAgcmVkaXJlY3Q6IGZhbHNlXHJcbi8vIH1cclxuXHJcbiAgY29uc3QgeyBmb3JtLCB1c2UgfSA9IHVzZUZvcm0oe1xyXG4gICAgZGVmYXVsdFZhbHVlczogeyB1c2VybmFtZTogXCJcIiwgZW1haWw6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0sXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4gXHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9neW0tbWdtdC1zeXN0ZW0tZGV2ZWxvcG1lbnQuaGVyb2t1YXBwLmNvbS9hcGkvdjEvYXV0aC9sb2dpbi8nLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAvLydBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgIC8vICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6ICdHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBPUFRJT05TJyxcclxuICAgICAgLy8gICAnQ29va2llJzogJ3Rlc3R0dCdcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmFsdWVzLCB1bmRlZmluZWQsIDIpXHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihcclxuICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQubm9uX2ZpZWxkX2Vycm9yc1swXSk7XHJcbiAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgZGF0YXN0b3JlOiBpdGVtcyB9KSAgICAgICAgXHJcbiAgICAgICBpZihyZXN1bHQua2V5KXtcclxuICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlc3VsdC5rZXkpXHJcbiAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvY3VzdG9tZXJzJztcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgJzU1ZjM3NmFmOGExMzdiNzczZjcyY2NjZDVhMTg0YmRkNGZlYzNmNjEnKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcblxyXG4gICAgICAgXHJcbiAgICAgIH1cclxuICAgIClcclxuICAgICAgfSk7XHJcbiAgY29uc3QgZXJyb3JzID0gdXNlKFwiZXJyb3JzXCIpO1xyXG5cclxuICAvL2NvbnN0IHsgcmVkaXJlY3QgfSA9IHN0YXRlO1xyXG5cclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgdGYtc2VjdGlvbiB0Zi1jb3VudGVyIGJhY2tncm91bmQtbGlnaHRgfT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJhc3NldHMvaW1hZ2VzL3BhdHRlcm4vZnVuLWZhY3QtMS5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiSW1hZ2VcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZnVuLWZhY3QxIHdvdyBmYWRlSW5MZWZ0IGFuaW1hdGVkXCJcclxuICAgICAgICAgIGRhdGEtd293LWRlbGF5PVwiMC4zbXNcIlxyXG4gICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249XCIxMjAwbXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiYXNzZXRzL2ltYWdlcy9wYXR0ZXJuL2Z1bi1mYWN0LTIucG5nXCJcclxuICAgICAgICAgIGFsdD1cIkltYWdlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZ1bi1mYWN0MiB3b3cgZmFkZUluUmlnaHQgYW5pbWF0ZWRcIlxyXG4gICAgICAgICAgZGF0YS13b3ctZGVsYXk9XCIwLjNtc1wiXHJcbiAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj1cIjEyMDBtc1wiXHJcbiAgICAgICAgLz5cclxuICBcclxuICB7Lyoge2xvZ2luRXJyb3JzfSAgKi99XHJcbiAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTExIG0tYXV0b1wiPlxyXG4gICAgICAgICAgICA8Zm9ybSByZWY9e2Zvcm19IG5vVmFsaWRhdGVcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImxvZ2luZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tbWVudC1mb3JtXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWZvcm0gc3QtMSBtZy1idC0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2KfYs9mFINin2YTZhdiz2KrYrtiv2YVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JzLnVzZXJuYW1lICYmIDxzcGFuPtin2LPZhSDYp9mE2YXYs9iq2K7Yr9mFINmF2LfZhNmI2Kg8L3NwYW4+fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1mb3JtIHN0LTEgbWctYnQtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2YTYqNix2YrYryDYp9mE2KfZhNmD2KrYsdmI2YbZilwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvclwiPntlcnJvcnMuZW1haWwgJiYgPHNwYW4+INin2YTYqNix2YrYryDYp9mE2KfZhNmD2KrYsdmI2YbZiiDZhdi32YTZiNioINmF2KvYp9mEIChleGFtcGxlQGV4YW1wbGUuY29tKTwvc3Bhbj59PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWZvcm0gc3QtMSBtZy1idC0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2YPZhNmF2Kkg2KfZhNmF2LHZiNixXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9ycy5wYXNzd29yZCAmJiA8c3Bhbj7Zg9mE2YXYqdin2YTZhdix2YjYsSDZhdi32YTZiNio2Kk8L3NwYW4+fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsLWJ0biBzdC0xNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbm5lclwiPtiq2LPYrNmK2YQg2KfZhNiv2K7ZiNmEPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbiAgXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRmQ291bnRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic2V0U3RhdGUiLCJzZXRQb3N0cyIsInVzZUVmZmVjdCIsInVzZUZvcm0iLCJDb29raWVzIiwiVGZDb3VudGVyIiwibm9uc3QiLCJkZWZhdWx0VmFsdWVzIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVuZGVmaW5lZCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImtleSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnJvciIsImZvcm0iLCJ1c2UiLCJlcnJvcnMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiZGF0YS13b3ctZGVsYXkiLCJkYXRhLXdvdy1kdXJhdGlvbiIsImRpdiIsInJlZiIsIm5vVmFsaWRhdGUiLCJpZCIsImlucHV0IiwidHlwZSIsInJlcXVpcmVkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwic3BhbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TfCounter.js\n");

/***/ })

});