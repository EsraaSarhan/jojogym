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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-cookie */ \"./node_modules/universal-cookie/es6/index.js\");\n\n\nvar _s = $RefreshSig$();\nfunction useFetchData(url) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), data = ref[0], setPosts1 = ref[1];\n    var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    console.log(cookies);\n    var url = \"url\";\n    var xhr = new XMLHttpRequest();\n    xhr.open(\"GET\", url);\n    xhr.setRequestHeader(\"Cookie\", \"csrftoken=E8giT9SjO8eZnbGHbpxTKAE3Pqp0LlPbqcpCrPZUi0DuVKV3jEczcy2TwTHC4Abr; sessionid=qg2vxo3a15x4vmkdo3mi1etviqkipaky\");\n    xhr.setRequestHeader(\"Authorization\", \"Bearer 55f376af8a137b773f72cccd5a184bdd4fec3f61\");\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        fetch(url, {\n            credentials: 'include',\n            headers: {\n                // Your header content\n                'Authorization': '55f376af8a137b773f72cccd5a184bdd4fec3f61',\n                'Cookie': 'csrftoken=E8giT9SjO8eZnbGHbpxTKAE3Pqp0LlPbqcpCrPZUi0DuVKV3jEczcy2TwTHC4Abr; sessionid=qg2vxo3a15x4vmkdo3mi1etviqkipaky'\n            }\n        }).then(function(res) {\n            return console.log(res);\n        }).then(function(result) {\n            setPosts1(result);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    }, []);\n    return {\n        data: data\n    };\n}\n_s(useFetchData, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFetchData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21Ib29rcy91c2VGZXRjaERhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFvRDtBQUNkOztTQUU3QkksWUFBWSxDQUFFQyxHQUFHLEVBQUUsQ0FBQzs7SUFDekIsR0FBSyxDQUFvQkwsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUE3Qk0sSUFBSSxHQUFjTixHQUFZLEtBQXhCRSxTQUFRLEdBQUlGLEdBQVk7SUFDckMsR0FBSyxDQUFDTyxPQUFPLEdBQUcsR0FBRyxDQUFDSix3REFBTztJQUUzQkssT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU87SUFDbkIsR0FBRyxDQUFDRixHQUFHLEdBQUcsQ0FBSztJQUVmLEdBQUcsQ0FBQ0ssR0FBRyxHQUFHLEdBQUcsQ0FBQ0MsY0FBYztJQUNoQ0QsR0FBRyxDQUFDRSxJQUFJLENBQUMsQ0FBSyxNQUFFUCxHQUFHLENBQUMsQ0FBQztJQUVyQkssR0FBRyxDQUFDRyxnQkFBZ0IsQ0FBQyxDQUFRLFNBQUUsQ0FBd0gsd0hBQUMsQ0FBQztJQUN6SkgsR0FBRyxDQUFDRyxnQkFBZ0IsQ0FBQyxDQUFlLGdCQUFFLENBQWlELGlEQUFDLENBQUM7SUFHckZaLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYmEsS0FBSyxDQUFDVCxHQUFHLEVBRVAsQ0FBQztZQUNDVSxXQUFXLEVBQUUsQ0FBUztZQUV0QkMsT0FBTyxFQUFDLENBQUM7Z0JBQ1AsRUFBc0I7Z0JBQ3RCLENBQWUsZ0JBQUUsQ0FBMEM7Z0JBQzNELENBQVEsU0FBRyxDQUF3SDtZQUNySSxDQUFDO1FBQ0gsQ0FBQyxFQUNBQyxJQUFJLENBQUMsUUFBUSxDQUFQQyxHQUFHO21CQUFLVixPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsR0FBRztXQUM3QkQsSUFBSSxDQUFDLFFBQVEsQ0FBUEUsTUFBTSxFQUFLLENBQUM7WUFDakJqQixTQUFRLENBQUNpQixNQUFNLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUVDLEtBQUssQ0FBQyxRQUFRLENBQVBDLEdBQUcsRUFBSyxDQUFDO1lBQ2pCYixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVULE1BQU0sQ0FBQyxDQUFDO1FBQUNmLElBQUksRUFBSkEsSUFBSTtJQUFDLENBQUM7QUFDbkIsQ0FBQztHQW5DUUYsWUFBWTtBQXNDckIsK0RBQWVBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY3VzdG9tSG9va3MvdXNlRmV0Y2hEYXRhLmpzP2RmOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgc2V0UG9zdHN9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuXHJcbmZ1bmN0aW9uIHVzZUZldGNoRGF0YSggdXJsKSB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coY29va2llcylcclxuICAgIHZhciB1cmwgPSBcInVybFwiO1xyXG5cclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxueGhyLm9wZW4oXCJHRVRcIiwgdXJsKTtcclxuXHJcbnhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29va2llXCIsIFwiY3NyZnRva2VuPUU4Z2lUOVNqTzhlWm5iR0hicHhUS0FFM1BxcDBMbFBicWNwQ3JQWlVpMER1VktWM2pFY3pjeTJUd1RIQzRBYnI7IHNlc3Npb25pZD1xZzJ2eG8zYTE1eDR2bWtkbzNtaTFldHZpcWtpcGFreVwiKTtcclxueGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIDU1ZjM3NmFmOGExMzdiNzczZjcyY2NjZDVhMTg0YmRkNGZlYzNmNjFcIik7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2godXJsLCBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgLy8gWW91ciBoZWFkZXIgY29udGVudFxyXG4gICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJzU1ZjM3NmFmOGExMzdiNzczZjcyY2NjZDVhMTg0YmRkNGZlYzNmNjEnLFxyXG4gICAgICAgICAgICAgICdDb29raWUnIDogJ2NzcmZ0b2tlbj1FOGdpVDlTak84ZVpuYkdIYnB4VEtBRTNQcXAwTGxQYnFjcENyUFpVaTBEdVZLVjNqRWN6Y3kyVHdUSEM0QWJyOyBzZXNzaW9uaWQ9cWcydnhvM2ExNXg0dm1rZG8zbWkxZXR2aXFraXBha3knXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQb3N0cyhyZXN1bHQpO1xyXG4gICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHsgZGF0YSB9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlRmV0Y2hEYXRhIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2V0UG9zdHMiLCJDb29raWVzIiwidXNlRmV0Y2hEYXRhIiwidXJsIiwiZGF0YSIsImNvb2tpZXMiLCJjb25zb2xlIiwibG9nIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsInJlc3VsdCIsImNhdGNoIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/customHooks/useFetchData.js\n");

/***/ })

});