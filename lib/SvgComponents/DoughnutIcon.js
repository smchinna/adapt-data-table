"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _doughnut = _interopRequireDefault(require("assets/images/doughnut.svg"));

var DoughnutIcon = function DoughnutIcon(_ref) {
  var fill = _ref.fill;
  return _react["default"].createElement("img", {
    src: _doughnut["default"],
    alt: "blank-state"
  });
};

var _default = DoughnutIcon;
exports["default"] = _default;