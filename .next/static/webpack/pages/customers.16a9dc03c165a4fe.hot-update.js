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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal-cookie */ \"./node_modules/universal-cookie/es6/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\nfunction useFetchData(url) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), data = ref[0], setPosts1 = ref[1];\n    var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    console.log(cookies);\n    //var url = \"url\";\n    var axios1 = (__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\")[\"default\"]);\n    axios1({\n        method: 'get',\n        url: url,\n        headers: {\n            Cookie: \"csrftoken=E8giT9SjO8eZnbGHbpxTKAE3Pqp0LlPbqcpCrPZUi0DuVKV3jEczcy2TwTHC4Abr; sessionid=qg2vxo3a15x4vmkdo3mi1etviqkipaky\",\n            Authorization: \"55f376af8a137b773f72cccd5a184bdd4fec3f61\",\n            xsrfCookieName: 'XSRF-TOKEN'\n        }\n    }).then(function(response) {\n        response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'));\n    });\n    // xhr.setRequestHeader(\"Cookie\", \"csrftoken=E8giT9SjO8eZnbGHbpxTKAE3Pqp0LlPbqcpCrPZUi0DuVKV3jEczcy2TwTHC4Abr; sessionid=qg2vxo3a15x4vmkdo3mi1etviqkipaky\");\n    // xhr.setRequestHeader(\"Authorization\", \"Bearer 55f376af8a137b773f72cccd5a184bdd4fec3f61\");\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        fetch(url, {\n            credentials: 'include',\n            headers: {\n                // Your header content\n                'Authorization': '55f376af8a137b773f72cccd5a184bdd4fec3f61',\n                'Cookie': 'csrftoken=E8giT9SjO8eZnbGHbpxTKAE3Pqp0LlPbqcpCrPZUi0DuVKV3jEczcy2TwTHC4Abr; sessionid=qg2vxo3a15x4vmkdo3mi1etviqkipaky'\n            }\n        }).then(function(res) {\n            return console.log(res);\n        }).then(function(result) {\n            setPosts1(result);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    }, []);\n    return {\n        data: data\n    };\n}\n_s(useFetchData, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFetchData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jdXN0b21Ib29rcy91c2VGZXRjaERhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9EO0FBQ2Q7QUFDYjs7U0FFaEJLLFlBQVksQ0FBRUMsR0FBRyxFQUFFLENBQUM7O0lBQ3pCLEdBQUssQ0FBb0JOLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBN0JPLElBQUksR0FBY1AsR0FBWSxLQUF4QkUsU0FBUSxHQUFJRixHQUFZO0lBQ3JDLEdBQUssQ0FBQ1EsT0FBTyxHQUFHLEdBQUcsQ0FBQ0wsd0RBQU87SUFFM0JNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPO0lBQ25CLEVBQWtCO0lBRWxCLEdBQUssQ0FBQ0osTUFBSyxHQUFHTyw4RUFBd0I7SUFHMUNQLE1BQUssQ0FBQyxDQUFDO1FBQ0xTLE1BQU0sRUFBRSxDQUFLO1FBQ2JQLEdBQUcsRUFBRUEsR0FBRztRQUNSUSxPQUFPLEVBQUUsQ0FBQztZQUNSQyxNQUFNLEVBQUUsQ0FBd0g7WUFDaElDLGFBQWEsRUFBRSxDQUEwQztZQUN6REMsY0FBYyxFQUFFLENBQVk7UUFDOUIsQ0FBQztJQUNILENBQUMsRUFDRUMsSUFBSSxDQUFDLFFBQVEsQ0FBRUMsUUFBUSxFQUFFLENBQUM7UUFDekJBLFFBQVEsQ0FBQ1osSUFBSSxDQUFDYSxJQUFJLENBQUNDLEVBQUUsQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBa0I7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDTCxFQUE0SjtJQUM1SixFQUE0RjtJQUd4RnJCLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYnNCLEtBQUssQ0FBQ2pCLEdBQUcsRUFFUCxDQUFDO1lBQ0NrQixXQUFXLEVBQUUsQ0FBUztZQUV0QlYsT0FBTyxFQUFDLENBQUM7Z0JBQ1AsRUFBc0I7Z0JBQ3RCLENBQWUsZ0JBQUUsQ0FBMEM7Z0JBQzNELENBQVEsU0FBRyxDQUF3SDtZQUNySSxDQUFDO1FBQ0gsQ0FBQyxFQUNBSSxJQUFJLENBQUMsUUFBUSxDQUFQTyxHQUFHO21CQUFLaEIsT0FBTyxDQUFDQyxHQUFHLENBQUNlLEdBQUc7V0FDN0JQLElBQUksQ0FBQyxRQUFRLENBQVBRLE1BQU0sRUFBSyxDQUFDO1lBQ2pCeEIsU0FBUSxDQUFDd0IsTUFBTSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFFQyxLQUFLLENBQUMsUUFBUSxDQUFQQyxHQUFHLEVBQUssQ0FBQztZQUNqQm5CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDa0IsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVULE1BQU0sQ0FBQyxDQUFDO1FBQUNyQixJQUFJLEVBQUpBLElBQUk7SUFBQyxDQUFDO0FBQ25CLENBQUM7R0EvQ1FGLFlBQVk7QUFrRHJCLCtEQUFlQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2N1c3RvbUhvb2tzL3VzZUZldGNoRGF0YS5qcz9kZjhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHNldFBvc3RzfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiB1c2VGZXRjaERhdGEoIHVybCkge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNvb2tpZXMpXHJcbiAgICAvL3ZhciB1cmwgPSBcInVybFwiO1xyXG5cclxuICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xyXG5cclxuXHJcbmF4aW9zKHtcclxuICBtZXRob2Q6ICdnZXQnLFxyXG4gIHVybDogdXJsLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIENvb2tpZTogXCJjc3JmdG9rZW49RThnaVQ5U2pPOGVabmJHSGJweFRLQUUzUHFwMExsUGJxY3BDclBaVWkwRHVWS1YzakVjemN5MlR3VEhDNEFicjsgc2Vzc2lvbmlkPXFnMnZ4bzNhMTV4NHZta2RvM21pMWV0dmlxa2lwYWt5XCIsXHJcbiAgICBBdXRob3JpemF0aW9uOiBcIjU1ZjM3NmFmOGExMzdiNzczZjcyY2NjZDVhMTg0YmRkNGZlYzNmNjFcIixcclxuICAgIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXHJcbiAgfVxyXG59KVxyXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgcmVzcG9uc2UuZGF0YS5waXBlKGZzLmNyZWF0ZVdyaXRlU3RyZWFtKCdhZGFfbG92ZWxhY2UuanBnJykpXHJcbiAgfSk7XHJcbi8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29va2llXCIsIFwiY3NyZnRva2VuPUU4Z2lUOVNqTzhlWm5iR0hicHhUS0FFM1BxcDBMbFBicWNwQ3JQWlVpMER1VktWM2pFY3pjeTJUd1RIQzRBYnI7IHNlc3Npb25pZD1xZzJ2eG8zYTE1eDR2bWtkbzNtaTFldHZpcWtpcGFreVwiKTtcclxuLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIDU1ZjM3NmFmOGExMzdiNzczZjcyY2NjZDVhMTg0YmRkNGZlYzNmNjFcIik7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2godXJsLCBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgLy8gWW91ciBoZWFkZXIgY29udGVudFxyXG4gICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJzU1ZjM3NmFmOGExMzdiNzczZjcyY2NjZDVhMTg0YmRkNGZlYzNmNjEnLFxyXG4gICAgICAgICAgICAgICdDb29raWUnIDogJ2NzcmZ0b2tlbj1FOGdpVDlTak84ZVpuYkdIYnB4VEtBRTNQcXAwTGxQYnFjcENyUFpVaTBEdVZLVjNqRWN6Y3kyVHdUSEM0QWJyOyBzZXNzaW9uaWQ9cWcydnhvM2ExNXg0dm1rZG8zbWkxZXR2aXFraXBha3knXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQb3N0cyhyZXN1bHQpO1xyXG4gICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHsgZGF0YSB9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlRmV0Y2hEYXRhIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2V0UG9zdHMiLCJDb29raWVzIiwiYXhpb3MiLCJ1c2VGZXRjaERhdGEiLCJ1cmwiLCJkYXRhIiwiY29va2llcyIsImNvbnNvbGUiLCJsb2ciLCJyZXF1aXJlIiwiZGVmYXVsdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJDb29raWUiLCJBdXRob3JpemF0aW9uIiwieHNyZkNvb2tpZU5hbWUiLCJ0aGVuIiwicmVzcG9uc2UiLCJwaXBlIiwiZnMiLCJjcmVhdGVXcml0ZVN0cmVhbSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJyZXN1bHQiLCJjYXRjaCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/customHooks/useFetchData.js\n");

/***/ })

});