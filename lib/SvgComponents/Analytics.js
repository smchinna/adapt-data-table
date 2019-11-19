"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var AnalyticsSvg = function AnalyticsSvg(_ref) {
  var fill = _ref.fill;
  return _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 30 17"
  }, _react["default"].createElement("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, _react["default"].createElement("path", {
    d: "M-9-16h48v48H-9z"
  }), _react["default"].createElement("g", {
    stroke: fill,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  }, _react["default"].createElement("path", {
    d: "M29 1L16.91 12.875l-6.365-6.25L1 16"
  }), _react["default"].createElement("path", {
    d: "M21 1h8v8"
  }))));
};

var _default = AnalyticsSvg;
exports["default"] = _default;