/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.server = exports.getRequestData = void 0;\r\nvar http_1 = __webpack_require__(/*! http */ \"http\");\r\nvar user_1 = __webpack_require__(/*! ./services/user */ \"./src/services/user.ts\");\r\nvar url_1 = __importDefault(__webpack_require__(/*! url */ \"url\"));\r\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\r\nvar os_1 = __webpack_require__(/*! os */ \"os\");\r\nvar envPort = {\"PORT\":\"3000\",\"HOST\":\"localhost\",\"NODE_ENV\":\"development\"}.PORT;\r\nvar port = envPort || 3001;\r\nvar host = {\"PORT\":\"3000\",\"HOST\":\"localhost\",\"NODE_ENV\":\"development\"}.HOST || 'localhost';\r\nvar getCpus = function () {\r\n    return (0, os_1.cpus)().length;\r\n};\r\nvar getRequestData = function (request) {\r\n    request.setEncoding('utf8');\r\n    return new Promise(function (resolve) {\r\n        var body = '';\r\n        request.on('data', function (chunk) {\r\n            body += chunk;\r\n        });\r\n        request.on('end', function () {\r\n            resolve(JSON.parse(body));\r\n        });\r\n    });\r\n};\r\nexports.getRequestData = getRequestData;\r\nvar handleRequest = function (request) { return __awaiter(void 0, void 0, Promise, function () {\r\n    var route, query, params, body, _a, errorMessage_1;\r\n    return __generator(this, function (_b) {\r\n        switch (_b.label) {\r\n            case 0:\r\n                route = request.url;\r\n                query = url_1.default.parse(request.url, true).query;\r\n                params = { id: null };\r\n                if (query) {\r\n                    params.id = query.id;\r\n                }\r\n                _b.label = 1;\r\n            case 1:\r\n                _b.trys.push([1, 13, , 14]);\r\n                _a = request.method;\r\n                switch (_a) {\r\n                    case 'GET': return [3 /*break*/, 2];\r\n                    case 'POST': return [3 /*break*/, 4];\r\n                    case 'PUT': return [3 /*break*/, 7];\r\n                    case 'DELETE': return [3 /*break*/, 10];\r\n                }\r\n                return [3 /*break*/, 12];\r\n            case 2: return [4 /*yield*/, (0, user_1.getUsers)(params)];\r\n            case 3: return [2 /*return*/, _b.sent()];\r\n            case 4: return [4 /*yield*/, (0, exports.getRequestData)(request)];\r\n            case 5:\r\n                // @ts-ignore\r\n                body = _b.sent();\r\n                return [4 /*yield*/, (0, user_1.createUser)(body)];\r\n            case 6: return [2 /*return*/, _b.sent()];\r\n            case 7: return [4 /*yield*/, (0, exports.getRequestData)(request)];\r\n            case 8:\r\n                // @ts-ignore\r\n                body = _b.sent();\r\n                return [4 /*yield*/, (0, user_1.updateUser)(params, body)];\r\n            case 9: return [2 /*return*/, _b.sent()];\r\n            case 10: return [4 /*yield*/, (0, user_1.deleteUser)(params)];\r\n            case 11: return [2 /*return*/, _b.sent()];\r\n            case 12: return [3 /*break*/, 14];\r\n            case 13:\r\n                errorMessage_1 = _b.sent();\r\n                return [2 /*return*/, (0, utils_1.formatJSONResponse)({ message: 'Unhandled error' }, 500)];\r\n            case 14: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.server = (0, http_1.createServer)();\r\nexports.server.on('request', function (request, response) { return __awaiter(void 0, void 0, Promise, function () {\r\n    var data, headers, body, statusCode, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, handleRequest(request)];\r\n            case 1:\r\n                data = _a.sent();\r\n                if (data) {\r\n                    headers = data.headers, body = data.body, statusCode = data.statusCode;\r\n                    response.writeHead(statusCode, '', headers);\r\n                    response.write(body);\r\n                    response.end();\r\n                }\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_1 = _a.sent();\r\n                //TODO add handler\r\n                throw new Error();\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.server.listen(port, host, function () {\r\n    console.log(\"Server is running on \".concat(host, \":\").concat(port));\r\n});\r\n\n\n//# sourceURL=webpack://simple-crud/./src/index.ts?");

/***/ }),

/***/ "./src/models/model.ts":
/*!*****************************!*\
  !*** ./src/models/model.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.User = void 0;\r\nvar User = /** @class */ (function () {\r\n    function User(name, age, hobby, id) {\r\n        this.name = name;\r\n        this.age = age;\r\n        this.id = id;\r\n        this.hobby = hobby;\r\n        if (!Array.isArray(this.hobby)) {\r\n            this.hobby = undefined;\r\n        }\r\n        if (typeof name !== 'string') {\r\n            this.name = undefined;\r\n        }\r\n        if (typeof age !== 'number') {\r\n            this.age = undefined;\r\n        }\r\n    }\r\n    return User;\r\n}());\r\nexports.User = User;\r\n\n\n//# sourceURL=webpack://simple-crud/./src/models/model.ts?");

/***/ }),

/***/ "./src/services/user.ts":
/*!******************************!*\
  !*** ./src/services/user.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.deleteUser = exports.updateUser = exports.createUser = exports.getUsers = void 0;\r\nvar utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\r\nvar model_1 = __webpack_require__(/*! ../models/model */ \"./src/models/model.ts\");\r\nvar uuid_1 = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-node/index.js\");\r\nvar state = [\r\n    {\r\n        id: '123',\r\n        name: 'Jamie',\r\n        age: 25,\r\n        hobby: ['football'],\r\n    },\r\n    {\r\n        id: '111',\r\n        name: 'Sam',\r\n        age: 30,\r\n        hobby: ['football, basketball'],\r\n    },\r\n];\r\nvar findUserById = function (id) {\r\n    if (id) {\r\n        return state.find(function (user) {\r\n            return user.id === id;\r\n        });\r\n    }\r\n};\r\nvar getUsers = function (params) { return __awaiter(void 0, void 0, Promise, function () {\r\n    var user;\r\n    return __generator(this, function (_a) {\r\n        if (params && params.id) {\r\n            user = findUserById(params.id);\r\n            if (user) {\r\n                return [2 /*return*/, (0, utils_1.formatJSONResponse)({ users: user }, 200)];\r\n            }\r\n            else {\r\n                return [2 /*return*/, (0, utils_1.formatJSONResponse)({ message: 'User not found' }, 400)];\r\n            }\r\n        }\r\n        else {\r\n            return [2 /*return*/, (0, utils_1.formatJSONResponse)({ users: state }, 200)];\r\n        }\r\n        return [2 /*return*/];\r\n    });\r\n}); };\r\nexports.getUsers = getUsers;\r\nvar createUser = function (data) { return __awaiter(void 0, void 0, Promise, function () {\r\n    var id, name, age, hobby, user, key;\r\n    return __generator(this, function (_a) {\r\n        if (data) {\r\n            id = (0, uuid_1.v4)();\r\n            name = data.name, age = data.age, hobby = data.hobby;\r\n            user = new model_1.User(name, age, hobby, id);\r\n            for (key in user) {\r\n                // @ts-ignore\r\n                if (user[key] === undefined && key !== 'id') {\r\n                    return [2 /*return*/, (0, utils_1.formatJSONResponse)({\r\n                            message: \"The field \".concat(key, \" is required\"),\r\n                        }, 400)];\r\n                }\r\n            }\r\n            user.id = id;\r\n            state.push(user);\r\n            return [2 /*return*/, (0, utils_1.formatJSONResponse)({ message: 'User created successfully', users: user }, 201)];\r\n        }\r\n        else {\r\n            return [2 /*return*/, (0, utils_1.formatJSONResponse)({ message: 'Not contain something' }, 400)];\r\n        }\r\n        return [2 /*return*/];\r\n    });\r\n}); };\r\nexports.createUser = createUser;\r\nvar updateUser = function (params, data) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, currentUser, name, age, hobby, user, key, index;\r\n    return __generator(this, function (_a) {\r\n        id = params.id;\r\n        if (!(0, uuid_1.validate)(id)) {\r\n            return [2 /*return*/, (0, utils_1.formatJSONResponse)({ message: 'UserId is not valid' }, 400)];\r\n        }\r\n        if (id) {\r\n            currentUser = findUserById(id);\r\n            if (currentUser) {\r\n                name = data.name, age = data.age, hobby = data.hobby;\r\n                user = new model_1.User(name, age, hobby, id);\r\n                for (key in user) {\r\n                    // @ts-ignore\r\n                    if (user[key] === undefined && key !== 'id') {\r\n                        return [2 /*return*/, (0, utils_1.formatJSONResponse)({\r\n                                message: \"The field \".concat(key, \" is required\"),\r\n                            }, 400)];\r\n                    }\r\n                }\r\n                index = state.findIndex(function (user) {\r\n                    return user.id === id;\r\n                });\r\n                state[index] = user;\r\n                return [2 /*return*/, (0, utils_1.formatJSONResponse)({ message: 'User successfully updated', users: user }, 200)];\r\n            }\r\n            else {\r\n                return [2 /*return*/, (0, utils_1.formatJSONResponse)({ message: 'User not found' }, 404)];\r\n            }\r\n        }\r\n        return [2 /*return*/];\r\n    });\r\n}); };\r\nexports.updateUser = updateUser;\r\nvar deleteUser = function (params) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, user;\r\n    return __generator(this, function (_a) {\r\n        id = params.id;\r\n        if (!(0, uuid_1.validate)(id)) {\r\n            return [2 /*return*/, (0, utils_1.formatJSONResponse)({ message: 'UserId is not valid' }, 400)];\r\n        }\r\n        if (id) {\r\n            user = findUserById(id);\r\n            if (user) {\r\n                state = state.filter(function (user) {\r\n                    return user.id !== id;\r\n                });\r\n                console.log(state);\r\n                return [2 /*return*/, (0, utils_1.formatJSONResponse)({ message: 'User successfully deleted' }, 204)];\r\n            }\r\n            else {\r\n                return [2 /*return*/, (0, utils_1.formatJSONResponse)({ message: 'User not found' }, 404)];\r\n            }\r\n        }\r\n        return [2 /*return*/];\r\n    });\r\n}); };\r\nexports.deleteUser = deleteUser;\r\n\n\n//# sourceURL=webpack://simple-crud/./src/services/user.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.formatJSONResponse = void 0;\r\nvar formatJSONResponse = function (response, statusCode) {\r\n    if (statusCode === void 0) { statusCode = 200; }\r\n    return {\r\n        headers: {\r\n            'Access-Control-Allow-Origin': '*',\r\n            'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS\r\n        },\r\n        statusCode: statusCode,\r\n        body: JSON.stringify(response),\r\n    };\r\n};\r\nexports.formatJSONResponse = formatJSONResponse;\r\n\n\n//# sourceURL=webpack://simple-crud/./src/utils.ts?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/index.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NIL\": () => (/* reexport safe */ _nil_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"parse\": () => (/* reexport safe */ _parse_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   \"stringify\": () => (/* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   \"v1\": () => (/* reexport safe */ _v1_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"v3\": () => (/* reexport safe */ _v3_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"v4\": () => (/* reexport safe */ _v4_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"v5\": () => (/* reexport safe */ _v5_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"validate\": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"version\": () => (/* reexport safe */ _version_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ \"./node_modules/uuid/dist/esm-node/v1.js\");\n/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ \"./node_modules/uuid/dist/esm-node/v3.js\");\n/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ \"./node_modules/uuid/dist/esm-node/v4.js\");\n/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ \"./node_modules/uuid/dist/esm-node/v5.js\");\n/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ \"./node_modules/uuid/dist/esm-node/nil.js\");\n/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ \"./node_modules/uuid/dist/esm-node/version.js\");\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-node/validate.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-node/stringify.js\");\n/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ \"./node_modules/uuid/dist/esm-node/parse.js\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://simple-crud/./node_modules/uuid/dist/esm-node/index.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/md5.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/md5.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction md5(bytes) {\n  if (Array.isArray(bytes)) {\n    bytes = Buffer.from(bytes);\n  } else if (typeof bytes === 'string') {\n    bytes = Buffer.from(bytes, 'utf8');\n  }\n\n  return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash('md5').update(bytes).digest();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (md5);\n\n//# sourceURL=webpack://simple-crud/./node_modules/uuid/dist/esm-node/md5.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/nil.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/nil.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('00000000-0000-0000-0000-000000000000');\n\n//# sourceURL=webpack://simple-crud/./node_modules/uuid/dist/esm-node/nil.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/parse.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/parse.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-node/validate.js\");\n\n\nfunction parse(uuid) {\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Invalid UUID');\n  }\n\n  let v;\n  const arr = new Uint8Array(16); // Parse ########-....-....-....-............\n\n  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;\n  arr[1] = v >>> 16 & 0xff;\n  arr[2] = v >>> 8 & 0xff;\n  arr[3] = v & 0xff; // Parse ........-####-....-....-............\n\n  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;\n  arr[5] = v & 0xff; // Parse ........-....-####-....-............\n\n  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;\n  arr[7] = v & 0xff; // Parse ........-....-....-####-............\n\n  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;\n  arr[9] = v & 0xff; // Parse ........-....-....-....-############\n  // (Use \"/\" to avoid 32-bit truncation when bit-shifting high-order bytes)\n\n  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;\n  arr[11] = v / 0x100000000 & 0xff;\n  arr[12] = v >>> 24 & 0xff;\n  arr[13] = v >>> 16 & 0xff;\n  arr[14] = v >>> 8 & 0xff;\n  arr[15] = v & 0xff;\n  return arr;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);\n\n//# sourceURL=webpack://simple-crud/./node_modules/uuid/dist/esm-node/parse.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/regex.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/regex.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://simple-crud/./node_modules/uuid/dist/esm-node/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/rng.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/rng.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n\nconst rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate\n\nlet poolPtr = rnds8Pool.length;\nfunction rng() {\n  if (poolPtr > rnds8Pool.length - 16) {\n    crypto__WEBPACK_IMPORTED_MODULE_0___default().randomFillSync(rnds8Pool);\n    poolPtr = 0;\n  }\n\n  return rnds8Pool.slice(poolPtr, poolPtr += 16);\n}\n\n//# sourceURL=webpack://simple-crud/./node_modules/uuid/dist/esm-node/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/sha1.js":
/*!*************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/sha1.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction sha1(bytes) {\n  if (Array.isArray(bytes)) {\n    bytes = Buffer.from(bytes);\n  } else if (typeof bytes === 'string') {\n    bytes = Buffer.from(bytes, 'utf8');\n  }\n\n  return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash('sha1').update(bytes).digest();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sha1);\n\n//# sourceURL=webpack://simple-crud/./node_modules/uuid/dist/esm-node/sha1.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/stringify.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/stringify.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-node/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://simple-crud/./node_modules/uuid/dist/esm-node/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v1.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v1.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-node/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-node/stringify.js\");\n\n // **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nlet _nodeId;\n\nlet _clockseq; // Previous uuid creation time\n\n\nlet _lastMSecs = 0;\nlet _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details\n\nfunction v1(options, buf, offset) {\n  let i = buf && offset || 0;\n  const b = buf || new Array(16);\n  options = options || {};\n  let node = options.node || _nodeId;\n  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n\n  if (node == null || clockseq == null) {\n    const seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];\n    }\n\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n\n\n  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n\n  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)\n\n  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression\n\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n\n\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  } // Per 4.2.1.2 Throw error if too many uuids are requested\n\n\n  if (nsecs >= 10000) {\n    throw new Error(\"uuid.v1(): Can't create more than 10M uuids/sec\");\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n\n  msecs += 12219292800000; // `time_low`\n\n  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff; // `time_mid`\n\n  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff; // `time_high_and_version`\n\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n\n  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n\n  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`\n\n  b[i++] = clockseq & 0xff; // `node`\n\n  for (let n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf || (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(b);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v1);\n\n//# sourceURL=webpack://simple-crud/./node_modules/uuid/dist/esm-node/v1.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v3.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v3.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ \"./node_modules/uuid/dist/esm-node/v35.js\");\n/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ \"./node_modules/uuid/dist/esm-node/md5.js\");\n\n\nconst v3 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v3);\n\n//# sourceURL=webpack://simple-crud/./node_modules/uuid/dist/esm-node/v3.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v35.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v35.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DNS\": () => (/* binding */ DNS),\n/* harmony export */   \"URL\": () => (/* binding */ URL),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-node/stringify.js\");\n/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse.js */ \"./node_modules/uuid/dist/esm-node/parse.js\");\n\n\n\nfunction stringToBytes(str) {\n  str = unescape(encodeURIComponent(str)); // UTF8 escape\n\n  const bytes = [];\n\n  for (let i = 0; i < str.length; ++i) {\n    bytes.push(str.charCodeAt(i));\n  }\n\n  return bytes;\n}\n\nconst DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';\nconst URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, version, hashfunc) {\n  function generateUUID(value, namespace, buf, offset) {\n    if (typeof value === 'string') {\n      value = stringToBytes(value);\n    }\n\n    if (typeof namespace === 'string') {\n      namespace = (0,_parse_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(namespace);\n    }\n\n    if (namespace.length !== 16) {\n      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');\n    } // Compute hash of namespace and value, Per 4.3\n    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =\n    // hashfunc([...namespace, ... value])`\n\n\n    let bytes = new Uint8Array(16 + value.length);\n    bytes.set(namespace);\n    bytes.set(value, namespace.length);\n    bytes = hashfunc(bytes);\n    bytes[6] = bytes[6] & 0x0f | version;\n    bytes[8] = bytes[8] & 0x3f | 0x80;\n\n    if (buf) {\n      offset = offset || 0;\n\n      for (let i = 0; i < 16; ++i) {\n        buf[offset + i] = bytes[i];\n      }\n\n      return buf;\n    }\n\n    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(bytes);\n  } // Function#name is not settable on some platforms (#270)\n\n\n  try {\n    generateUUID.name = name; // eslint-disable-next-line no-empty\n  } catch (err) {} // For CommonJS default export support\n\n\n  generateUUID.DNS = DNS;\n  generateUUID.URL = URL;\n  return generateUUID;\n}\n\n//# sourceURL=webpack://simple-crud/./node_modules/uuid/dist/esm-node/v35.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v4.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v4.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-node/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-node/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://simple-crud/./node_modules/uuid/dist/esm-node/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v5.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v5.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ \"./node_modules/uuid/dist/esm-node/v35.js\");\n/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ \"./node_modules/uuid/dist/esm-node/sha1.js\");\n\n\nconst v5 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v5);\n\n//# sourceURL=webpack://simple-crud/./node_modules/uuid/dist/esm-node/v5.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/validate.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/validate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-node/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://simple-crud/./node_modules/uuid/dist/esm-node/validate.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/version.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/version.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-node/validate.js\");\n\n\nfunction version(uuid) {\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Invalid UUID');\n  }\n\n  return parseInt(uuid.substr(14, 1), 16);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (version);\n\n//# sourceURL=webpack://simple-crud/./node_modules/uuid/dist/esm-node/version.js?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;