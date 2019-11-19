"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManageColumnWrapper = exports.JumbToPageWrapper = exports.PageNoWrapperr = exports.BottomTableFlex = exports.IconWrapper = exports.CustomTablePanel = exports.CustomRow = exports.TableWrapper = exports.NewTable = exports.CellDiv = exports.CustomHeader = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-wrap: wrap;\n  max-height: 400px;\n  margin: 10px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  .name {\n    margin-right: 10px;\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  margin: 0px 60px;\n  .pageText {\n    margin-right: 18px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-top: 12px;\n  > div {\n    display: block;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  margin-left: 24px;\n  cursor: pointer;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\nwidth: 100%;\nheight: 50px;\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: space-between;\n.iconManager {\n  display: block;\n  .flex {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    .tableName {\n      font-size: 20px;\n      font-weight: 500;\n      color: black;\n      padding-left: 1px;\n    }\n  }\n}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  background-color: ", ";\n  :hover {\n    background-color: #eaf3fe;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  max-width: 100%;\n  overflow-x: auto;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: ", ";\n  min-width: 100%;\n  >thead {\n    >tr {\n      white-space: nowrap;\n      height: ", ";\n      border-top: ", ";\n      >td {\n        padding: ", ";\n        text-align: ", ";\n        font-weight: bold;\n        text-transform: capitalize;\n        border-left: ", ";\n      }\n    }\n  }\n  >tbody {\n    >tr {\n      white-space: nowrap;\n      height: ", "\n      border-top: ", ";\n      >td {\n        padding: ", ";\n        text-align: ", ";\n        border-left: ", ";\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  cursor: ", ";\n  white-space: nowrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  padding: ", ";\n  text-align: ", ";\n  .headerTitle {\n    font-weight: bold;\n    font-size: 20px;\n  }\n  .selectAll {\n    font-weight: bold;\n    float: right;\n    margin-right: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    >span {\n      padding: 0 !important;\n      margin-right: 5px !important;\n    }\n  }\n  > div {\n    border-radius: 8px;\n  }\n  .table-custom-header {\n    > div {\n      max-height: 100% !important;\n      >table {\n        min-width: 100%;\n        >tbody {\n          >tr {\n            height: 40px;\n            >td {\n\n              >div{\n                font-size: 16px;\n              }\n            }\n          }\n        }\n        >thead {\n          >tr{\n            height: 40px;\n            >th {\n              background-color: #66a3ff !important;\n              font-size: 16px;\n              font-weight: 700;\n              color: white;\n              height: 30px;\n              white-space: nowrap;\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var CustomHeader = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var padding = _ref.padding;
  return padding && padding;
}, function (_ref2) {
  var textAlign = _ref2.textAlign;
  return textAlign && 'center';
});

exports.CustomHeader = CustomHeader;

var CellDiv = _styledComponents["default"].div(_templateObject2(), function (_ref3) {
  var isLink = _ref3.isLink;
  return isLink && '#66a3ff';
}, function (_ref4) {
  var isLink = _ref4.isLink;
  return isLink && 'pointer';
});

exports.CellDiv = CellDiv;

var NewTable = _styledComponents["default"].table(_templateObject3(), function (_ref5) {
  var cellBorder = _ref5.cellBorder;
  return cellBorder && '-1px';
}, function (_ref6) {
  var headHeight = _ref6.headHeight;
  return headHeight ? headHeight : '30px';
}, function (_ref7) {
  var headBorder = _ref7.headBorder,
      headBorderColor = _ref7.headBorderColor;
  return headBorder ? headBorderColor ? headBorderColor : '1px solid lightgray' : 'none';
}, function (_ref8) {
  var headCellPadding = _ref8.headCellPadding;
  return headCellPadding ? headCellPadding : '0 20px 0px';
}, function (_ref9) {
  var headAlign = _ref9.headAlign;
  return headAlign && 'center';
}, function (_ref10) {
  var cellBorder = _ref10.cellBorder;
  return cellBorder && '1px solid #dddddf';
}, function (_ref11) {
  var rowHeight = _ref11.rowHeight;
  return rowHeight ? rowHeight : '30px';
}, function (_ref12) {
  var rowBorder = _ref12.rowBorder,
      rowBorderColor = _ref12.rowBorderColor;
  return rowBorder ? rowBorderColor ? rowBorderColor : '1px solid lightgray' : 'none';
}, function (_ref13) {
  var bodyCellPadding = _ref13.bodyCellPadding;
  return bodyCellPadding ? bodyCellPadding : '0px 20px 0px';
}, function (_ref14) {
  var bodyAlign = _ref14.bodyAlign;
  return bodyAlign && 'center';
}, function (_ref15) {
  var cellBorder = _ref15.cellBorder;
  return cellBorder && '1px solid #dddddf';
});

exports.NewTable = NewTable;

var TableWrapper = _styledComponents["default"].div(_templateObject4());

exports.TableWrapper = TableWrapper;

var CustomRow = _styledComponents["default"].tr(_templateObject5(), function (_ref16) {
  var bgColor = _ref16.bgColor;
  return bgColor ? bgColor : 'white';
}, function (_ref17) {
  var active = _ref17.active;
  return active && '#eaf3fe';
});

exports.CustomRow = CustomRow;

var CustomTablePanel = _styledComponents["default"].div(_templateObject6());

exports.CustomTablePanel = CustomTablePanel;

var IconWrapper = _styledComponents["default"].div(_templateObject7());

exports.IconWrapper = IconWrapper;

var BottomTableFlex = _styledComponents["default"].div(_templateObject8());

exports.BottomTableFlex = BottomTableFlex;

var PageNoWrapperr = _styledComponents["default"].div(_templateObject9());

exports.PageNoWrapperr = PageNoWrapperr;

var JumbToPageWrapper = _styledComponents["default"].div(_templateObject10());

exports.JumbToPageWrapper = JumbToPageWrapper;

var ManageColumnWrapper = _styledComponents["default"].div(_templateObject11());

exports.ManageColumnWrapper = ManageColumnWrapper;