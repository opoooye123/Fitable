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
exports.id = "app/api/book/route";
exports.ids = ["app/api/book/route"];
exports.modules = {

/***/ "(rsc)/./app/api/book/route.ts":
/*!*******************************!*\
  !*** ./app/api/book/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n\n\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_1__.Resend(process.env.RESEND_API_KEY);\nasync function POST(request) {\n    try {\n        const { name, email, phone, service, date, time, message } = await request.json();\n        // Send email using Resend's default domain\n        const { data, error } = await resend.emails.send({\n            from: 'Fitables Beauty Bar <onboarding@resend.dev>',\n            to: 'amnotpissed@gmail.com',\n            subject: `New Booking Request from ${name}`,\n            html: `\n        <div style=\"font-family: sans-serif; line-height: 1.6;\">\n          <h2 style=\"color: #228B22;\">New Appointment Booking!</h2>\n          <p><strong>Name:</strong> ${name}</p>\n          <p><strong>Email:</strong> ${email}</p>\n          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>\n          <p><strong>Service:</strong> ${service}</p>\n          <p><strong>Date:</strong> ${date}</p>\n          <p><strong>Time:</strong> ${time}</p>\n          <p><strong>Message:</strong> ${message || 'N/A'}</p>\n          <br/>\n          <p>Please reply to confirm the booking.</p>\n        </div>\n      `\n        });\n        if (error) {\n            console.error('Resend email error:', error);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Failed to send booking email.',\n                error: error.message\n            }, {\n                status: 500\n            });\n        }\n        console.log('Resend email sent:', data);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Booking request sent successfully!'\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error('Error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error processing booking request.'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Jvb2svcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBDO0FBQ1g7QUFFL0IsTUFBTUUsU0FBUyxJQUFJRCwwQ0FBTUEsQ0FBQ0UsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBRTdDLGVBQWVDLEtBQUtDLE9BQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxHQUFHLE1BQU1QLFFBQVFRLElBQUk7UUFFL0UsMkNBQTJDO1FBQzNDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNZixPQUFPZ0IsTUFBTSxDQUFDQyxJQUFJLENBQUM7WUFDL0NDLE1BQU07WUFDTkMsSUFBSTtZQUNKQyxTQUFTLENBQUMseUJBQXlCLEVBQUVkLE1BQU07WUFDM0NlLE1BQU0sQ0FBQzs7O29DQUd1QixFQUFFZixLQUFLO3FDQUNOLEVBQUVDLE1BQU07cUNBQ1IsRUFBRUMsU0FBUyxNQUFNO3VDQUNmLEVBQUVDLFFBQVE7b0NBQ2IsRUFBRUMsS0FBSztvQ0FDUCxFQUFFQyxLQUFLO3VDQUNKLEVBQUVDLFdBQVcsTUFBTTs7OztNQUlwRCxDQUFDO1FBQ0g7UUFFQSxJQUFJRyxPQUFPO1lBQ1RPLFFBQVFQLEtBQUssQ0FBQyx1QkFBdUJBO1lBQ3JDLE9BQU9qQixxREFBWUEsQ0FBQ2UsSUFBSSxDQUFDO2dCQUFFRCxTQUFTO2dCQUFpQ0csT0FBT0EsTUFBTUgsT0FBTztZQUFDLEdBQUc7Z0JBQUVXLFFBQVE7WUFBSTtRQUM3RztRQUVBRCxRQUFRRSxHQUFHLENBQUMsc0JBQXNCVjtRQUNsQyxPQUFPaEIscURBQVlBLENBQUNlLElBQUksQ0FBQztZQUFFRCxTQUFTO1FBQXFDLEdBQUc7WUFBRVcsUUFBUTtRQUFJO0lBQzVGLEVBQUUsT0FBT1IsT0FBTztRQUNkTyxRQUFRUCxLQUFLLENBQUMsVUFBVUE7UUFDeEIsT0FBT2pCLHFEQUFZQSxDQUFDZSxJQUFJLENBQUM7WUFBRUQsU0FBUztRQUFvQyxHQUFHO1lBQUVXLFFBQVE7UUFBSTtJQUMzRjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFNpci1sZXh5XFxEb3dubG9hZHNcXGZpdGFibGVzLWJlYXV0eS1iYXIgKDEpXFxhcHBcXGFwaVxcYm9va1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgeyBSZXNlbmQgfSBmcm9tICdyZXNlbmQnXG5cbmNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQocHJvY2Vzcy5lbnYuUkVTRU5EX0FQSV9LRVkpXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwaG9uZSwgc2VydmljZSwgZGF0ZSwgdGltZSwgbWVzc2FnZSB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcblxuICAgIC8vIFNlbmQgZW1haWwgdXNpbmcgUmVzZW5kJ3MgZGVmYXVsdCBkb21haW5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xuICAgICAgZnJvbTogJ0ZpdGFibGVzIEJlYXV0eSBCYXIgPG9uYm9hcmRpbmdAcmVzZW5kLmRldj4nLCAvLyBObyBkb21haW4gdmVyaWZpY2F0aW9uIG5lZWRlZFxuICAgICAgdG86ICdhbW5vdHBpc3NlZEBnbWFpbC5jb20nLCAvLyBSZXBsYWNlIHdpdGggeW91ciByZWFsIGVtYWlsXG4gICAgICBzdWJqZWN0OiBgTmV3IEJvb2tpbmcgUmVxdWVzdCBmcm9tICR7bmFtZX1gLFxuICAgICAgaHRtbDogYFxuICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IGxpbmUtaGVpZ2h0OiAxLjY7XCI+XG4gICAgICAgICAgPGgyIHN0eWxlPVwiY29sb3I6ICMyMjhCMjI7XCI+TmV3IEFwcG9pbnRtZW50IEJvb2tpbmchPC9oMj5cbiAgICAgICAgICA8cD48c3Ryb25nPk5hbWU6PC9zdHJvbmc+ICR7bmFtZX08L3A+XG4gICAgICAgICAgPHA+PHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4gJHtlbWFpbH08L3A+XG4gICAgICAgICAgPHA+PHN0cm9uZz5QaG9uZTo8L3N0cm9uZz4gJHtwaG9uZSB8fCAnTi9BJ308L3A+XG4gICAgICAgICAgPHA+PHN0cm9uZz5TZXJ2aWNlOjwvc3Ryb25nPiAke3NlcnZpY2V9PC9wPlxuICAgICAgICAgIDxwPjxzdHJvbmc+RGF0ZTo8L3N0cm9uZz4gJHtkYXRlfTwvcD5cbiAgICAgICAgICA8cD48c3Ryb25nPlRpbWU6PC9zdHJvbmc+ICR7dGltZX08L3A+XG4gICAgICAgICAgPHA+PHN0cm9uZz5NZXNzYWdlOjwvc3Ryb25nPiAke21lc3NhZ2UgfHwgJ04vQSd9PC9wPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPHA+UGxlYXNlIHJlcGx5IHRvIGNvbmZpcm0gdGhlIGJvb2tpbmcuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGAsXG4gICAgfSlcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignUmVzZW5kIGVtYWlsIGVycm9yOicsIGVycm9yKVxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0ZhaWxlZCB0byBzZW5kIGJvb2tpbmcgZW1haWwuJywgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdSZXNlbmQgZW1haWwgc2VudDonLCBkYXRhKVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdCb29raW5nIHJlcXVlc3Qgc2VudCBzdWNjZXNzZnVsbHkhJyB9LCB7IHN0YXR1czogMjAwIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0Vycm9yIHByb2Nlc3NpbmcgYm9va2luZyByZXF1ZXN0LicgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiUmVzZW5kIiwicmVzZW5kIiwicHJvY2VzcyIsImVudiIsIlJFU0VORF9BUElfS0VZIiwiUE9TVCIsInJlcXVlc3QiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsInNlcnZpY2UiLCJkYXRlIiwidGltZSIsIm1lc3NhZ2UiLCJqc29uIiwiZGF0YSIsImVycm9yIiwiZW1haWxzIiwic2VuZCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJodG1sIiwiY29uc29sZSIsInN0YXR1cyIsImxvZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/book/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbook%2Froute&page=%2Fapi%2Fbook%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbook%2Froute.ts&appDir=C%3A%5CUsers%5CSir-lexy%5CDownloads%5Cfitables-beauty-bar%20(1)%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSir-lexy%5CDownloads%5Cfitables-beauty-bar%20(1)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbook%2Froute&page=%2Fapi%2Fbook%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbook%2Froute.ts&appDir=C%3A%5CUsers%5CSir-lexy%5CDownloads%5Cfitables-beauty-bar%20(1)%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSir-lexy%5CDownloads%5Cfitables-beauty-bar%20(1)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Sir_lexy_Downloads_fitables_beauty_bar_1_app_api_book_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/book/route.ts */ \"(rsc)/./app/api/book/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/book/route\",\n        pathname: \"/api/book\",\n        filename: \"route\",\n        bundlePath: \"app/api/book/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Sir-lexy\\\\Downloads\\\\fitables-beauty-bar (1)\\\\app\\\\api\\\\book\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Sir_lexy_Downloads_fitables_beauty_bar_1_app_api_book_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZib29rJTJGcm91dGUmcGFnZT0lMkZhcGklMkZib29rJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYm9vayUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNTaXItbGV4eSU1Q0Rvd25sb2FkcyU1Q2ZpdGFibGVzLWJlYXV0eS1iYXIlMjAoMSklNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1Npci1sZXh5JTVDRG93bmxvYWRzJTVDZml0YWJsZXMtYmVhdXR5LWJhciUyMCgxKSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDaUM7QUFDOUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFNpci1sZXh5XFxcXERvd25sb2Fkc1xcXFxmaXRhYmxlcy1iZWF1dHktYmFyICgxKVxcXFxhcHBcXFxcYXBpXFxcXGJvb2tcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2Jvb2svcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9ib29rXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9ib29rL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcU2lyLWxleHlcXFxcRG93bmxvYWRzXFxcXGZpdGFibGVzLWJlYXV0eS1iYXIgKDEpXFxcXGFwcFxcXFxhcGlcXFxcYm9va1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbook%2Froute&page=%2Fapi%2Fbook%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbook%2Froute.ts&appDir=C%3A%5CUsers%5CSir-lexy%5CDownloads%5Cfitables-beauty-bar%20(1)%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSir-lexy%5CDownloads%5Cfitables-beauty-bar%20(1)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "prettier/plugins/html":
/*!****************************************!*\
  !*** external "prettier/plugins/html" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("prettier/plugins/html");;

/***/ }),

/***/ "prettier/standalone":
/*!**************************************!*\
  !*** external "prettier/standalone" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("prettier/standalone");;

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/resend"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbook%2Froute&page=%2Fapi%2Fbook%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbook%2Froute.ts&appDir=C%3A%5CUsers%5CSir-lexy%5CDownloads%5Cfitables-beauty-bar%20(1)%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSir-lexy%5CDownloads%5Cfitables-beauty-bar%20(1)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();