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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\nfunction useFetchData(url) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), data = ref[0], setPosts1 = ref[1];\n    localStorage.getItem(token);\n    //const token = localStorage.getItem('token');\n    //if(token){\n    //console.log(token)\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        localStorage.getItem('token');\n        fetch(url, {\n            credentials: 'include',\n            headers: {\n                'Authorization': '55f376af8a137b773f72cccd5a184bdd4fec3f61'\n            }\n        }).then(function(res) {\n            return console.log(res);\n        }).then(function(result) {\n            setPosts1(result);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    }, []);\n    // }\n    // else{\n    // data = 'not authorized'\n    //  setPosts('not authorized')\n    // }\n    return {\n        data: data\n    };\n}\n_s(useFetchData, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFetchData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21Ib29rcy91c2VGZXRjaERhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0Q7QUFDZDtBQUNiOztTQUVoQkssWUFBWSxDQUFFQyxHQUFHLEVBQUUsQ0FBQzs7SUFDekIsR0FBSyxDQUFvQk4sR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUE3Qk8sSUFBSSxHQUFjUCxHQUFZLEtBQXhCRSxTQUFRLEdBQUlGLEdBQVk7SUFJckNRLFlBQVksQ0FBQ0MsT0FBTyxDQUFDQyxLQUFLO0lBRTFCLEVBQThDO0lBQzlDLEVBQVk7SUFDVixFQUFvQjtJQUNwQlQsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNmTyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFPLE9BQUMsQ0FBQztRQUM5QkUsS0FBSyxDQUFDTCxHQUFHLEVBRVAsQ0FBQztZQUNDTSxXQUFXLEVBQUUsQ0FBUztZQUN0QkMsT0FBTyxFQUFDLENBQUM7Z0JBQ1AsQ0FBZSxnQkFBRSxDQUEwQztZQUM3RCxDQUFDO1FBQ0gsQ0FBQyxFQUNBQyxJQUFJLENBQUMsUUFBUSxDQUFQQyxHQUFHO21CQUFLQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRztXQUM3QkQsSUFBSSxDQUFDLFFBQVEsQ0FBUEksTUFBTSxFQUFLLENBQUM7WUFDakJoQixTQUFRLENBQUNnQixNQUFNLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUVDLEtBQUssQ0FBQyxRQUFRLENBQVBDLEdBQUcsRUFBSyxDQUFDO1lBQ2pCSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUdULEVBQUk7SUFDSixFQUFRO0lBQ1IsRUFBMEI7SUFDMUIsRUFBOEI7SUFDOUIsRUFBSTtJQUVKLE1BQU0sQ0FBQyxDQUFDO1FBQUNiLElBQUksRUFBSkEsSUFBSTtJQUFDLENBQUM7QUFFbkIsQ0FBQztHQXJDUUYsWUFBWTtBQXdDckIsK0RBQWVBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY3VzdG9tSG9va3MvdXNlRmV0Y2hEYXRhLmpzP2RmOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgc2V0UG9zdHN9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmZ1bmN0aW9uIHVzZUZldGNoRGF0YSggdXJsKSB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcblxyXG4gICBcclxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRva2VuKVxyXG5cclxuICAgIC8vY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIC8vaWYodG9rZW4pe1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHRva2VuKVxyXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIGZldGNoKHVybCwgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnNTVmMzc2YWY4YTEzN2I3NzNmNzJjY2NkNWExODRiZGQ0ZmVjM2Y2MSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBvc3RzKHJlc3VsdCk7XHJcbiAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIFtdKTtcclxuXHJcbiAgICBcclxuICAgIC8vIH1cclxuICAgIC8vIGVsc2V7XHJcbiAgICAvLyBkYXRhID0gJ25vdCBhdXRob3JpemVkJ1xyXG4gICAgLy8gIHNldFBvc3RzKCdub3QgYXV0aG9yaXplZCcpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIHsgZGF0YSB9O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VGZXRjaERhdGEiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzZXRQb3N0cyIsIkNvb2tpZXMiLCJheGlvcyIsInVzZUZldGNoRGF0YSIsInVybCIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwiY2F0Y2giLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/customHooks/useFetchData.js\n");

/***/ })

});