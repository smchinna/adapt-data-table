import styled from 'styled-components';
import { Popover } from 'reactstrap';
import Close from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';

const CustomDialog = styled(Dialog)`
  >div{
    >div{
      background-color: rgba(255, 255, 255, 0.8) !important;
      max-width: 1264px !important;
      border-radius: 5px !important;
    }
  }
`;

const CustomHeader = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 31px 10px 31px;
}
`;

const CustomDialogContent = styled(DialogContent)`
  padding: 0px !important;
`;

const InstanceTable = styled.div`
  width: 100%;
  .full-border {
    border: 1px dashed grey;
    padding: 21px 10px;
  }
  .description {
    > span {
      border-top: 2px solid #f90;
      border-bottom: 1px solid #fff;
      background: #fff;
      font-weight: bold;
      padding: 8px 8px 2px;
      border-left: 1px dashed grey;
      border-right: 1px dashed grey;
    }
  }
`;

const TableValue = styled.div`
  padding-left: 20px;
  cursor: ${({ clickable }) => clickable && 'pointer'};
  color: ${({ clickable }) => clickable && 'blue'};
`;

const CustomPopOver = styled(Popover)`
  background-color: #000 !important;
  .popover-inner {
    .popover-header {
      color: white;
    }
    .popover-body{
      color: white;
    }
  }
`;

const CustomBox = styled.div`
  width: 50%;
  padding: 15px;
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GroupBox = styled.div`
  width: 100%;
  height: 100%;
  .header {
    height: 36px;
    width: 100%;
    background-color: ${({ bgColor }) => bgColor ? bgColor : '#fff'};
    border-radius: 4px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MakeFlexGrid = styled.div`
  width: ${({ width }) => width ? width : '100%'};  
  display: ${({ flex }) => flex && 'flex'};
  align-items: ${({ alignCenter }) => alignCenter && 'center'};
  justify-content: ${({ spaceBetween }) => spaceBetween && 'space-between'};
  padding: ${({ padding }) => padding && padding };
  .fullGrid {
    height: 100%;
    > div {
      height: 100%;
    }
  }
  .customHeight {
    height: 320px !important;
  }
`;

const CancelButton = styled(Close)`
  float: right;
  cursor: pointer;
`;

const CustomLink = styled.span`
  color: #046bfc;
  font-weight: 500 ;
  padding-right: 5px;
  cursor: pointer;
`;

const CustomFlex = styled.div`
  padding-left: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { InstanceTable, CustomDialog, CustomHeader, TableValue, CustomDialogContent, CustomPopOver, CustomBox, FlexBox, GroupBox, MakeFlexGrid, CancelButton, CustomLink, CustomFlex }