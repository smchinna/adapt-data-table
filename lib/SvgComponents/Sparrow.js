"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var SparrowSvg = function SparrowSvg(_ref) {
  var fill = _ref.fill;
  return _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "88",
    height: "88",
    viewBox: "0 0 88 88"
  }, _react["default"].createElement("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, _react["default"].createElement("circle", {
    cx: "44",
    cy: "44",
    r: "44",
    fill: "#EEE"
  }), _react["default"].createElement("g", {
    transform: "translate(11 15)"
  }, _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M33 1h2v6h-2z"
  }), _react["default"].createElement("ellipse", {
    cx: "33.5",
    cy: "31.5",
    fill: "#FFF",
    rx: "31.5",
    ry: "25.5"
  }), _react["default"].createElement("rect", {
    width: "48",
    height: "17",
    x: "10",
    y: "21",
    fill: "#000",
    rx: "8.5"
  }), _react["default"].createElement("circle", {
    cx: "22",
    cy: "29",
    r: "3",
    fill: "#046BFC"
  }), _react["default"].createElement("circle", {
    cx: "46",
    cy: "29",
    r: "3",
    fill: "#046BFC"
  }), _react["default"].createElement("path", {
    stroke: "#000",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M27 44c3.111 2.667 5.444 4 7 4s3.889-1.333 7-4"
  }), _react["default"].createElement("rect", {
    width: "4",
    height: "8",
    x: "63",
    y: "26",
    fill: "#D8D8D8",
    rx: "2"
  }), _react["default"].createElement("rect", {
    width: "2",
    height: "4",
    x: "33",
    y: "-1",
    fill: "#D8D8D8",
    rx: "1",
    transform: "rotate(90 34 1)"
  }), _react["default"].createElement("rect", {
    width: "4",
    height: "8",
    y: "26",
    fill: "#D8D8D8",
    rx: "2"
  }))));
};

var _default = SparrowSvg;
exports["default"] = _default;