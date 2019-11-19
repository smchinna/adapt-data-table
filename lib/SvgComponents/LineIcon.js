"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _line = _interopRequireDefault(require("assets/images/line.svg"));

var LineIcon = function LineIcon(_ref) {
  var fill = _ref.fill;
  return _react["default"].createElement("img", {
    src: _line["default"],
    alt: "blank-state"
  });
};

var _default = LineIcon;
exports["default"] = _default;