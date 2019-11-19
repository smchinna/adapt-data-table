"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _reactCsv = require("react-csv");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var HideElement = _styledComponents["default"].div(_templateObject());

var CSVMaker =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(CSVMaker, _React$Component);

  function CSVMaker() {
    (0, _classCallCheck2["default"])(this, CSVMaker);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CSVMaker).apply(this, arguments));
  }

  (0, _createClass2["default"])(CSVMaker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      setTimeout(function () {
        return _this.inputElement.link.click();
      }, 500);
      setTimeout(function () {
        return _this.props.removeCSVData();
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          csvName = _this$props.csvName;
      return _react["default"].createElement(HideElement, null, _react["default"].createElement(_reactCsv.CSVLink, {
        data: data,
        filename: csvName ? "".concat(csvName, ".csv") : "table.csv",
        target: "_blank",
        ref: function ref(input) {
          return _this2.inputElement = input;
        }
      }));
    }
  }]);
  return CSVMaker;
}(_react["default"].Component);

CSVMaker.propTypes = {
  data: _propTypes["default"].array,
  removeCSVData: _propTypes["default"].func
};
var _default = CSVMaker;
exports["default"] = _default;