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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _s = $RefreshSig$();\nfunction useFetchData(url) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), data = ref[0], setPosts1 = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        fetch(url, {\n            headers: {\n                'Cookie': x(),\n                'Authorization': 'test'\n            }\n        }).then(function(res) {\n            return console.log(res);\n        }).then(function(result) {\n            setPosts1(result);\n        });\n    }, []);\n    return {\n        data: data\n    };\n}\n_s(useFetchData, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\nvar x = react__WEBPACK_IMPORTED_MODULE_0__.CookieManager.get(HOST, function(err, res) {\n    console.log('Got cookies for url', res);\n    return res;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFetchData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21Ib29rcy91c2VGZXRjaERhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW1FOztTQUUxREksWUFBWSxDQUFFQyxHQUFHLEVBQUUsQ0FBQzs7SUFDekIsR0FBSyxDQUFvQkwsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUE3Qk0sSUFBSSxHQUFjTixHQUFZLEtBQXhCRSxTQUFRLEdBQUlGLEdBQVk7SUFHckNDLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYk0sS0FBSyxDQUFDRixHQUFHLEVBRVIsQ0FBQztZQUNBRyxPQUFPLEVBQUcsQ0FBQztnQkFBQSxDQUFRLFNBQUVDLENBQUM7Z0JBQUksQ0FBZSxnQkFBRSxDQUFNO1lBQUEsQ0FBQztRQUFBLENBQUMsRUFDbERDLElBQUksQ0FBQyxRQUFRLENBQVBDLEdBQUc7bUJBQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHO1dBQzdCRCxJQUFJLENBQUMsUUFBUSxDQUFQSSxNQUFNLEVBQUssQ0FBQztZQUNqQlosU0FBUSxDQUFDWSxNQUFNLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRVQsTUFBTSxDQUFDLENBQUM7UUFBQ1IsSUFBSSxFQUFKQSxJQUFJO0lBQUMsQ0FBQztBQUNuQixDQUFDO0dBaEJRRixZQUFZO0FBaUJyQixHQUFHLENBQUNLLENBQUMsR0FBR04sb0RBQWlCLENBQUNhLElBQUksRUFBRSxRQUFRLENBQVBDLEdBQUcsRUFBRU4sR0FBRyxFQUFLLENBQUM7SUFDN0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXFCLHNCQUFFRixHQUFHLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUNBLEdBQUc7QUFDWixDQUFDO0FBRUQsK0RBQWVQLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY3VzdG9tSG9va3MvdXNlRmV0Y2hEYXRhLmpzP2RmOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgc2V0UG9zdHMsIENvb2tpZU1hbmFnZXJ9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gdXNlRmV0Y2hEYXRhKCB1cmwpIHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKHVybCwgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgeyBcclxuICAgICAgICAgIGhlYWRlcnM6ICB7J0Nvb2tpZSc6IHgoKSwgJ0F1dGhvcml6YXRpb24nOiAndGVzdCd9fSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBvc3RzKHJlc3VsdCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB7IGRhdGEgfTtcclxufVxyXG5sZXQgeCA9IENvb2tpZU1hbmFnZXIuZ2V0KEhPU1QsIChlcnIsIHJlcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdHb3QgY29va2llcyBmb3IgdXJsJywgcmVzKTtcclxuICByZXR1cm4gcmVzO1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlRmV0Y2hEYXRhIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2V0UG9zdHMiLCJDb29raWVNYW5hZ2VyIiwidXNlRmV0Y2hEYXRhIiwidXJsIiwiZGF0YSIsImZldGNoIiwiaGVhZGVycyIsIngiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsImdldCIsIkhPU1QiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/customHooks/useFetchData.js\n");

/***/ })

});