"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _bar = _interopRequireDefault(require("assets/images/bar.svg"));

var BarIcon = function BarIcon(_ref) {
  var fill = _ref.fill;
  return _react["default"].createElement("img", {
    src: _bar["default"],
    alt: "blank-state"
  });
};

var _default = BarIcon;
exports["default"] = _default;