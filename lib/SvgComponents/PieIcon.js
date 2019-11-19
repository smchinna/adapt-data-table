"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _pie = _interopRequireDefault(require("assets/images/pie.svg"));

var PieIcon = function PieIcon(_ref) {
  var fill = _ref.fill;
  return _react["default"].createElement("img", {
    src: _pie["default"],
    alt: "blank-state"
  });
};

var _default = PieIcon;
exports["default"] = _default;