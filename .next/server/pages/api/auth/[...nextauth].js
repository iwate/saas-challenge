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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/azure-ad-b2c":
/*!***************************************************!*\
  !*** external "next-auth/providers/azure-ad-b2c" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/azure-ad-b2c");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_azure_ad_b2c__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/azure-ad-b2c */ \"next-auth/providers/azure-ad-b2c\");\n/* harmony import */ var next_auth_providers_azure_ad_b2c__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_azure_ad_b2c__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_azure_ad_b2c__WEBPACK_IMPORTED_MODULE_1___default()({\n            tenantId: process.env.AZURE_AD_B2C_TENANT_NAME,\n            clientId: process.env.AZURE_AD_B2C_CLIENT_ID,\n            clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET,\n            primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW,\n            authorization: {\n                params: {\n                    scope: \"offline_access openid\"\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token , account  }) {\n            // Persist the OAuth access_token to the token right after signin\n            if (account) {\n                console.log(account);\n                token.idToken = account.id_token;\n            }\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            // Send properties to the client, like an access_token from a provider\n            console.log(token);\n            session.idToken = token.idToken;\n            return session;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUM2QjtBQUN0RCxNQUFNRSxXQUFXLEdBQUc7SUFDdkIsaURBQWlEO0lBQ2pEQyxTQUFTLEVBQUU7UUFDUEYsdUVBQWMsQ0FBQztZQUNYRyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyx3QkFBd0I7WUFDOUNDLFFBQVEsRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLHNCQUFzQjtZQUM1Q0MsWUFBWSxFQUFFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssMEJBQTBCO1lBQ3BEQyxlQUFlLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyw4QkFBOEI7WUFDM0RDLGFBQWEsRUFBRTtnQkFBRUMsTUFBTSxFQUFFO29CQUFFQyxLQUFLLEVBQUUsdUJBQXVCO2lCQUFFO2FBQUU7U0FDaEUsQ0FBQztLQUVMO0lBQ0RDLFNBQVMsRUFBRTtRQUNQLE1BQU1DLEdBQUcsRUFBQyxFQUFFQyxLQUFLLEdBQUVDLE9BQU8sR0FBRSxFQUFFO1lBQzFCLGlFQUFpRTtZQUNqRSxJQUFJQSxPQUFPLEVBQUU7Z0JBQ1RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUM7Z0JBQ3BCRCxLQUFLLENBQUNJLE9BQU8sR0FBR0gsT0FBTyxDQUFDSSxRQUFRO1lBQ3BDLENBQUM7WUFDRCxPQUFPTCxLQUFLO1FBQ2QsQ0FBQztRQUNILE1BQU1NLE9BQU8sRUFBQyxFQUFFQSxPQUFPLEdBQUVOLEtBQUssR0FBRU8sSUFBSSxHQUFFLEVBQUU7WUFDcEMsc0VBQXNFO1lBQ3RFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDO1lBQ2xCTSxPQUFPLENBQUNGLE9BQU8sR0FBR0osS0FBSyxDQUFDSSxPQUFPO1lBQy9CLE9BQU9FLE9BQU8sQ0FBQztRQUNuQixDQUFDO0tBQ0o7Q0FDSjtBQUNELGlFQUFlekIsZ0RBQVEsQ0FBQ0UsV0FBVyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxyXG5pbXBvcnQgQUFEQjJDUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvYXp1cmUtYWQtYjJjXCJcclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gICAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQUFEQjJDUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICB0ZW5hbnRJZDogcHJvY2Vzcy5lbnYuQVpVUkVfQURfQjJDX1RFTkFOVF9OQU1FLFxyXG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVpVUkVfQURfQjJDX0NMSUVOVF9JRCxcclxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BWlVSRV9BRF9CMkNfQ0xJRU5UX1NFQ1JFVCxcclxuICAgICAgICAgICAgcHJpbWFyeVVzZXJGbG93OiBwcm9jZXNzLmVudi5BWlVSRV9BRF9CMkNfUFJJTUFSWV9VU0VSX0ZMT1csXHJcbiAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHsgcGFyYW1zOiB7IHNjb3BlOiBcIm9mZmxpbmVfYWNjZXNzIG9wZW5pZFwiIH0gfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlXHJcbiAgICBdLFxyXG4gICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgYXN5bmMgand0KHsgdG9rZW4sIGFjY291bnQgfSkge1xyXG4gICAgICAgICAgICAvLyBQZXJzaXN0IHRoZSBPQXV0aCBhY2Nlc3NfdG9rZW4gdG8gdGhlIHRva2VuIHJpZ2h0IGFmdGVyIHNpZ25pblxyXG4gICAgICAgICAgICBpZiAoYWNjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWNjb3VudClcclxuICAgICAgICAgICAgICAgIHRva2VuLmlkVG9rZW4gPSBhY2NvdW50LmlkX3Rva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiwgdXNlciB9KSB7XHJcbiAgICAgICAgICAgIC8vIFNlbmQgcHJvcGVydGllcyB0byB0aGUgY2xpZW50LCBsaWtlIGFuIGFjY2Vzc190b2tlbiBmcm9tIGEgcHJvdmlkZXJcclxuICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW4pXHJcbiAgICAgICAgICAgIHNlc3Npb24uaWRUb2tlbiA9IHRva2VuLmlkVG9rZW5cclxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkFBREIyQ1Byb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJ0ZW5hbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJBWlVSRV9BRF9CMkNfVEVOQU5UX05BTUUiLCJjbGllbnRJZCIsIkFaVVJFX0FEX0IyQ19DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJBWlVSRV9BRF9CMkNfQ0xJRU5UX1NFQ1JFVCIsInByaW1hcnlVc2VyRmxvdyIsIkFaVVJFX0FEX0IyQ19QUklNQVJZX1VTRVJfRkxPVyIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJzY29wZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwiYWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJpZFRva2VuIiwiaWRfdG9rZW4iLCJzZXNzaW9uIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();