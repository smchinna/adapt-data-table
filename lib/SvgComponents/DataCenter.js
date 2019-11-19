"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var DataCenterSvg = function DataCenterSvg(_ref) {
  var fill = _ref.fill;
  return _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 37 30"
  }, _react["default"].createElement("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, _react["default"].createElement("path", {
    d: "M-6-9h48v48H-6z"
  }), _react["default"].createElement("g", {
    stroke: fill,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  }, _react["default"].createElement("path", {
    d: "M36 15H1M7.037 2.942L1 15v10.5A3.5 3.5 0 0 0 4.5 29h28a3.5 3.5 0 0 0 3.5-3.5V15L29.962 2.942A3.5 3.5 0 0 0 26.83 1H10.17a3.5 3.5 0 0 0-3.133 1.942zM15 22"
  }))));
};

var _default = DataCenterSvg;
exports["default"] = _default;