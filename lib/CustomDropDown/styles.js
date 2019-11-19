"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegionSelect = exports.FixedDropdown = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\npadding-left: 10px;\nborder-radius: 8px;\nborder: 1px solid #979797;\nheight: 33px;\n// width: 160px;\noutline: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    width: ", ";\n    // margin-top: 15px !important;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var FixedDropdown = (0, _styledComponents["default"])(_FormControl["default"])(_templateObject(), function (_ref) {
  var dropDownWidth = _ref.dropDownWidth;
  return dropDownWidth ? "".concat(dropDownWidth, " !important") : '230px !important';
});
exports.FixedDropdown = FixedDropdown;

var RegionSelect = _styledComponents["default"].select(_templateObject2());

exports.RegionSelect = RegionSelect;