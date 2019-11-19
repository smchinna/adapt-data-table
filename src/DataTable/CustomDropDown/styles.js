import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';

const FixedDropdown = styled(FormControl)`
    width: ${({ dropDownWidth }) => dropDownWidth ? `${dropDownWidth} !important` : '230px !important'};
    // margin-top: 15px !important;
`;

const RegionSelect = styled.select`
padding-left: 10px;
border-radius: 8px;
border: 1px solid #979797;
height: 33px;
// width: 160px;
outline: 0;
`;

export {FixedDropdown, RegionSelect}