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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _s = $RefreshSig$();\nfunction useFetchData(method, url, token) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), data = ref[0], setPosts1 = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        fetch(url, {\n            headers: {\n                method: 'GET',\n                \"Authorization\": \"\".concat(token)\n            }\n        }).then(function(res) {\n            return console.log(res);\n        }).then(function(result) {\n            setPosts1(result);\n        });\n    }, []);\n    return {\n        data: data\n    };\n}\n_s(useFetchData, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFetchData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21Ib29rcy91c2VGZXRjaERhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9EOztTQUUzQ0csWUFBWSxDQUFDQyxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFLENBQUM7O0lBQ3ZDLEdBQUssQ0FBb0JOLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBN0JPLElBQUksR0FBY1AsR0FBWSxLQUF4QkUsU0FBUSxHQUFJRixHQUFZO0lBR3JDQyxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2JPLEtBQUssQ0FBQ0gsR0FBRyxFQUNSLENBQUM7WUFBQ0ksT0FBTyxFQUNSLENBQUM7Z0JBQUNMLE1BQU0sRUFBRSxDQUFLO2dCQUNmLENBQWUsZ0JBQUksR0FBUSxPQUFORSxLQUFLO1lBQUUsQ0FBQztRQUFBLENBQUMsRUFDN0JJLElBQUksQ0FBQyxRQUFRLENBQVBDLEdBQUc7bUJBQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHO1dBQzdCRCxJQUFJLENBQUMsUUFBUSxDQUFQSSxNQUFNLEVBQUssQ0FBQztZQUNqQlosU0FBUSxDQUFDWSxNQUFNLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRVQsTUFBTSxDQUFDLENBQUM7UUFBQ1AsSUFBSSxFQUFKQSxJQUFJO0lBQUMsQ0FBQztBQUNuQixDQUFDO0dBaEJRSixZQUFZO0FBa0JyQiwrREFBZUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jdXN0b21Ib29rcy91c2VGZXRjaERhdGEuanM/ZGY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBzZXRQb3N0c30gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiB1c2VGZXRjaERhdGEobWV0aG9kLCB1cmwsIHRva2VuKSB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaCh1cmwsIFxyXG4gICAgICAgICB7IGhlYWRlcnM6IFxyXG4gICAgICAgICAgeyBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgXCJBdXRob3JpemF0aW9uXCIgOiBgJHt0b2tlbn1gfX0pXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQb3N0cyhyZXN1bHQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4geyBkYXRhIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUZldGNoRGF0YSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInNldFBvc3RzIiwidXNlRmV0Y2hEYXRhIiwibWV0aG9kIiwidXJsIiwidG9rZW4iLCJkYXRhIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/customHooks/useFetchData.js\n");

/***/ })

});