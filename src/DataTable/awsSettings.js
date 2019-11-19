import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from "@material-ui/core/Dialog";

const OptionIcon = styled.div`
  position: absolute;
  right: 110px;
  top: 10px;
  z-index: 100;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  > i {
    font-size: 27px;
    cursor: pointer;
  }
  &: hover{
    background-color: rgba(0,0,0,0.08);
  }
`;

const ShadowBox = styled.div`
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
  position: ${({ noAbsoulte }) => !noAbsoulte && 'absolute'};
  right: 148px;
  background-color: white;
  z-index: 200;
  border-radius: 12px;
  top: 44px;
  width: ${({ width }) => width && width};
  .block {
    display: block;
    .buttonGroup {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const OptionPanel = styled.div`
  width: 100%;
  white-space: nowrap;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${({ bottomBorder }) => bottomBorder && '3px solid #f1f1f1'};
  font-weight: 500;
  font-size: 14px;
  color: ${({ textColor }) => textColor ? textColor : '#1890ff'};
  padding: 0px 13px;
  cursor: pointer;
`;

const CustomTextField = styled(TextField)`
  min-width: 150px;
  padding: 10px 15px !important;
  >div {
    >input {
      background-color: white;
      font-size: 16px;
    }
    >input::placeholder {
      color: grey;
      font-size: 16px;
    }
  }
`;

const CustomRadioGroup = styled(RadioGroup)`
  padding: 0 15px !important;
  .title {
    font-weight: bold;
    font-size: 17px;
  }
`;

const SettingButton = styled.button`
  height: 36px;
  border-radius: 5px;
  border: ${({ border }) => border ? border : 'none'};
  outline: none;
  background-color: ${({ bgColor }) => bgColor ? bgColor : '#046bfc'};
  font-size: 16px;
  font-weight: ${({ fontWeight }) => fontWeight ? 'bold' : 'normal'};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${({ textColor }) => textColor ? textColor : '#ffffff'};
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  opacity: ${({ disabled }) => disabled && '0.5'};
  padding: 2px 15px;
  margin-left: ${({  marginLeft }) => marginLeft && marginLeft };
  :disabled {
    background-color: #e1e1e1;
    color: #868686;
  }
  :hover {
    background-color: ${({ noHover }) => !noHover && '#0360e4'};
  }
`;

const CustomButton = styled.button`
  margin: 10px 15px 15px;
  color: white;
  background-color: ${({ bgColor }) => bgColor ? bgColor : 'blue'};
  border: ${({ bgColor }) => bgColor ? `1px solid ${bgColor}` : `1px solid blue`};
  border-radius: 20px;
  height: 38px;
  font-weight: bold;
  padding: 0px 25px;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  opacity: ${({ disabled }) => disabled && '0.5'};
  color: ${({ textColor }) => textColor && textColor};
`;

const CustomCheckBox = styled(Checkbox)` 
`;

const ManageColumnFlex = styled.div`
  display: block;
  width: ${({ width }) => width ? width : '33%'};
  position: relative;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  opacity: ${({ disabled }) => disabled && '0.5'};
  overflow: hidden;
  .flex {
    display: flex;
    width: 100%;
    align-items: center;
    .title {
      font-weight: bold;
      font-weight: bold;
      overflow: hidden;
      text-transform: capitalize;
    }
  }
  
  .iconManager {
    position: absolute;
    right: 10px;
    >i {
      font-size: 16px;
      margin-right: 3px;
    }
  }
  .duplicate {
    width: 100%;
    text-align: center;
    margin: 10px 0px;
  }
`;

const AbsoluteSave = styled.div`
  // position: absolute;
  // bottom: 6px;
  // left: 20px;
  margin-top: 8px;
  margin-right: 20px;
  padding: 8px 20px;
`;

const DragDropGrid = styled.div`
  width: 100%;
  max-height: 500px;
  margin: 20px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .block {
    display: block;
    width: 400px;
    .buttonGroup {
      display: flex;
      justify-content: space-between;
      .idMissing {
        padding: 10px 10px 0px;
        width: 100%;
        text-align: center;
        color: red;
      }
    }
  }
  .dropZone {
    width: 400px;
    height: 250px;
    border: 1px dashed grey;
    background-color: #eaedf3;
    display: block;
    .flex {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      > label {
        max-width: 350px;
      }
      .note {
        text-align: center;
        padding: 10px 52px;
        font-size: 12px;    
      }
    }
  }
`;

const UploadButton = styled.button`
  margin: 10px 0px;
  position: relative;
  width: 100%;
  box-shadow: ${({ successButton }) => successButton && '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'};
  color: ${({ successButton }) => successButton ? 'black' : 'white'};
  background-color: ${({ successButton }) => successButton ? 'white' : 'blue'};
  border: ${({ successButton }) => successButton ? '1px solid white' : '1px solid blue'};
  border-radius: 3px;
  height: 38px;
  font-weight: normal;
  padding: 0px 10px;
  text-align: ${({ leftAlign }) => leftAlign ? 'left' : 'center'};
  font-size: ${({ fontSize }) => fontSize ? fontSize : '19px'};
  cursor: ${({ noCursor }) => noCursor ? 'auto' : 'pointer'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .fileName {
    display: inline-block;
    max-width: 220px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  > i {
    color: ${({ successButton }) => successButton ? 'black' : 'white'};
    font-weight: bold;
    margin-right: 10px
  }
  >input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .upload-success {
    float: right;
    >i {
      padding-left: 10px;
      border-left: 1px solid white;
      margin-left: 10px;
      cursor: pointer;
    }
  }
`;

const ActivePage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: ${({ active }) => active && '#3897f0'};
  font-size: 16px;
  color: ${({ active }) => active && '#ffffff'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CancelButton = styled.div`
  margin-top: 2px;
  margin-right: 3px;
`;

const DialogWrapper = styled(Dialog)`
  max-height: 65%;
  top: 165px !important;
  & > div:nth-child(2) > div {
    width : 25%;
  }
`;

const CustomInputField = styled(TextField)`
  min-width: 109px !important;
  margin: 0px !important;
  height: 36px;
  padding: 0px !important;
`;

const CustomHeaderUI = styled.div`
  height: 50px;
  background-color: #ffffff;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  cursor: ${({ clickable }) => clickable && 'pointer'};
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'center'};
  margin-bottom: 15px;
  margin-top: ${({marginTop}) => marginTop  && marginTop };
`;

const CustomSaveIcon = styled.div`
  margin-left: 20px;
  margin-top: -8px;
`;

const FilterGrid = styled.div`
  position: absolute;
  top: 11px;
  left: 20px;
  z-index: 100;
`;

const MultiSelectGrid = styled.div`
  display: flex;
  border: 1px solid #f0f0f0; 
  padding: 0px 6px 6px 0px;
  flex-wrap: wrap;
  max-width: 700px;
  min-width: 400px;
  >input {
    margin: 6px 0px 0px 6px;
    padding: 0px 10px;
    border: none;
  }
`;

const SelectedMultiOption = styled.span`
  margin: 6px 0px 0px 6px;
  background-color: #f9f9f9;
  border: 1px solid #f0f0f0;  
  padding: 0px 5px;
`;

export {
  OptionIcon, ShadowBox, OptionPanel, CustomTextField, CustomRadioGroup, CustomButton, CustomCheckBox,
  ManageColumnFlex, AbsoluteSave, DragDropGrid, UploadButton, SettingButton, ActivePage, CancelButton, DialogWrapper,
  CustomInputField, CustomHeaderUI, ButtonGroup, CustomSaveIcon, FilterGrid, MultiSelectGrid, SelectedMultiOption
};