"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);\nswr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst ep = \"https://saas-challenge-bg.azurewebsites.net\";\nconst createFetcher = (token)=>{\n    const headers = new Headers();\n    headers.append(\"Authorization\", `Bearer ${token}`);\n    return async (url)=>fetch(url, {\n            headers,\n            mode: \"cors\"\n        }).then((res)=>res.text());\n};\nconst ApiData = ()=>{\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`${ep}/api/HttpTrigger1?name=iwate`, createFetcher(session.idToken));\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"failed to load\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\iwate\\\\works\\\\iwate\\\\saas-challenge\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 23\n    }, undefined);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\iwate\\\\works\\\\iwate\\\\saas-challenge\\\\pages\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 23\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\iwate\\\\works\\\\iwate\\\\saas-challenge\\\\pages\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 12\n    }, undefined);\n};\nfunction HomePage() {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                \"Signed in as \",\n                session.user.email,\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\iwate\\\\works\\\\iwate\\\\saas-challenge\\\\pages\\\\index.js\",\n                    lineNumber: 25,\n                    columnNumber: 51\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ApiData, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\iwate\\\\works\\\\iwate\\\\saas-challenge\\\\pages\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\iwate\\\\works\\\\iwate\\\\saas-challenge\\\\pages\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 28\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\iwate\\\\works\\\\iwate\\\\saas-challenge\\\\pages\\\\index.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"Not signed in \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iwate\\\\works\\\\iwate\\\\saas-challenge\\\\pages\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 27\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"azure-ad-b2c\"),\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iwate\\\\works\\\\iwate\\\\saas-challenge\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE2RDtBQUNwQztBQUV6QixNQUFNSSxFQUFFLEdBQUdDLDZDQUE4QjtBQUN6QyxNQUFNRyxhQUFhLEdBQUdDLENBQUFBLEtBQUssR0FBSTtJQUMzQixNQUFNQyxPQUFPLEdBQUcsSUFBSUMsT0FBTyxFQUFFO0lBQzdCRCxPQUFPLENBQUNFLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLEVBQUVILEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbEQsT0FBTyxPQUFPSSxHQUFHLEdBQUtDLEtBQUssQ0FBQ0QsR0FBRyxFQUFFO1lBQUVILE9BQU87WUFBRUssSUFBSSxFQUFFLE1BQU07U0FBRSxDQUFDLENBQUNDLElBQUksQ0FBQ0MsQ0FBQUEsR0FBRyxHQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRSxDQUFDO0FBQ3ZGLENBQUM7QUFFRCxNQUFNQyxPQUFPLEdBQUcsSUFBTTtJQUNsQixNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxHQUFFLEdBQUdyQiwyREFBVSxFQUFFO0lBQ3RDLE1BQU0sRUFBRW9CLElBQUksR0FBRUUsS0FBSyxHQUFFLEdBQUduQiwrQ0FBTSxDQUFDLENBQUMsRUFBRUMsRUFBRSxDQUFDLDRCQUE0QixDQUFDLEVBQUVJLGFBQWEsQ0FBQ2EsT0FBTyxDQUFDRSxPQUFPLENBQUMsQ0FBQztJQUNuRyxJQUFJRCxLQUFLLEVBQUUscUJBQU8sOERBQUNFLEtBQUc7a0JBQUMsZ0JBQWM7Ozs7O2lCQUFNO0lBQzNDLElBQUksQ0FBQ0osSUFBSSxFQUFFLHFCQUFPLDhEQUFDSSxLQUFHO2tCQUFDLFlBQVU7Ozs7O2lCQUFNO0lBQ3ZDLHFCQUFPLDhEQUFDQSxLQUFHO2tCQUFFSixJQUFJOzs7OztpQkFBTztBQUM1QixDQUFDO0FBRUQsU0FBU0ssUUFBUSxHQUFHO0lBQ2hCLE1BQU0sRUFBRUwsSUFBSSxFQUFFQyxPQUFPLEdBQUUsR0FBR3JCLDJEQUFVLEVBQUU7SUFFdEMsSUFBSXFCLE9BQU8sRUFBRTtRQUNULHFCQUNJOztnQkFBRSxlQUNlO2dCQUFDQSxPQUFPLENBQUNLLElBQUksQ0FBQ0MsS0FBSztnQkFBQyxHQUFDOzhCQUFBLDhEQUFDQyxJQUFFOzs7O3dCQUFHOzhCQUN4Qyw4REFBQ1QsT0FBTzs7Ozt3QkFBRTtnQkFBQSxHQUFDOzhCQUFBLDhEQUFDUyxJQUFFOzs7O3dCQUFFOzhCQUNoQiw4REFBQ0MsUUFBTTtvQkFBQ0MsT0FBTyxFQUFFLElBQU01Qix3REFBTyxFQUFFOzhCQUFFLFVBQVE7Ozs7O3dCQUFTOzt3QkFDcEQsQ0FDTjtJQUNMLENBQUM7SUFDRCxxQkFDSTs7WUFBRSxnQkFDZ0I7MEJBQUEsOERBQUMwQixJQUFFOzs7O29CQUFHOzBCQUNwQiw4REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFLElBQU03Qix1REFBTSxDQUFDLGNBQWMsQ0FBQzswQkFBRSxTQUFPOzs7OztvQkFBUzs7b0JBQ2hFLENBQ047QUFDTCxDQUFDO0FBRUQsaUVBQWV3QixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8vLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25Jbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmNvbnN0IGVwID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0VQXHJcbmNvbnN0IGNyZWF0ZUZldGNoZXIgPSB0b2tlbiA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke3Rva2VufWApXHJcbiAgICByZXR1cm4gYXN5bmMgKHVybCkgPT4gZmV0Y2godXJsLCB7IGhlYWRlcnMsIG1vZGU6IFwiY29yc1wiIH0pLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpXHJcbn1cclxuXHJcbmNvbnN0IEFwaURhdGEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGAke2VwfS9hcGkvSHR0cFRyaWdnZXIxP25hbWU9aXdhdGVgLCBjcmVhdGVGZXRjaGVyKHNlc3Npb24uaWRUb2tlbikpXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhaWxlZCB0byBsb2FkPC9kaXY+XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cclxuICAgIHJldHVybiA8ZGl2PntkYXRhfTwvZGl2PlxyXG59XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXHJcblxyXG4gICAgaWYgKHNlc3Npb24pIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgU2lnbmVkIGluIGFzIHtzZXNzaW9uLnVzZXIuZW1haWx9IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEFwaURhdGEvPiA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlNpZ24gb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgTm90IHNpZ25lZCBpbiA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oJ2F6dXJlLWFkLWIyYycpfT5TaWduIGluPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU1dSIiwiZXAiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0VQIiwiY3JlYXRlRmV0Y2hlciIsInRva2VuIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJ1cmwiLCJmZXRjaCIsIm1vZGUiLCJ0aGVuIiwicmVzIiwidGV4dCIsIkFwaURhdGEiLCJkYXRhIiwic2Vzc2lvbiIsImVycm9yIiwiaWRUb2tlbiIsImRpdiIsIkhvbWVQYWdlIiwidXNlciIsImVtYWlsIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();