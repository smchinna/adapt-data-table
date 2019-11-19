"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Print = function Print(_ref) {
  var fill = _ref.fill;
  var useTag = "<use xlink:href=\"#print\"/>";
  return _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "print",
    d: "M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2zm0-4.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
  })), _react["default"].createElement("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, _react["default"].createElement("mask", {
    id: "printIcon",
    fill: "#fff",
    dangerouslySetInnerHTML: {
      __html: useTag
    }
  }), _react["default"].createElement("g", {
    fill: fill,
    "fill-opacity": ".54",
    mask: "url(#printIcon)"
  }, _react["default"].createElement("path", {
    d: "M0 0h24v24H0z"
  }))));
};

var _default = Print;
exports["default"] = _default;