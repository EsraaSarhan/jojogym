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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\nfunction useFetchData(url) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), data = ref[0], setPosts1 = ref[1];\n    var token = localStorage.getItem('token');\n    if (token) {\n        console.log(token);\n        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n            fetch(url, {\n                credentials: 'include',\n                headers: {\n                    'Authorization': '55f376af8a137b773f72cccd5a184bdd4fec3f61'\n                }\n            }).then(function(res) {\n                return console.log(res);\n            }).then(function(result) {\n                setPosts1(result);\n            }).catch(function(err) {\n                console.log(err);\n            });\n        }, []);\n    } else {\n        // data = 'not authorized'\n        setPosts1('not authorized');\n    }\n    return {\n        data: data\n    };\n}\n_s(useFetchData, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFetchData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21Ib29rcy91c2VGZXRjaERhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0Q7QUFDZDtBQUNiOztTQUVoQkssWUFBWSxDQUFFQyxHQUFHLEVBQUUsQ0FBQzs7SUFDekIsR0FBSyxDQUFvQk4sR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUE3Qk8sSUFBSSxHQUFjUCxHQUFZLEtBQXhCRSxTQUFRLEdBQUlGLEdBQVk7SUFJckMsR0FBSyxDQUFDUSxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQU87SUFDMUMsRUFBRSxFQUFDRixLQUFLLEVBQUMsQ0FBQztRQUNSRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osS0FBSztRQUNqQlAsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztZQUNmWSxLQUFLLENBQUNQLEdBQUcsRUFFUCxDQUFDO2dCQUNDUSxXQUFXLEVBQUUsQ0FBUztnQkFDdEJDLE9BQU8sRUFBQyxDQUFDO29CQUNQLENBQWUsZ0JBQUUsQ0FBMEM7Z0JBQzdELENBQUM7WUFDSCxDQUFDLEVBQ0FDLElBQUksQ0FBQyxRQUFRLENBQVBDLEdBQUc7dUJBQUtOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxHQUFHO2VBQzdCRCxJQUFJLENBQUMsUUFBUSxDQUFQRSxNQUFNLEVBQUssQ0FBQztnQkFDakJoQixTQUFRLENBQUNnQixNQUFNLENBQUMsQ0FBQztZQUNuQixDQUFDLEVBQUVDLEtBQUssQ0FBQyxRQUFRLENBQVBDLEdBQUcsRUFBSyxDQUFDO2dCQUNqQlQsT0FBTyxDQUFDQyxHQUFHLENBQUNRLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFHVCxDQUFDLE1BQ0csQ0FBQztRQUNMLEVBQTBCO1FBQ3pCbEIsU0FBUSxDQUFDLENBQWdCO0lBQzFCLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUFDSyxJQUFJLEVBQUpBLElBQUk7SUFBQyxDQUFDO0FBRW5CLENBQUM7R0FsQ1FGLFlBQVk7QUFxQ3JCLCtEQUFlQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2N1c3RvbUhvb2tzL3VzZUZldGNoRGF0YS5qcz9kZjhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHNldFBvc3RzfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiB1c2VGZXRjaERhdGEoIHVybCkge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgaWYodG9rZW4pe1xyXG4gICAgICBjb25zb2xlLmxvZyh0b2tlbilcclxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaCh1cmwsIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJzU1ZjM3NmFmOGExMzdiNzczZjcyY2NjZDVhMTg0YmRkNGZlYzNmNjEnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQb3N0cyhyZXN1bHQpO1xyXG4gICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCBbXSk7XHJcblxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgLy8gZGF0YSA9ICdub3QgYXV0aG9yaXplZCdcclxuICAgICBzZXRQb3N0cygnbm90IGF1dGhvcml6ZWQnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGRhdGEgfTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlRmV0Y2hEYXRhIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2V0UG9zdHMiLCJDb29raWVzIiwiYXhpb3MiLCJ1c2VGZXRjaERhdGEiLCJ1cmwiLCJkYXRhIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsInJlc3VsdCIsImNhdGNoIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/customHooks/useFetchData.js\n");

/***/ })

});