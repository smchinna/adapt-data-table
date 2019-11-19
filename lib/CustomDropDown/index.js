"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _styles2 = require("./styles");

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _InputBase = _interopRequireDefault(require("@material-ui/core/InputBase"));

var CustomDropDown =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(CustomDropDown, _React$Component);

  function CustomDropDown() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, CustomDropDown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(CustomDropDown)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (e) {
      var changeRegion = _this.props.changeRegion;
      changeRegion(e.target.value);
    });
    return _this;
  }

  (0, _createClass2["default"])(CustomDropDown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          options = _this$props.options,
          selected = _this$props.selected,
          dropDownWidth = _this$props.dropDownWidth;
      return _react["default"].createElement(_styles2.FixedDropdown, {
        dropDownWidth: dropDownWidth
      }, _react["default"].createElement(_Select["default"], {
        value: selected,
        onChange: this.handleChange,
        MenuProps: {
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          }
        },
        style: {
          display: "flex",
          flexWrap: "wrap"
        },
        input: _react["default"].createElement(BootstrapInput, {
          name: "age",
          id: "age-customized-select"
        })
      }, options.map(function (obj, i) {
        return _react["default"].createElement(_MenuItem["default"], {
          value: obj.region_code || obj.value || obj.account_id,
          index: "selec-region-".concat(i, "-").concat(obj.region_code || obj.value || obj.account_id),
          key: "selec-region-".concat(i, "-").concat(obj.region_code || obj.value || obj.account_id)
        }, (obj.region_code && obj.region_name ? "".concat(obj.region_code, " (").concat(obj.region_name, ")") : obj.region_code) || obj.value || (obj.account_name && obj.account_id ? "".concat(obj.account_id, " (").concat(obj.account_name, ")") : obj.account_id)) // <option value={obj.region_code} index={`selec-region-${i}`}>{obj.region_code}</option>
        ;
      })));
    }
  }]);
  return CustomDropDown;
}(_react["default"].Component);

var BootstrapInput = (0, _styles.withStyles)(function (theme) {
  return {
    root: {
      'label + &': {// marginTop: theme.spacing(3),
      }
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      // backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
      }
    }
  };
})(_InputBase["default"]);
var _default = CustomDropDown;
exports["default"] = _default;