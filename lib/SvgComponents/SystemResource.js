"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var SystemResourceSvg = function SystemResourceSvg(_ref) {
  var fill = _ref.fill;
  return _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 30 30"
  }, _react["default"].createElement("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, _react["default"].createElement("path", {
    d: "M-9-9h48v48H-9z"
  }), _react["default"].createElement("g", {
    transform: "translate(1 1)"
  }, _react["default"].createElement("rect", {
    width: "28",
    height: "11",
    stroke: fill,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    rx: "2"
  }), _react["default"].createElement("rect", {
    width: "28",
    height: "11",
    y: "17",
    stroke: fill,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    rx: "2"
  }), _react["default"].createElement("path", {
    stroke: fill,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M5.5 22.5"
  }), _react["default"].createElement("path", {
    fill: fill,
    d: "M3 3h2v2H3zM3 20h2v2H3z"
  }))));
};

var _default = SystemResourceSvg;
exports["default"] = _default;