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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _s = $RefreshSig$();\nfunction useFetchData(url) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), data = ref[0], setPosts1 = ref[1];\n    //  localStorage.getItem(token)\n    //const token = localStorage.getItem('token');\n    //if(token){\n    //console.log(token)\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        var token = localStorage.getItem('token');\n        fetch(url, {\n            headers: {\n                'Authorization': 'Token ' + token\n            }\n        }).then(function(result) {\n            console.log(result, \"ddsa\");\n            setPosts1(result);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    }, []);\n    // }\n    // else{\n    // data = 'not authorized'\n    //  setPosts('not authorized')\n    // }\n    return {\n        data: data\n    };\n}\n_s(useFetchData, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFetchData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21Ib29rcy91c2VGZXRjaERhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9EO0FBQ2Q7O1NBRTdCSSxZQUFZLENBQUVDLEdBQUcsRUFBRSxDQUFDOztJQUN6QixHQUFLLENBQW9CTCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQTdCTSxJQUFJLEdBQWNOLEdBQVksS0FBeEJFLFNBQVEsR0FBSUYsR0FBWTtJQUl2QyxFQUErQjtJQUU3QixFQUE4QztJQUM5QyxFQUFZO0lBQ1YsRUFBb0I7SUFDcEJDLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZixHQUFHLENBQUNNLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTztRQUN4Q0MsS0FBSyxDQUFDTCxHQUFHLEVBRVAsQ0FBQztZQUNDTSxPQUFPLEVBQUMsQ0FBQztnQkFDUCxDQUFlLGdCQUFFLENBQVEsVUFBR0osS0FBSztZQUNuQyxDQUFDO1FBQ0gsQ0FBQyxFQUNBSyxJQUFJLENBQUMsUUFBUSxDQUFQQyxNQUFNLEVBQUssQ0FBQztZQUNqQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sRUFBRSxDQUFNO1lBQzFCWCxTQUFRLENBQUNXLE1BQU0sQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBRUcsS0FBSyxDQUFDLFFBQVEsQ0FBUEMsR0FBRyxFQUFLLENBQUM7WUFDakJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBR1QsRUFBSTtJQUNKLEVBQVE7SUFDUixFQUEwQjtJQUMxQixFQUE4QjtJQUM5QixFQUFJO0lBRUosTUFBTSxDQUFDLENBQUM7UUFBQ1gsSUFBSSxFQUFKQSxJQUFJO0lBQUMsQ0FBQztBQUVuQixDQUFDO0dBcENRRixZQUFZO0FBdUNyQiwrREFBZUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jdXN0b21Ib29rcy91c2VGZXRjaERhdGEuanM/ZGY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBzZXRQb3N0c30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5cclxuZnVuY3Rpb24gdXNlRmV0Y2hEYXRhKCB1cmwpIHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBcclxuXHJcbiAgIFxyXG4gIC8vICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0b2tlbilcclxuXHJcbiAgICAvL2NvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAvL2lmKHRva2VuKXtcclxuICAgICAgLy9jb25zb2xlLmxvZyh0b2tlbilcclxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxyXG4gICAgICAgIGZldGNoKHVybCwgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnVG9rZW4gJyArIHRva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCwgXCJkZHNhXCIpXHJcbiAgICAgICAgICAgIHNldFBvc3RzKHJlc3VsdCk7XHJcbiAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIFtdKTtcclxuXHJcbiAgICBcclxuICAgIC8vIH1cclxuICAgIC8vIGVsc2V7XHJcbiAgICAvLyBkYXRhID0gJ25vdCBhdXRob3JpemVkJ1xyXG4gICAgLy8gIHNldFBvc3RzKCdub3QgYXV0aG9yaXplZCcpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIHsgZGF0YSB9O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VGZXRjaERhdGEiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzZXRQb3N0cyIsIkNvb2tpZXMiLCJ1c2VGZXRjaERhdGEiLCJ1cmwiLCJkYXRhIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/customHooks/useFetchData.js\n");

/***/ })

});