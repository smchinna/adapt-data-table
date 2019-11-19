"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var LeftArrow = function LeftArrow(_ref) {
  var fill = _ref.fill;
  return _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, _react["default"].createElement("g", {
    fill: fill || "#000",
    "fill-rule": "evenodd"
  }, _react["default"].createElement("path", {
    id: "a",
    d: "M5 8l5-5 .707.707L6.414 8l4.293 4.293L10 13z"
  })));
};

var _default = LeftArrow;
exports["default"] = _default;