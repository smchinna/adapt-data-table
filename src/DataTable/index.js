import React from 'react';
// import MUIDataTable from "mui-datatables";
import Slide from '@material-ui/core/Slide';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import { CustomHeader, NewTable, TableWrapper, CustomRow, CustomTablePanel, IconWrapper, BottomTableFlex,
  PageNoWrapperr, JumbToPageWrapper, ManageColumnWrapper } from './styles';

import { CustomDialog, CustomDialogContent, CancelButton } from './ec2Styles';

import { Print, Download, ManageColumn } from './SvgComponents/index';
import CSVMaker from './CSVMaker';
import { ActivePage, CustomCheckBox, ManageColumnFlex, ButtonGroup, SettingButton } from './awsSettings';
import CustomDropDown from './CustomDropDown';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};


class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    } 
  }

  changeTheLengthOfTheTable = (perPage) => {
    const { body } = this.props;
    if(body && body.length>0) {
      this.setState({
        total: Math.ceil(body.length/perPage),
        countingValues: body.length,
      },() => {
        if(this.state.total < 5) {
          this.setState({
            minLimit: 1,
            maxLimit: this.state.total,
            pageNo: 1
          })
        }
        else {
          this.setState({
            minLimit: 1,
            maxLimit: 5,
            pageNo: 1
          })
        }
      })
    }
  }

  componentDidMount() {
    const { storageId } = this.props;
    if(localStorage && storageId && storageId.trim() !== '' && localStorage.getItem(storageId) ) {
      try {
        if(typeof(JSON.parse(localStorage.getItem(storageId))) !== 'string') {
          this.setState({
            manageColumnArr: JSON.parse(localStorage.getItem(storageId) || []),
            originalArr: JSON.parse(localStorage.getItem(storageId) || [])
          })
        } else {
          localStorage.setItem(storageId, JSON.stringify([]));
        }
      } catch {
        localStorage.setItem(storageId, JSON.stringify([]));
      }
    }
  }

  UNSAFE_componentWillReceiveProps() {
    const { extraOptions, header } = this.props;
    if(header) {
      this.setState({
        header: header
      })
    }
    if(extraOptions.showPagination) {
      this.setState({
        perPage: extraOptions.perPage ? extraOptions.perPage : 5
      }, () => {
        this.changeTheLengthOfTheTable(this.state.perPage)
      }) 
    }
  }

  getCustomCellUI = (cellIndex, cellValue, rowValue, rowIndex, tableData) => {
    const { header } = this.props;
    if(header[cellIndex] && header[cellIndex].options && header[cellIndex].options.customBodyRender) {
      let obj = {
        columnData: header[cellIndex],
        columnIndex: cellIndex,
        rowData: rowValue,
        rowIndex: rowIndex,
        tableData: tableData
      }
      return header[cellIndex].options.customBodyRender(cellValue, obj);
    } else {
      return cellValue;
    }
  }

  getRowColor = (index) => {
    const { extraOptions } = this.props;
    let rowColor = (extraOptions && extraOptions.rowColor) ? [...extraOptions.rowColor] : []; //(Color for the Body rows, It always should be a array format)
    let color = 'white';
    let getIndex = index%rowColor.length;
    if(getIndex<rowColor.length) {
      color = rowColor[getIndex]; 
    }
    return color;
  }

  handleClick = (key) => {
    if(this.state.key === key){
      this.setState({
        active: false,
        key: ''
      })
    }else
      this.setState({
        active: true,
        key: key
      })
  }

  getRows = (bodyIndex, rows, body) => {
    const { extraOptions, header } = this.props;
    const { pageNo, perPage, active, key, originalArr } = this.state;
    if(extraOptions.showPagination) {
      let start = ((pageNo-1)*perPage);
      let end = pageNo*perPage; 
      if(start<=bodyIndex && bodyIndex<end) {
        return (
          <CustomRow 
            active={active && key === `table-body-${bodyIndex}`} 
            key={`table-body-${bodyIndex}`} 
            bgColor={this.getRowColor(bodyIndex)} 
            onClick={() => this.handleClick(`table-body-${bodyIndex}`)}
            >
            { rows.map((cell, cellIndex) => (
              !originalArr.includes(header[cellIndex].name) &&
              <td key={`table-cell-${bodyIndex}-${cellIndex}`}>
                {this.getCustomCellUI(cellIndex, cell, rows, bodyIndex, body)}
              </td>
            ))}
          </CustomRow>
        )
      } 
    } else {
      return (
        <CustomRow 
        active={active &&  key === `table-body-${bodyIndex}`} 
        key={`table-body-${bodyIndex}`} 
        bgColor={this.getRowColor(bodyIndex)} 
        onClick={() => this.handleClick(`table-body-${bodyIndex}`)}
        >
          { rows.map((cell, cellIndex) => (
            !originalArr.includes(header[cellIndex].name) && 
            <td key={`table-cell-${bodyIndex}-${cellIndex}`}>
              {this.getCustomCellUI(cellIndex, cell, rows, bodyIndex, body)}
            </td>
          ))}
        </CustomRow>
      )
    }
  }

  getBodyUI = (body) => {
    return (
      <tbody>
        {body.map((rows, bodyIndex) => (
          this.getRows(bodyIndex, rows, body)
        ))}
      </tbody>
    )
  }

  getCustomHeadUI = (row) => {
    if(row.options && row.options.customHeaderRender) {
      return row.options.customHeaderRender(row.label, row);
    } else {
      return row.label;
    }
  }

  getHeadUI = (header) => {
    const { originalArr } = this.state;
    return(
      <thead>
        <tr>
          {header.map((row, index)=>(
            !originalArr.includes(row.name) && <td key={`table-header-key-${index}`}>{this.getCustomHeadUI(row)}</td>
          ))}
        </tr>
      </thead>
    )
  }

  printMethod = (cb) => {
    if(cb) {
      cb();
    }
    var printContents = document.getElementById('custom--react-data-table').innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    // // console.log("PRINT")
  }

  csvMethod = (cb) => {
    if(cb) {
      cb();
    }
    this.setState({
      showCsv: true
    })
  }

  manageColumnMethod = (cb) => {
    if(cb) {
      cb();
    }
    const { header, originalArr } = this.state;
    this.setState({
      openManageColumn: true,
      manageColumnArr: originalArr
    },() => {
      if(this.state.manageColumnArr.length <= 0){
        this.setState({
          selectAll: true
        })
      }
    })
    // console.log("manageColumnMethod", header)
  }

  getIconUI = (obj) => {
    let icon = '';
    switch(obj.name) {
      case 'PRINT':
        if(obj.component) {
          icon = <IconWrapper onClick={() => this.printMethod(obj.callMethod && obj.callMethod)}>
          {obj.component()}
        </IconWrapper>
        } else {
          icon = <Tooltip title="Print" enterDelay={500} disableFocusListener disableTouchListener>
            <IconWrapper onClick={() => this.printMethod(obj.callMethod && obj.callMethod)}>
             <Print fill={obj.color || '#000'} />
            </IconWrapper>
            </Tooltip>
        } 
        break;

      case 'CSV':
        if(obj.component) {
          icon = <IconWrapper onClick={() => this.csvMethod(obj.callMethod && obj.callMethod)}>
          {obj.component()}
        </IconWrapper>
        } else {
          icon = <Tooltip title="Download CSV" enterDelay={500} disableFocusListener disableTouchListener>
              <IconWrapper onClick={() => this.csvMethod(obj.callMethod && obj.callMethod)}>
              <Download fill={obj.color || '#000'} />
              </IconWrapper>
            </Tooltip>
        } 
        break;

      case 'MANAGECOLUMN':
        if(obj.component) {
          icon = <IconWrapper onClick={() => this.manageColumnMethod(obj.callMethod && obj.callMethod)}>
              {obj.component()}
            </IconWrapper>
        } else {
          icon = <Tooltip title="Manage Column" enterDelay={500} disableFocusListener disableTouchListener>
              <IconWrapper onClick={() => this.manageColumnMethod(obj.callMethod && obj.callMethod)}>
            <ManageColumn fill={obj.color || 'rgba(0, 0, 0, 0.54)'} />
            </IconWrapper>
            </Tooltip>
        }
        break;

      default:
        if(obj.component) {
          icon = <Tooltip title={obj.tooltip? obj.tooltip : ""} enterDelay={500} disableFocusListener disableTouchListener>
            <IconWrapper onClick={() => obj.callMethod && obj.callMethod(...obj.parameter)}>
          {obj.component()}
        </IconWrapper>
        </Tooltip>
        } else {
          icon = ''
        }
        break;
    }
    return icon;
  } 

  clicked = () => {
    alert('clikced')
  }

  getIconManager = () => {
    const { extraOptions } = this.props;
    let iconOptions = extraOptions.iconManager ? extraOptions.iconManager : [];
    let arr = []
    for(let i=0; i<iconOptions.length; i++) {
      let obj = iconOptions[i];
      if(obj.type === 'icon') {
        arr.push(
         this.getIconUI(obj)
        )
      } else {
        arr.push(obj.component())
      }
    }
    return arr;
  }

  removeCSVData = () => {
    this.setState({
      showCsv: false
    })
  }

  setPagination = (activeIndex) => {
    if(activeIndex !== this.state.pageNo) {
      if(this.state.total <= 5) {
        this.setState({
          minLimit: 1,
          maxLimit: this.state.total,
          pageNo: activeIndex
        });
      }
      else {
        if(activeIndex === 1) {
          this.setState({
            pageNo: activeIndex,
            maxLimit: 5,
            minLimit: 1
          })
        }
        else {
          if(activeIndex+3 > this.state.total) {
            this.setState({
              pageNo: activeIndex,
              maxLimit: this.state.total,
              minLimit: this.state.total-4
            });
          }
          else {
            this.setState({
              pageNo: activeIndex,
              maxLimit: activeIndex+3,
              minLimit: activeIndex-1
            });
          }
        }
      }
    }
  }

  getPaginationSquare = () => {
    let circleButton = [];
    for(let i=this.state.minLimit; i<=this.state.maxLimit; i++) {
      circleButton.push(<ActivePage key={i} active={i===this.state.pageNo} onClick={() => this.changePerAction(i)}><div>{i}</div></ActivePage>)
    }
    return circleButton;
  }

  changePerAction = (index) => {
    this.setState({
      jumbToPage: index
    }, () => this.setPagination(index))
  }

  makeCsvHeaderData = (header) => {
    let arr = [];
    for(let i=0; i<header.length; i++) {
      arr.push(header[i].label)
    }
    return arr;
  }

  changeJumbToPage = (value) => {
    this.setState({
      jumbToPage: value
    }, () => this.setPagination(value))
  }

  changePerPage = (value) => {
    this.setState({
      perPage: value
    }, () => this.changeTheLengthOfTheTable(value))
  }

  getJumpToPageArr = () => {
    let arr = [];
    for(let i=1; i<=this.state.total; i++) {
      arr.push({ value: i });
    }
    return arr;
  }

  getItemsPerPageDropdownArr = () => {
    const { extraOptions } = this.props;
    let arr = [
      // {
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
      },
      {
        value: 10
      },
      {
        value: 15
      },
      {
        value: 20
      },
      {
        value: 25
      }
    ]
    return extraOptions.itemsPerPageArr ?  extraOptions.itemsPerPageArr : arr;
  }

  handleRequestClose = () => {
    const { originalArr } = this.state;
    this.setState({ openManageColumn: false, manageColumnArr: originalArr, selectAll: false });
  };

  changeManageColumnArr = (text) => {
    const { manageColumnArr } = this.state;
    let dupColumn = [...manageColumnArr];
    if(dupColumn.includes(text)) {
      let index = dupColumn.findIndex((a) => a === text);
      if(index>-1) {
        dupColumn.splice(index, 1);
      }
      this.setState({
        manageColumnArr: dupColumn
      },()=>{
        if(this.state.manageColumnArr.length <= 0){
          this.setState({
            selectAll: true
          })
        }
      })
    } else {
      dupColumn.push(text);
      this.setState({
        manageColumnArr: dupColumn,
        selectAll: false
      })
    }
  }

  SelectAllManageColumnArr = (header) => {
    const { selectAll } = this.state;
    let textData = [];
    header.map((obj)=>(
      !obj.disabled && textData.push(obj.name)
    ))
    if(selectAll === true){
      this.setState({
        manageColumnArr: textData,
        selectAll: false
      })
    }else{
      this.setState({
        manageColumnArr: [],
        selectAll: true
      })
    }
  }

  saveManageColumn = () => {
    const { manageColumnArr } = this.state;
    const { storageId } = this.props;
    this.setState({
      originalArr: manageColumnArr,
      openManageColumn: false,
      selectAll: false
    }, () => {
      if(localStorage && storageId && storageId.trim() !== '') {
        localStorage.setItem(storageId, JSON.stringify(this.state.originalArr));
      }
    })
  }

  showManageColumnUI = () => {
    const { openManageColumn, manageColumnArr,selectAll } = this.state;
    const { classes, header } = this.props;
    return (
      <div>
      <CustomDialog
        TransitionComponent={Slide}
        open={openManageColumn}
        onClose={this.handleRequestClose}
        maxWidth="md"
        fullWidth={true}
      >
        <CustomHeader padding="10px 0px 10px 20px" textAlign={1}>
          <span className="headerTitle">
            Manage Column
          </span>
          <CancelButton onClick={this.handleRequestClose} />
          <div className="selectAll">
            <Checkbox 
              checked ={selectAll}
              onChange={() => this.SelectAllManageColumnArr(header)}
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
            <div>Select All</div>
          </div>
        </CustomHeader>
        <CustomDialogContent>
          <ManageColumnWrapper>
            { header.map((obj, index) => (
              !obj.disabled && 
              <ManageColumnFlex key={`manage-coloumn-${index}`}>
                <div className="flex">
                  <CustomCheckBox
                    checked={!manageColumnArr.includes(obj.name)}
                    onChange={() => this.changeManageColumnArr(obj.name)}
                    classes={{
                      root: classes.root,
                      checked: classes.checked,
                    }}
                  />
                  <div className="title">{obj.label}</div>
                </div>
                {/* <div className="iconManager">
                  <i className="zmdi zmdi-more-vert" />
                  <i className="zmdi zmdi-more-vert" />
                </div> */}
              </ManageColumnFlex>
            ))
            }
          </ManageColumnWrapper>
        </CustomDialogContent>
        <div style={{ paddingTop: '20px', border: '1px solid #b9b3b3' }}>
          <ButtonGroup>
            <SettingButton
              textColor="#1890ff"
              border="1.2px solid #1890ff"
              fontWeight={0}
              bgColor="transparent"
              opacity="0.8"
              noHover={1}
              onClick={() => this.handleRequestClose('')}>
              Cancel
            </SettingButton>
            <SettingButton marginLeft="20px" onClick={() => this.saveManageColumn()}>
              Save
            </SettingButton>
          </ButtonGroup>
        </div>
      </CustomDialog>
    </div>
    )
  }

  render() {
    const { showCsv, jumbToPage, perPage, pageNo, total, openManageColumn } = this.state;
    const { extraOptions, body, header } = this.props;
    let headerArr = this.makeCsvHeaderData(header ? header : []);
    let csvData = [
      headerArr,
     ...body
    ];
    let rowHeight = extraOptions.rowHeight; //(Body Row height)
    let rowBorder = extraOptions.rowBorder; //(true/false for the body row Border)
    let rowBorderColor = extraOptions.rowBorderColor; //(color for the Body row Border(rowBorder should true, otherwise it will not appear))
    let headBorder = extraOptions.headBorder; //(true/false for the Header Border)
    let headBorderColor = extraOptions.headBorderColor; //(color for the Header row Border(headBorder should true, otherwise it will not appear))
    let headHeight = extraOptions.headHeight; //(Header height)
    let headCellPadding = extraOptions.headCellPadding; //(Padding on the Header Cell)
    let bodyCellPadding = extraOptions.bodyCellPadding; //(Padding CSS on the Header Cell)
    let headAlign = extraOptions.headAlign; //(true/false, Header cell Text Align Property, if true it will align on the Center)
    let bodyAlign = extraOptions.bodyAlign; //(true/false, Body cell Text Align Property, if true it will align on the Center);
    let cellBorder = extraOptions.cellBorder; //Boder for cell, left border is used
    let csvName = extraOptions.csvName;
    let noIconManager = extraOptions.noIconManager;
    return (
      <CustomHeader id="custom--react-data-table">
        { !noIconManager &&
          <CustomTablePanel >
             <div className="iconManager">
            <div className="flex">
              <div className="tableName">
                {extraOptions.tableName ? extraOptions.tableName : 'Data Table'}
              </div>
            </div>
          </div>
          <div className="iconManager">
            <div className="flex">
              {this.getIconManager()}
            </div>
          </div>
          </CustomTablePanel>
        }
        <TableWrapper>
          <NewTable 
            rowHeight={rowHeight} 
            rowBorder={rowBorder} 
            rowBorderColor={rowBorderColor}
            headBorder={headBorder} 
            headBorderColor={headBorderColor}
            headHeight={headHeight}
            headCellPadding={headCellPadding}
            bodyCellPadding={bodyCellPadding}
            headAlign={headAlign}
            bodyAlign={bodyAlign}
            cellBorder={cellBorder}
          >
            {this.getHeadUI(header ? header : [])}
            {this.getBodyUI(body ? body : [])}
          </NewTable>
        </TableWrapper>
        {extraOptions.showPagination &&
          <BottomTableFlex>
            <div>
              <JumbToPageWrapper>
                <div className="name">Jump to page</div>
                <CustomDropDown 
                  options={this.getJumpToPageArr()} 
                  changeRegion={this.changeJumbToPage} 
                  selected={jumbToPage} 
                  dropDownWidth={'68px'}
                />
              </JumbToPageWrapper>
            </div>
            <div>
              <PageNoWrapperr>
                <div className="pageText">
                  {`Page ${pageNo} of ${total}`}
                </div>
                {this.getPaginationSquare()}
              </PageNoWrapperr>
            </div>
            <div>
              <JumbToPageWrapper>
                <div className="name">Items per page</div>
                <CustomDropDown 
                  options={this.getItemsPerPageDropdownArr()} 
                  changeRegion={this.changePerPage} 
                  selected={perPage} 
                  dropDownWidth={'68px'}
                />
              </JumbToPageWrapper>
             </div>
          </BottomTableFlex>
        }
        {showCsv && <CSVMaker data={csvData} removeCSVData={this.removeCSVData} csvName={csvName}/> }
        {openManageColumn && this.showManageColumnUI()}
      </CustomHeader>
    )
  }
}

export default withStyles(styles)(DataTable);