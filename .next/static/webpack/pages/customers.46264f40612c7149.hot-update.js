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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-cookie */ \"./node_modules/universal-cookie/es6/index.js\");\n\n\nvar _s = $RefreshSig$();\nfunction useFetchData(url) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), data = ref[0], setPosts1 = ref[1];\n    var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    console.log(cookies);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        fetch(url, {\n            method: \"GET\",\n            mode: 'no-cors',\n            headers: new Headers({\n                Accept: 'application/json'\n            })\n        }).then(function(res) {\n            return console.log(res);\n        }).then(function(result) {\n            setPosts1(result);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    }, []);\n    return {\n        data: data\n    };\n}\n_s(useFetchData, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFetchData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21Ib29rcy91c2VGZXRjaERhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFvRDtBQUNkOztTQUU3QkksWUFBWSxDQUFFQyxHQUFHLEVBQUUsQ0FBQzs7SUFDekIsR0FBSyxDQUFvQkwsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUE3Qk0sSUFBSSxHQUFjTixHQUFZLEtBQXhCRSxTQUFRLEdBQUlGLEdBQVk7SUFDckMsR0FBSyxDQUFDTyxPQUFPLEdBQUcsR0FBRyxDQUFDSix3REFBTztJQUUzQkssT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU87SUFHbkJOLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYlMsS0FBSyxDQUFDTCxHQUFHLEVBRVAsQ0FBQztZQUNDTSxNQUFNLEVBQUUsQ0FBSztZQUNiQyxJQUFJLEVBQUUsQ0FBUztZQUNmQyxPQUFPLEVBQUcsR0FBRyxDQUFDQyxPQUFPLENBQUMsQ0FBQztnQkFBQ0MsTUFBTSxFQUFFLENBQWtCO1lBQUMsQ0FBQztRQUN0RCxDQUFDLEVBQ0FDLElBQUksQ0FBQyxRQUFRLENBQVBDLEdBQUc7bUJBQUtULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUSxHQUFHO1dBQzdCRCxJQUFJLENBQUMsUUFBUSxDQUFQRSxNQUFNLEVBQUssQ0FBQztZQUNqQmhCLFNBQVEsQ0FBQ2dCLE1BQU0sQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBRUMsS0FBSyxDQUFDLFFBQVEsQ0FBUEMsR0FBRyxFQUFLLENBQUM7WUFDakJaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRVQsTUFBTSxDQUFDLENBQUM7UUFBQ2QsSUFBSSxFQUFKQSxJQUFJO0lBQUMsQ0FBQztBQUNuQixDQUFDO0dBeEJRRixZQUFZO0FBMkJyQiwrREFBZUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jdXN0b21Ib29rcy91c2VGZXRjaERhdGEuanM/ZGY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBzZXRQb3N0c30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5cclxuZnVuY3Rpb24gdXNlRmV0Y2hEYXRhKCB1cmwpIHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjb29raWVzKVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKHVybCwgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBtb2RlOiAnbm8tY29ycycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6ICBuZXcgSGVhZGVycyh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgc2V0UG9zdHMocmVzdWx0KTtcclxuICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB7IGRhdGEgfTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUZldGNoRGF0YSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInNldFBvc3RzIiwiQ29va2llcyIsInVzZUZldGNoRGF0YSIsInVybCIsImRhdGEiLCJjb29raWVzIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImhlYWRlcnMiLCJIZWFkZXJzIiwiQWNjZXB0IiwidGhlbiIsInJlcyIsInJlc3VsdCIsImNhdGNoIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/customHooks/useFetchData.js\n");

/***/ })

});