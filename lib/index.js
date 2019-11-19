"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _green = _interopRequireDefault(require("@material-ui/core/colors/green"));

var _styles = require("@material-ui/core/styles");

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _styles2 = require("./styles");

var _ec2Styles = require("./ec2Styles");

var _index = require("./SvgComponents/index");

var _CSVMaker = _interopRequireDefault(require("./CSVMaker"));

var _awsSettings = require("./awsSettings");

var _CustomDropDown = _interopRequireDefault(require("./CustomDropDown"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

// import MUIDataTable from "mui-datatables";
var styles = {
  root: {
    color: _green["default"][600],
    '&$checked': {
      color: _green["default"][500]
    }
  },
  checked: {}
};

var DataTable =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(DataTable, _React$Component);

  function DataTable(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, DataTable);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(DataTable).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "changeTheLengthOfTheTable", function (perPage) {
      var body = _this.props.body;

      if (body && body.length > 0) {
        _this.setState({
          total: Math.ceil(body.length / perPage),
          countingValues: body.length
        }, function () {
          if (_this.state.total < 5) {
            _this.setState({
              minLimit: 1,
              maxLimit: _this.state.total,
              pageNo: 1
            });
          } else {
            _this.setState({
              minLimit: 1,
              maxLimit: 5,
              pageNo: 1
            });
          }
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getCustomCellUI", function (cellIndex, cellValue, rowValue, rowIndex, tableData) {
      var header = _this.props.header;

      if (header[cellIndex] && header[cellIndex].options && header[cellIndex].options.customBodyRender) {
        var obj = {
          columnData: header[cellIndex],
          columnIndex: cellIndex,
          rowData: rowValue,
          rowIndex: rowIndex,
          tableData: tableData
        };
        return header[cellIndex].options.customBodyRender(cellValue, obj);
      } else {
        return cellValue;
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getRowColor", function (index) {
      var extraOptions = _this.props.extraOptions;
      var rowColor = extraOptions && extraOptions.rowColor ? (0, _toConsumableArray2["default"])(extraOptions.rowColor) : []; //(Color for the Body rows, It always should be a array format)

      var color = 'white';
      var getIndex = index % rowColor.length;

      if (getIndex < rowColor.length) {
        color = rowColor[getIndex];
      }

      return color;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (key) {
      if (_this.state.key === key) {
        _this.setState({
          active: false,
          key: ''
        });
      } else _this.setState({
        active: true,
        key: key
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getRows", function (bodyIndex, rows, body) {
      var _this$props = _this.props,
          extraOptions = _this$props.extraOptions,
          header = _this$props.header;
      var _this$state = _this.state,
          pageNo = _this$state.pageNo,
          perPage = _this$state.perPage,
          active = _this$state.active,
          key = _this$state.key,
          originalArr = _this$state.originalArr;

      if (extraOptions.showPagination) {
        var start = (pageNo - 1) * perPage;
        var end = pageNo * perPage;

        if (start <= bodyIndex && bodyIndex < end) {
          return _react["default"].createElement(_styles2.CustomRow, {
            active: active && key === "table-body-".concat(bodyIndex),
            key: "table-body-".concat(bodyIndex),
            bgColor: _this.getRowColor(bodyIndex),
            onClick: function onClick() {
              return _this.handleClick("table-body-".concat(bodyIndex));
            }
          }, rows.map(function (cell, cellIndex) {
            return !originalArr.includes(header[cellIndex].name) && _react["default"].createElement("td", {
              key: "table-cell-".concat(bodyIndex, "-").concat(cellIndex)
            }, _this.getCustomCellUI(cellIndex, cell, rows, bodyIndex, body));
          }));
        }
      } else {
        return _react["default"].createElement(_styles2.CustomRow, {
          active: active && key === "table-body-".concat(bodyIndex),
          key: "table-body-".concat(bodyIndex),
          bgColor: _this.getRowColor(bodyIndex),
          onClick: function onClick() {
            return _this.handleClick("table-body-".concat(bodyIndex));
          }
        }, rows.map(function (cell, cellIndex) {
          return !originalArr.includes(header[cellIndex].name) && _react["default"].createElement("td", {
            key: "table-cell-".concat(bodyIndex, "-").concat(cellIndex)
          }, _this.getCustomCellUI(cellIndex, cell, rows, bodyIndex, body));
        }));
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getBodyUI", function (body) {
      return _react["default"].createElement("tbody", null, body.map(function (rows, bodyIndex) {
        return _this.getRows(bodyIndex, rows, body);
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getCustomHeadUI", function (row) {
      if (row.options && row.options.customHeaderRender) {
        return row.options.customHeaderRender(row.label, row);
      } else {
        return row.label;
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getHeadUI", function (header) {
      var originalArr = _this.state.originalArr;
      return _react["default"].createElement("thead", null, _react["default"].createElement("tr", null, header.map(function (row, index) {
        return !originalArr.includes(row.name) && _react["default"].createElement("td", {
          key: "table-header-key-".concat(index)
        }, _this.getCustomHeadUI(row));
      })));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "printMethod", function (cb) {
      if (cb) {
        cb();
      }

      var printContents = document.getElementById('custom--react-data-table').innerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents; // // console.log("PRINT")
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "csvMethod", function (cb) {
      if (cb) {
        cb();
      }

      _this.setState({
        showCsv: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "manageColumnMethod", function (cb) {
      if (cb) {
        cb();
      }

      var _this$state2 = _this.state,
          header = _this$state2.header,
          originalArr = _this$state2.originalArr;

      _this.setState({
        openManageColumn: true,
        manageColumnArr: originalArr
      }, function () {
        if (_this.state.manageColumnArr.length <= 0) {
          _this.setState({
            selectAll: true
          });
        }
      }); // console.log("manageColumnMethod", header)

    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getIconUI", function (obj) {
      var icon = '';

      switch (obj.name) {
        case 'PRINT':
          if (obj.component) {
            icon = _react["default"].createElement(_styles2.IconWrapper, {
              onClick: function onClick() {
                return _this.printMethod(obj.callMethod && obj.callMethod);
              }
            }, obj.component());
          } else {
            icon = _react["default"].createElement(_Tooltip["default"], {
              title: "Print",
              enterDelay: 500,
              disableFocusListener: true,
              disableTouchListener: true
            }, _react["default"].createElement(_styles2.IconWrapper, {
              onClick: function onClick() {
                return _this.printMethod(obj.callMethod && obj.callMethod);
              }
            }, _react["default"].createElement(_index.Print, {
              fill: obj.color || '#000'
            })));
          }

          break;

        case 'CSV':
          if (obj.component) {
            icon = _react["default"].createElement(_styles2.IconWrapper, {
              onClick: function onClick() {
                return _this.csvMethod(obj.callMethod && obj.callMethod);
              }
            }, obj.component());
          } else {
            icon = _react["default"].createElement(_Tooltip["default"], {
              title: "Download CSV",
              enterDelay: 500,
              disableFocusListener: true,
              disableTouchListener: true
            }, _react["default"].createElement(_styles2.IconWrapper, {
              onClick: function onClick() {
                return _this.csvMethod(obj.callMethod && obj.callMethod);
              }
            }, _react["default"].createElement(_index.Download, {
              fill: obj.color || '#000'
            })));
          }

          break;

        case 'MANAGECOLUMN':
          if (obj.component) {
            icon = _react["default"].createElement(_styles2.IconWrapper, {
              onClick: function onClick() {
                return _this.manageColumnMethod(obj.callMethod && obj.callMethod);
              }
            }, obj.component());
          } else {
            icon = _react["default"].createElement(_Tooltip["default"], {
              title: "Manage Column",
              enterDelay: 500,
              disableFocusListener: true,
              disableTouchListener: true
            }, _react["default"].createElement(_styles2.IconWrapper, {
              onClick: function onClick() {
                return _this.manageColumnMethod(obj.callMethod && obj.callMethod);
              }
            }, _react["default"].createElement(_index.ManageColumn, {
              fill: obj.color || 'rgba(0, 0, 0, 0.54)'
            })));
          }

          break;

        default:
          if (obj.component) {
            icon = _react["default"].createElement(_Tooltip["default"], {
              title: obj.tooltip ? obj.tooltip : "",
              enterDelay: 500,
              disableFocusListener: true,
              disableTouchListener: true
            }, _react["default"].createElement(_styles2.IconWrapper, {
              onClick: function onClick() {
                return obj.callMethod && obj.callMethod.apply(obj, (0, _toConsumableArray2["default"])(obj.parameter));
              }
            }, obj.component()));
          } else {
            icon = '';
          }

          break;
      }

      return icon;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "clicked", function () {
      alert('clikced');
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getIconManager", function () {
      var extraOptions = _this.props.extraOptions;
      var iconOptions = extraOptions.iconManager ? extraOptions.iconManager : [];
      var arr = [];

      for (var i = 0; i < iconOptions.length; i++) {
        var obj = iconOptions[i];

        if (obj.type === 'icon') {
          arr.push(_this.getIconUI(obj));
        } else {
          arr.push(obj.component());
        }
      }

      return arr;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "removeCSVData", function () {
      _this.setState({
        showCsv: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setPagination", function (activeIndex) {
      if (activeIndex !== _this.state.pageNo) {
        if (_this.state.total <= 5) {
          _this.setState({
            minLimit: 1,
            maxLimit: _this.state.total,
            pageNo: activeIndex
          });
        } else {
          if (activeIndex === 1) {
            _this.setState({
              pageNo: activeIndex,
              maxLimit: 5,
              minLimit: 1
            });
          } else {
            if (activeIndex + 3 > _this.state.total) {
              _this.setState({
                pageNo: activeIndex,
                maxLimit: _this.state.total,
                minLimit: _this.state.total - 4
              });
            } else {
              _this.setState({
                pageNo: activeIndex,
                maxLimit: activeIndex + 3,
                minLimit: activeIndex - 1
              });
            }
          }
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getPaginationSquare", function () {
      var circleButton = [];

      var _loop = function _loop(i) {
        circleButton.push(_react["default"].createElement(_awsSettings.ActivePage, {
          key: i,
          active: i === _this.state.pageNo,
          onClick: function onClick() {
            return _this.changePerAction(i);
          }
        }, _react["default"].createElement("div", null, i)));
      };

      for (var i = _this.state.minLimit; i <= _this.state.maxLimit; i++) {
        _loop(i);
      }

      return circleButton;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "changePerAction", function (index) {
      _this.setState({
        jumbToPage: index
      }, function () {
        return _this.setPagination(index);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "makeCsvHeaderData", function (header) {
      var arr = [];

      for (var i = 0; i < header.length; i++) {
        arr.push(header[i].label);
      }

      return arr;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "changeJumbToPage", function (value) {
      _this.setState({
        jumbToPage: value
      }, function () {
        return _this.setPagination(value);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "changePerPage", function (value) {
      _this.setState({
        perPage: value
      }, function () {
        return _this.changeTheLengthOfTheTable(value);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getJumpToPageArr", function () {
      var arr = [];

      for (var i = 1; i <= _this.state.total; i++) {
        arr.push({
          value: i
        });
      }

      return arr;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getItemsPerPageDropdownArr", function () {
      var extraOptions = _this.props.extraOptions;
      var arr = [// {
      //   value: 1,
      // },
      // {
      //   value: 2
      // },
      // {
      //   value: 3
      // },
      // {
      //   value: 4
      // },
      {
        value: 5
      }, {
        value: 10
      }, {
        value: 15
      }, {
        value: 20
      }, {
        value: 25
      }];
      return extraOptions.itemsPerPageArr ? extraOptions.itemsPerPageArr : arr;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleRequestClose", function () {
      var originalArr = _this.state.originalArr;

      _this.setState({
        openManageColumn: false,
        manageColumnArr: originalArr,
        selectAll: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "changeManageColumnArr", function (text) {
      var manageColumnArr = _this.state.manageColumnArr;
      var dupColumn = (0, _toConsumableArray2["default"])(manageColumnArr);

      if (dupColumn.includes(text)) {
        var index = dupColumn.findIndex(function (a) {
          return a === text;
        });

        if (index > -1) {
          dupColumn.splice(index, 1);
        }

        _this.setState({
          manageColumnArr: dupColumn
        }, function () {
          if (_this.state.manageColumnArr.length <= 0) {
            _this.setState({
              selectAll: true
            });
          }
        });
      } else {
        dupColumn.push(text);

        _this.setState({
          manageColumnArr: dupColumn,
          selectAll: false
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "SelectAllManageColumnArr", function (header) {
      var selectAll = _this.state.selectAll;
      var textData = [];
      header.map(function (obj) {
        return !obj.disabled && textData.push(obj.name);
      });

      if (selectAll === true) {
        _this.setState({
          manageColumnArr: textData,
          selectAll: false
        });
      } else {
        _this.setState({
          manageColumnArr: [],
          selectAll: true
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "saveManageColumn", function () {
      var manageColumnArr = _this.state.manageColumnArr;
      var storageId = _this.props.storageId;

      _this.setState({
        originalArr: manageColumnArr,
        openManageColumn: false,
        selectAll: false
      }, function () {
        if (localStorage && storageId && storageId.trim() !== '') {
          localStorage.setItem(storageId, JSON.stringify(_this.state.originalArr));
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showManageColumnUI", function () {
      var _this$state3 = _this.state,
          openManageColumn = _this$state3.openManageColumn,
          manageColumnArr = _this$state3.manageColumnArr,
          selectAll = _this$state3.selectAll;
      var _this$props2 = _this.props,
          classes = _this$props2.classes,
          header = _this$props2.header;
      return _react["default"].createElement("div", null, _react["default"].createElement(_ec2Styles.CustomDialog, {
        TransitionComponent: _Slide["default"],
        open: openManageColumn,
        onClose: _this.handleRequestClose,
        maxWidth: "md",
        fullWidth: true
      }, _react["default"].createElement(_styles2.CustomHeader, {
        padding: "10px 0px 10px 20px",
        textAlign: 1
      }, _react["default"].createElement("span", {
        className: "headerTitle"
      }, "Manage Column"), _react["default"].createElement(_ec2Styles.CancelButton, {
        onClick: _this.handleRequestClose
      }), _react["default"].createElement("div", {
        className: "selectAll"
      }, _react["default"].createElement(_Checkbox["default"], {
        checked: selectAll,
        onChange: function onChange() {
          return _this.SelectAllManageColumnArr(header);
        },
        classes: {
          root: classes.root,
          checked: classes.checked
        }
      }), _react["default"].createElement("div", null, "Select All"))), _react["default"].createElement(_ec2Styles.CustomDialogContent, null, _react["default"].createElement(_styles2.ManageColumnWrapper, null, header.map(function (obj, index) {
        return !obj.disabled && _react["default"].createElement(_awsSettings.ManageColumnFlex, {
          key: "manage-coloumn-".concat(index)
        }, _react["default"].createElement("div", {
          className: "flex"
        }, _react["default"].createElement(_awsSettings.CustomCheckBox, {
          checked: !manageColumnArr.includes(obj.name),
          onChange: function onChange() {
            return _this.changeManageColumnArr(obj.name);
          },
          classes: {
            root: classes.root,
            checked: classes.checked
          }
        }), _react["default"].createElement("div", {
          className: "title"
        }, obj.label)));
      }))), _react["default"].createElement("div", {
        style: {
          paddingTop: '20px',
          border: '1px solid #b9b3b3'
        }
      }, _react["default"].createElement(_awsSettings.ButtonGroup, null, _react["default"].createElement(_awsSettings.SettingButton, {
        textColor: "#1890ff",
        border: "1.2px solid #1890ff",
        fontWeight: 0,
        bgColor: "transparent",
        opacity: "0.8",
        noHover: 1,
        onClick: function onClick() {
          return _this.handleRequestClose('');
        }
      }, "Cancel"), _react["default"].createElement(_awsSettings.SettingButton, {
        marginLeft: "20px",
        onClick: function onClick() {
          return _this.saveManageColumn();
        }
      }, "Save")))));
    });
    _this.state = {
      showCsv: false,
      pageNo: 1,
      minLimit: 1,
      maxLimit: '',
      total: '',
      perPage: 0,
      jumbToPage: '',
      header: [],
      active: false,
      key: '',
      openManageColumn: false,
      manageColumnArr: [],
      originalArr: [],
      selectAll: false
    };
    return _this;
  }

  (0, _createClass2["default"])(DataTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var storageId = this.props.storageId;

      if (localStorage && storageId && storageId.trim() !== '' && localStorage.getItem(storageId)) {
        try {
          if (typeof JSON.parse(localStorage.getItem(storageId)) !== 'string') {
            this.setState({
              manageColumnArr: JSON.parse(localStorage.getItem(storageId) || []),
              originalArr: JSON.parse(localStorage.getItem(storageId) || [])
            });
          } else {
            localStorage.setItem(storageId, JSON.stringify([]));
          }
        } catch (_unused) {
          localStorage.setItem(storageId, JSON.stringify([]));
        }
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps() {
      var _this2 = this;

      var _this$props3 = this.props,
          extraOptions = _this$props3.extraOptions,
          header = _this$props3.header;

      if (header) {
        this.setState({
          header: header
        });
      }

      if (extraOptions.showPagination) {
        this.setState({
          perPage: extraOptions.perPage ? extraOptions.perPage : 5
        }, function () {
          _this2.changeTheLengthOfTheTable(_this2.state.perPage);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          showCsv = _this$state4.showCsv,
          jumbToPage = _this$state4.jumbToPage,
          perPage = _this$state4.perPage,
          pageNo = _this$state4.pageNo,
          total = _this$state4.total,
          openManageColumn = _this$state4.openManageColumn;
      var _this$props4 = this.props,
          extraOptions = _this$props4.extraOptions,
          body = _this$props4.body,
          header = _this$props4.header;
      var headerArr = this.makeCsvHeaderData(header ? header : []);
      var csvData = [headerArr].concat((0, _toConsumableArray2["default"])(body));
      var rowHeight = extraOptions.rowHeight; //(Body Row height)

      var rowBorder = extraOptions.rowBorder; //(true/false for the body row Border)

      var rowBorderColor = extraOptions.rowBorderColor; //(color for the Body row Border(rowBorder should true, otherwise it will not appear))

      var headBorder = extraOptions.headBorder; //(true/false for the Header Border)

      var headBorderColor = extraOptions.headBorderColor; //(color for the Header row Border(headBorder should true, otherwise it will not appear))

      var headHeight = extraOptions.headHeight; //(Header height)

      var headCellPadding = extraOptions.headCellPadding; //(Padding on the Header Cell)

      var bodyCellPadding = extraOptions.bodyCellPadding; //(Padding CSS on the Header Cell)

      var headAlign = extraOptions.headAlign; //(true/false, Header cell Text Align Property, if true it will align on the Center)

      var bodyAlign = extraOptions.bodyAlign; //(true/false, Body cell Text Align Property, if true it will align on the Center);

      var cellBorder = extraOptions.cellBorder; //Boder for cell, left border is used

      var csvName = extraOptions.csvName;
      var noIconManager = extraOptions.noIconManager;
      return _react["default"].createElement(_styles2.CustomHeader, {
        id: "custom--react-data-table"
      }, !noIconManager && _react["default"].createElement(_styles2.CustomTablePanel, null, _react["default"].createElement("div", {
        className: "iconManager"
      }, _react["default"].createElement("div", {
        className: "flex"
      }, _react["default"].createElement("div", {
        className: "tableName"
      }, extraOptions.tableName ? extraOptions.tableName : 'Data Table'))), _react["default"].createElement("div", {
        className: "iconManager"
      }, _react["default"].createElement("div", {
        className: "flex"
      }, this.getIconManager()))), _react["default"].createElement(_styles2.TableWrapper, null, _react["default"].createElement(_styles2.NewTable, {
        rowHeight: rowHeight,
        rowBorder: rowBorder,
        rowBorderColor: rowBorderColor,
        headBorder: headBorder,
        headBorderColor: headBorderColor,
        headHeight: headHeight,
        headCellPadding: headCellPadding,
        bodyCellPadding: bodyCellPadding,
        headAlign: headAlign,
        bodyAlign: bodyAlign,
        cellBorder: cellBorder
      }, this.getHeadUI(header ? header : []), this.getBodyUI(body ? body : []))), extraOptions.showPagination && _react["default"].createElement(_styles2.BottomTableFlex, null, _react["default"].createElement("div", null, _react["default"].createElement(_styles2.JumbToPageWrapper, null, _react["default"].createElement("div", {
        className: "name"
      }, "Jump to page"), _react["default"].createElement(_CustomDropDown["default"], {
        options: this.getJumpToPageArr(),
        changeRegion: this.changeJumbToPage,
        selected: jumbToPage,
        dropDownWidth: '68px'
      }))), _react["default"].createElement("div", null, _react["default"].createElement(_styles2.PageNoWrapperr, null, _react["default"].createElement("div", {
        className: "pageText"
      }, "Page ".concat(pageNo, " of ").concat(total)), this.getPaginationSquare())), _react["default"].createElement("div", null, _react["default"].createElement(_styles2.JumbToPageWrapper, null, _react["default"].createElement("div", {
        className: "name"
      }, "Items per page"), _react["default"].createElement(_CustomDropDown["default"], {
        options: this.getItemsPerPageDropdownArr(),
        changeRegion: this.changePerPage,
        selected: perPage,
        dropDownWidth: '68px'
      })))), showCsv && _react["default"].createElement(_CSVMaker["default"], {
        data: csvData,
        removeCSVData: this.removeCSVData,
        csvName: csvName
      }), openManageColumn && this.showManageColumnUI());
    }
  }]);
  return DataTable;
}(_react["default"].Component);

var _default = (0, _styles.withStyles)(styles)(DataTable);

exports["default"] = _default;