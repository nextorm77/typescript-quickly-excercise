"use strict";

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var message = "Transpiled with Babel";
console.log(_chalk["default"].black.bgGreenBright(message));