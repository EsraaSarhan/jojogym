"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/customers",{

/***/ "./src/components/customHooks/useFetchData.js":
/*!****************************************************!*\
  !*** ./src/components/customHooks/useFetchData.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-cookie */ \"./node_modules/universal-cookie/es6/index.js\");\n\n\nvar _s = $RefreshSig$();\nfunction useFetchData(url) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), data = ref[0], setPosts1 = ref[1];\n    var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    console.log(cookies);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        fetch(url, {\n            method: \"GET\",\n            credentials: \"same-origin\",\n            headers: new Headers({\n                Cookie: 'sessionid=v1spquauge9i18ae60sl5cxzswysrw3q; csrftoken=KYXQyXr49tajjDZl9eg07UuHw91VZvuEOkFILvKiRHgDE4Yi7U7jhxSRxVhYruq6; tabstyle=html-tab'\n            })\n        }).then(function(res) {\n            return console.log(res);\n        }).then(function(result) {\n            setPosts1(result);\n        });\n    }, []);\n    return {\n        data: data\n    };\n}\n_s(useFetchData, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFetchData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21Ib29rcy91c2VGZXRjaERhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFvRDtBQUNkOztTQUU3QkksWUFBWSxDQUFFQyxHQUFHLEVBQUUsQ0FBQzs7SUFDekIsR0FBSyxDQUFvQkwsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUE3Qk0sSUFBSSxHQUFjTixHQUFZLEtBQXhCRSxTQUFRLEdBQUlGLEdBQVk7SUFDckMsR0FBSyxDQUFDTyxPQUFPLEdBQUcsR0FBRyxDQUFDSix3REFBTztJQUUzQkssT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU87SUFFbkJOLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYlMsS0FBSyxDQUFDTCxHQUFHLEVBRVAsQ0FBQztZQUNDTSxNQUFNLEVBQUUsQ0FBSztZQUNiQyxXQUFXLEVBQUUsQ0FBYTtZQUMxQkMsT0FBTyxFQUFFLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7Z0JBQUNDLE1BQU0sRUFBQyxDQUEySTtZQUFBLENBQUM7UUFDNUssQ0FBQyxFQUNBQyxJQUFJLENBQUMsUUFBUSxDQUFQQyxHQUFHO21CQUFLVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsR0FBRztXQUM3QkQsSUFBSSxDQUFDLFFBQVEsQ0FBUEUsTUFBTSxFQUFLLENBQUM7WUFDakJoQixTQUFRLENBQUNnQixNQUFNLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRVQsTUFBTSxDQUFDLENBQUM7UUFBQ1osSUFBSSxFQUFKQSxJQUFJO0lBQUMsQ0FBQztBQUNuQixDQUFDO0dBckJRRixZQUFZO0FBd0JyQiwrREFBZUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jdXN0b21Ib29rcy91c2VGZXRjaERhdGEuanM/ZGY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBzZXRQb3N0c30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5cclxuZnVuY3Rpb24gdXNlRmV0Y2hEYXRhKCB1cmwpIHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjb29raWVzKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2godXJsLCBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsgQ29va2llOidzZXNzaW9uaWQ9djFzcHF1YXVnZTlpMThhZTYwc2w1Y3h6c3d5c3J3M3E7IGNzcmZ0b2tlbj1LWVhReVhyNDl0YWpqRFpsOWVnMDdVdUh3OTFWWnZ1RU9rRklMdktpUkhnREU0WWk3VTdqaHhTUnhWaFlydXE2OyB0YWJzdHlsZT1odG1sLXRhYid9KSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQb3N0cyhyZXN1bHQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4geyBkYXRhIH07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VGZXRjaERhdGEiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzZXRQb3N0cyIsIkNvb2tpZXMiLCJ1c2VGZXRjaERhdGEiLCJ1cmwiLCJkYXRhIiwiY29va2llcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJDb29raWUiLCJ0aGVuIiwicmVzIiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/customHooks/useFetchData.js\n");

/***/ })

});