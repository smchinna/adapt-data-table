import styled from 'styled-components';

export const CustomHeader = styled.div`
  width: 100%;
  padding: ${({ padding }) => padding && padding };
  text-align: ${({ textAlign }) => textAlign && 'center'};
  .headerTitle {
    font-weight: bold;
    font-size: 20px;
  }
  .selectAll {
    font-weight: bold;
    float: right;
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    >span {
      padding: 0 !important;
      margin-right: 5px !important;
    }
  }
  > div {
    border-radius: 8px;
  }
  .table-custom-header {
    > div {
      max-height: 100% !important;
      >table {
        min-width: 100%;
        >tbody {
          >tr {
            height: 40px;
            >td {

              >div{
                font-size: 16px;
              }
            }
          }
        }
        >thead {
          >tr{
            height: 40px;
            >th {
              background-color: #66a3ff !important;
              font-size: 16px;
              font-weight: 700;
              color: white;
              height: 30px;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
`;

export const CellDiv = styled.div`
  color: ${({ isLink }) => isLink && '#66a3ff'};
  cursor: ${({ isLink }) => isLink && 'pointer'};
  white-space: nowrap;
`;

export const NewTable = styled.table`
  margin-left: ${({ cellBorder }) => cellBorder && '-1px'};
  min-width: 100%;
  >thead {
    >tr {
      white-space: nowrap;
      height: ${({ headHeight }) => headHeight ? headHeight : '30px'};
      border-top: ${({ headBorder, headBorderColor }) => headBorder ? headBorderColor ? headBorderColor : '1px solid lightgray' : 'none'};
      >td {
        padding: ${({ headCellPadding }) => headCellPadding ? headCellPadding : '0 20px 0px'};
        text-align: ${({ headAlign }) => headAlign && 'center'};
        font-weight: bold;
        text-transform: capitalize;
        border-left: ${({ cellBorder }) => cellBorder && '1px solid #dddddf'};
      }
    }
  }
  >tbody {
    >tr {
      white-space: nowrap;
      height: ${({ rowHeight }) => rowHeight ? rowHeight : '30px'}
      border-top: ${({ rowBorder, rowBorderColor }) => rowBorder ? rowBorderColor ? rowBorderColor : '1px solid lightgray' : 'none'};
      >td {
        padding: ${({ bodyCellPadding }) => bodyCellPadding ? bodyCellPadding : '0px 20px 0px'};
        text-align: ${({ bodyAlign }) => bodyAlign && 'center'};
        border-left: ${({ cellBorder }) => cellBorder && '1px solid #dddddf'};
      }
    }
  }
`;

export const TableWrapper = styled.div`
  max-width: 100%;
  overflow-x: auto;
`;

export const CustomRow = styled.tr`
  background-color: ${({ bgColor }) => bgColor ? bgColor : 'white'};
  background-color: ${({ active }) => active && '#eaf3fe'};
  :hover {
    background-color: #eaf3fe;
  }
`;

export const CustomTablePanel = styled.div`
width: 100%;
height: 50px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
.iconManager {
  display: block;
  .flex {
    height: 50px;
    display: flex;
    align-items: center;
    .tableName {
      font-size: 20px;
      font-weight: 500;
      color: black;
      padding-left: 1px;
    }
  }
}
`;

export const IconWrapper = styled.div`
  display: inline-block;
  margin-left: 24px;
  cursor: pointer;
`;

export const BottomTableFlex = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 12px;
  > div {
    display: block;
  }
`;

export const PageNoWrapperr = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 60px;
  .pageText {
    margin-right: 18px;
  }
`;

export const JumbToPageWrapper = styled.div`
  display: flex;
  align-items: center;
  .name {
    margin-right: 10px;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
  }
`;

export const ManageColumnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 400px;
  margin: 10px;
`;