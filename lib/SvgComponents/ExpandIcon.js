"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var ExpandIcon = function ExpandIcon() {
  return _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, _react["default"].createElement("g", {
    fill: "#000",
    "fill-opacity": ".54",
    "fill-rule": "evenodd"
  }, _react["default"].createElement("path", {
    d: "M21 3H7.5C6.675 3 6 3.675 6 4.5V15c0 .825.675 1.5 1.5 1.5H21c.825 0 1.5-.675 1.5-1.5V4.5c0-.825-.675-1.5-1.5-1.5zm0 12H7.5V4.5H21V15zm-9 4.5H3V12h1.5v-1.5H3c-.825 0-1.5.675-1.5 1.5v7.5c0 .825.675 1.5 1.5 1.5h9c.825 0 1.5-.675 1.5-1.5V18H12v1.5z"
  })));
};

var _default = ExpandIcon;
exports["default"] = _default;