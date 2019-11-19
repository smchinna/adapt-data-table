"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _horizontalBar = _interopRequireDefault(require("assets/images/horizontal-bar.svg"));

var HorizontalBarIcon = function HorizontalBarIcon(_ref) {
  var fill = _ref.fill;
  return _react["default"].createElement("img", {
    src: _horizontalBar["default"],
    alt: "blank-state"
  });
};

var _default = HorizontalBarIcon;
exports["default"] = _default;