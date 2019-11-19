"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var CyperSecuritySvg = function CyperSecuritySvg(_ref) {
  var fill = _ref.fill;
  return _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 32 29"
  }, _react["default"].createElement("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, _react["default"].createElement("path", {
    d: "M-8-9h48v48H-8z"
  }), _react["default"].createElement("g", {
    stroke: fill,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    transform: "translate(1 1)"
  }, _react["default"].createElement("rect", {
    width: "10",
    height: "7",
    x: "10",
    y: "9",
    rx: "2"
  }), _react["default"].createElement("path", {
    d: "M12 9V6.778C12 5.244 13.343 4 15 4s3 1.244 3 2.778V9"
  }), _react["default"].createElement("rect", {
    width: "29.474",
    height: "20.632",
    rx: "2"
  }), _react["default"].createElement("path", {
    d: "M8.842 26.526h11.79M14.737 20.632v5.894"
  }))));
};

var _default = CyperSecuritySvg;
exports["default"] = _default;