"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomFlex = exports.CustomLink = exports.CancelButton = exports.MakeFlexGrid = exports.GroupBox = exports.FlexBox = exports.CustomBox = exports.CustomPopOver = exports.CustomDialogContent = exports.TableValue = exports.CustomHeader = exports.CustomDialog = exports.InstanceTable = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactstrap = require("reactstrap");

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-left: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: #046bfc;\n  font-weight: 500 ;\n  padding-right: 5px;\n  cursor: pointer;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  float: right;\n  cursor: pointer;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";  \n  display: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  padding: ", ";\n  .fullGrid {\n    height: 100%;\n    > div {\n      height: 100%;\n    }\n  }\n  .customHeight {\n    height: 320px !important;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  height: 100%;\n  .header {\n    height: 36px;\n    width: 100%;\n    background-color: ", ";\n    border-radius: 4px;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-wrap: wrap;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 50%;\n  padding: 15px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: #000 !important;\n  .popover-inner {\n    .popover-header {\n      color: white;\n    }\n    .popover-body{\n      color: white;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-left: 20px;\n  cursor: ", ";\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  .full-border {\n    border: 1px dashed grey;\n    padding: 21px 10px;\n  }\n  .description {\n    > span {\n      border-top: 2px solid #f90;\n      border-bottom: 1px solid #fff;\n      background: #fff;\n      font-weight: bold;\n      padding: 8px 8px 2px;\n      border-left: 1px dashed grey;\n      border-right: 1px dashed grey;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0px !important;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  font-size: 24px;\n  font-weight: 500;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 31px 10px 31px;\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  >div{\n    >div{\n      background-color: rgba(255, 255, 255, 0.8) !important;\n      max-width: 1264px !important;\n      border-radius: 5px !important;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var CustomDialog = (0, _styledComponents["default"])(_Dialog["default"])(_templateObject());
exports.CustomDialog = CustomDialog;

var CustomHeader = _styledComponents["default"].div(_templateObject2());

exports.CustomHeader = CustomHeader;
var CustomDialogContent = (0, _styledComponents["default"])(_DialogContent["default"])(_templateObject3());
exports.CustomDialogContent = CustomDialogContent;

var InstanceTable = _styledComponents["default"].div(_templateObject4());

exports.InstanceTable = InstanceTable;

var TableValue = _styledComponents["default"].div(_templateObject5(), function (_ref) {
  var clickable = _ref.clickable;
  return clickable && 'pointer';
}, function (_ref2) {
  var clickable = _ref2.clickable;
  return clickable && 'blue';
});

exports.TableValue = TableValue;
var CustomPopOver = (0, _styledComponents["default"])(_reactstrap.Popover)(_templateObject6());
exports.CustomPopOver = CustomPopOver;

var CustomBox = _styledComponents["default"].div(_templateObject7());

exports.CustomBox = CustomBox;

var FlexBox = _styledComponents["default"].div(_templateObject8());

exports.FlexBox = FlexBox;

var GroupBox = _styledComponents["default"].div(_templateObject9(), function (_ref3) {
  var bgColor = _ref3.bgColor;
  return bgColor ? bgColor : '#fff';
});

exports.GroupBox = GroupBox;

var MakeFlexGrid = _styledComponents["default"].div(_templateObject10(), function (_ref4) {
  var width = _ref4.width;
  return width ? width : '100%';
}, function (_ref5) {
  var flex = _ref5.flex;
  return flex && 'flex';
}, function (_ref6) {
  var alignCenter = _ref6.alignCenter;
  return alignCenter && 'center';
}, function (_ref7) {
  var spaceBetween = _ref7.spaceBetween;
  return spaceBetween && 'space-between';
}, function (_ref8) {
  var padding = _ref8.padding;
  return padding && padding;
});

exports.MakeFlexGrid = MakeFlexGrid;
var CancelButton = (0, _styledComponents["default"])(_Close["default"])(_templateObject11());
exports.CancelButton = CancelButton;

var CustomLink = _styledComponents["default"].span(_templateObject12());

exports.CustomLink = CustomLink;

var CustomFlex = _styledComponents["default"].div(_templateObject13());

exports.CustomFlex = CustomFlex;