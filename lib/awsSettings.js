"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedMultiOption = exports.MultiSelectGrid = exports.FilterGrid = exports.CustomSaveIcon = exports.ButtonGroup = exports.CustomHeaderUI = exports.CustomInputField = exports.DialogWrapper = exports.CancelButton = exports.ActivePage = exports.SettingButton = exports.UploadButton = exports.DragDropGrid = exports.AbsoluteSave = exports.ManageColumnFlex = exports.CustomCheckBox = exports.CustomButton = exports.CustomRadioGroup = exports.CustomTextField = exports.OptionPanel = exports.ShadowBox = exports.OptionIcon = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

function _templateObject22() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 6px 0px 0px 6px;\n  background-color: #f9f9f9;\n  border: 1px solid #f0f0f0;  \n  padding: 0px 5px;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  border: 1px solid #f0f0f0; \n  padding: 0px 6px 6px 0px;\n  flex-wrap: wrap;\n  max-width: 700px;\n  min-width: 400px;\n  >input {\n    margin: 6px 0px 0px 6px;\n    padding: 0px 10px;\n    border: none;\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  top: 11px;\n  left: 20px;\n  z-index: 100;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 20px;\n  margin-top: -8px;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: ", ";\n  margin-bottom: 15px;\n  margin-top: ", ";\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: 50px;\n  background-color: #ffffff;\n  text-transform: capitalize;\n  display: flex;\n  align-items: center;\n  cursor: ", ";\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  min-width: 109px !important;\n  margin: 0px !important;\n  height: 36px;\n  padding: 0px !important;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  max-height: 65%;\n  top: 165px !important;\n  & > div:nth-child(2) > div {\n    width : 25%;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 2px;\n  margin-right: 3px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background-color: ", ";\n  font-size: 16px;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 10px 0px;\n  position: relative;\n  width: 100%;\n  box-shadow: ", ";\n  color: ", ";\n  background-color: ", ";\n  border: ", ";\n  border-radius: 3px;\n  height: 38px;\n  font-weight: normal;\n  padding: 0px 10px;\n  text-align: ", ";\n  font-size: ", ";\n  cursor: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  .fileName {\n    display: inline-block;\n    max-width: 220px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  > i {\n    color: ", ";\n    font-weight: bold;\n    margin-right: 10px\n  }\n  >input {\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n  .upload-success {\n    float: right;\n    >i {\n      padding-left: 10px;\n      border-left: 1px solid white;\n      margin-left: 10px;\n      cursor: pointer;\n    }\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  max-height: 500px;\n  margin: 20px 0px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  .block {\n    display: block;\n    width: 400px;\n    .buttonGroup {\n      display: flex;\n      justify-content: space-between;\n      .idMissing {\n        padding: 10px 10px 0px;\n        width: 100%;\n        text-align: center;\n        color: red;\n      }\n    }\n  }\n  .dropZone {\n    width: 400px;\n    height: 250px;\n    border: 1px dashed grey;\n    background-color: #eaedf3;\n    display: block;\n    .flex {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      > label {\n        max-width: 350px;\n      }\n      .note {\n        text-align: center;\n        padding: 10px 52px;\n        font-size: 12px;    \n      }\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  // position: absolute;\n  // bottom: 6px;\n  // left: 20px;\n  margin-top: 8px;\n  margin-right: 20px;\n  padding: 8px 20px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: block;\n  width: ", ";\n  position: relative;\n  cursor: ", ";\n  opacity: ", ";\n  overflow: hidden;\n  .flex {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    .title {\n      font-weight: bold;\n      font-weight: bold;\n      overflow: hidden;\n      text-transform: capitalize;\n    }\n  }\n  \n  .iconManager {\n    position: absolute;\n    right: 10px;\n    >i {\n      font-size: 16px;\n      margin-right: 3px;\n    }\n  }\n  .duplicate {\n    width: 100%;\n    text-align: center;\n    margin: 10px 0px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])([" \n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 10px 15px 15px;\n  color: white;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 20px;\n  height: 38px;\n  font-weight: bold;\n  padding: 0px 25px;\n  cursor: ", ";\n  opacity: ", ";\n  color: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: 36px;\n  border-radius: 5px;\n  border: ", ";\n  outline: none;\n  background-color: ", ";\n  font-size: 16px;\n  font-weight: ", ";\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: ", ";\n  cursor: ", ";\n  opacity: ", ";\n  padding: 2px 15px;\n  margin-left: ", ";\n  :disabled {\n    background-color: #e1e1e1;\n    color: #868686;\n  }\n  :hover {\n    background-color: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0 15px !important;\n  .title {\n    font-weight: bold;\n    font-size: 17px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  min-width: 150px;\n  padding: 10px 15px !important;\n  >div {\n    >input {\n      background-color: white;\n      font-size: 16px;\n    }\n    >input::placeholder {\n      color: grey;\n      font-size: 16px;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  white-space: nowrap;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: ", ";\n  font-weight: 500;\n  font-size: 14px;\n  color: ", ";\n  padding: 0px 13px;\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);\n  position: ", ";\n  right: 148px;\n  background-color: white;\n  z-index: 200;\n  border-radius: 12px;\n  top: 44px;\n  width: ", ";\n  .block {\n    display: block;\n    .buttonGroup {\n      display: flex;\n      justify-content: space-between;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 110px;\n  top: 10px;\n  z-index: 100;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  > i {\n    font-size: 27px;\n    cursor: pointer;\n  }\n  &: hover{\n    background-color: rgba(0,0,0,0.08);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var OptionIcon = _styledComponents["default"].div(_templateObject());

exports.OptionIcon = OptionIcon;

var ShadowBox = _styledComponents["default"].div(_templateObject2(), function (_ref) {
  var noAbsoulte = _ref.noAbsoulte;
  return !noAbsoulte && 'absolute';
}, function (_ref2) {
  var width = _ref2.width;
  return width && width;
});

exports.ShadowBox = ShadowBox;

var OptionPanel = _styledComponents["default"].div(_templateObject3(), function (_ref3) {
  var bottomBorder = _ref3.bottomBorder;
  return bottomBorder && '3px solid #f1f1f1';
}, function (_ref4) {
  var textColor = _ref4.textColor;
  return textColor ? textColor : '#1890ff';
});

exports.OptionPanel = OptionPanel;
var CustomTextField = (0, _styledComponents["default"])(_TextField["default"])(_templateObject4());
exports.CustomTextField = CustomTextField;
var CustomRadioGroup = (0, _styledComponents["default"])(_RadioGroup["default"])(_templateObject5());
exports.CustomRadioGroup = CustomRadioGroup;

var SettingButton = _styledComponents["default"].button(_templateObject6(), function (_ref5) {
  var border = _ref5.border;
  return border ? border : 'none';
}, function (_ref6) {
  var bgColor = _ref6.bgColor;
  return bgColor ? bgColor : '#046bfc';
}, function (_ref7) {
  var fontWeight = _ref7.fontWeight;
  return fontWeight ? 'bold' : 'normal';
}, function (_ref8) {
  var textColor = _ref8.textColor;
  return textColor ? textColor : '#ffffff';
}, function (_ref9) {
  var disabled = _ref9.disabled;
  return disabled && 'not-allowed';
}, function (_ref10) {
  var disabled = _ref10.disabled;
  return disabled && '0.5';
}, function (_ref11) {
  var marginLeft = _ref11.marginLeft;
  return marginLeft && marginLeft;
}, function (_ref12) {
  var noHover = _ref12.noHover;
  return !noHover && '#0360e4';
});

exports.SettingButton = SettingButton;

var CustomButton = _styledComponents["default"].button(_templateObject7(), function (_ref13) {
  var bgColor = _ref13.bgColor;
  return bgColor ? bgColor : 'blue';
}, function (_ref14) {
  var bgColor = _ref14.bgColor;
  return bgColor ? "1px solid ".concat(bgColor) : "1px solid blue";
}, function (_ref15) {
  var disabled = _ref15.disabled;
  return disabled && 'not-allowed';
}, function (_ref16) {
  var disabled = _ref16.disabled;
  return disabled && '0.5';
}, function (_ref17) {
  var textColor = _ref17.textColor;
  return textColor && textColor;
});

exports.CustomButton = CustomButton;
var CustomCheckBox = (0, _styledComponents["default"])(_Checkbox["default"])(_templateObject8());
exports.CustomCheckBox = CustomCheckBox;

var ManageColumnFlex = _styledComponents["default"].div(_templateObject9(), function (_ref18) {
  var width = _ref18.width;
  return width ? width : '33%';
}, function (_ref19) {
  var disabled = _ref19.disabled;
  return disabled && 'not-allowed';
}, function (_ref20) {
  var disabled = _ref20.disabled;
  return disabled && '0.5';
});

exports.ManageColumnFlex = ManageColumnFlex;

var AbsoluteSave = _styledComponents["default"].div(_templateObject10());

exports.AbsoluteSave = AbsoluteSave;

var DragDropGrid = _styledComponents["default"].div(_templateObject11());

exports.DragDropGrid = DragDropGrid;

var UploadButton = _styledComponents["default"].button(_templateObject12(), function (_ref21) {
  var successButton = _ref21.successButton;
  return successButton && '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)';
}, function (_ref22) {
  var successButton = _ref22.successButton;
  return successButton ? 'black' : 'white';
}, function (_ref23) {
  var successButton = _ref23.successButton;
  return successButton ? 'white' : 'blue';
}, function (_ref24) {
  var successButton = _ref24.successButton;
  return successButton ? '1px solid white' : '1px solid blue';
}, function (_ref25) {
  var leftAlign = _ref25.leftAlign;
  return leftAlign ? 'left' : 'center';
}, function (_ref26) {
  var fontSize = _ref26.fontSize;
  return fontSize ? fontSize : '19px';
}, function (_ref27) {
  var noCursor = _ref27.noCursor;
  return noCursor ? 'auto' : 'pointer';
}, function (_ref28) {
  var successButton = _ref28.successButton;
  return successButton ? 'black' : 'white';
});

exports.UploadButton = UploadButton;

var ActivePage = _styledComponents["default"].div(_templateObject13(), function (_ref29) {
  var active = _ref29.active;
  return active && '#3897f0';
}, function (_ref30) {
  var active = _ref30.active;
  return active && '#ffffff';
});

exports.ActivePage = ActivePage;

var CancelButton = _styledComponents["default"].div(_templateObject14());

exports.CancelButton = CancelButton;
var DialogWrapper = (0, _styledComponents["default"])(_Dialog["default"])(_templateObject15());
exports.DialogWrapper = DialogWrapper;
var CustomInputField = (0, _styledComponents["default"])(_TextField["default"])(_templateObject16());
exports.CustomInputField = CustomInputField;

var CustomHeaderUI = _styledComponents["default"].div(_templateObject17(), function (_ref31) {
  var clickable = _ref31.clickable;
  return clickable && 'pointer';
});

exports.CustomHeaderUI = CustomHeaderUI;

var ButtonGroup = _styledComponents["default"].div(_templateObject18(), function (_ref32) {
  var justifyContent = _ref32.justifyContent;
  return justifyContent ? justifyContent : 'center';
}, function (_ref33) {
  var marginTop = _ref33.marginTop;
  return marginTop && marginTop;
});

exports.ButtonGroup = ButtonGroup;

var CustomSaveIcon = _styledComponents["default"].div(_templateObject19());

exports.CustomSaveIcon = CustomSaveIcon;

var FilterGrid = _styledComponents["default"].div(_templateObject20());

exports.FilterGrid = FilterGrid;

var MultiSelectGrid = _styledComponents["default"].div(_templateObject21());

exports.MultiSelectGrid = MultiSelectGrid;

var SelectedMultiOption = _styledComponents["default"].span(_templateObject22());

exports.SelectedMultiOption = SelectedMultiOption;