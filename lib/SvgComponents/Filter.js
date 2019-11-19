"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Filter = function Filter(_ref) {
  var fill = _ref.fill;
  var useTag = "<use xlink:href=\"#filter\"/>";
  return _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "filter",
    d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
  })), _react["default"].createElement("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, _react["default"].createElement("mask", {
    id: "filterMask",
    fill: "#fff",
    dangerouslySetInnerHTML: {
      __html: useTag
    }
  }), _react["default"].createElement("g", {
    fill: fill,
    "fill-opacity": ".54",
    mask: "url(#filterMask)"
  }, _react["default"].createElement("path", {
    d: "M0 0h24v24H0z"
  }))));
};

var _default = Filter;
exports["default"] = _default;