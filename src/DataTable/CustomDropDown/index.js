import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FixedDropdown } from './styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';


class CustomDropDown extends React.Component{
  handleChange = e => {
    const { changeRegion } = this.props;
    changeRegion(e.target.value)
  };

  render(){
    const { options, selected, dropDownWidth } = this.props;
    return ( 
      <FixedDropdown dropDownWidth={dropDownWidth}>
        {/* <RegionSelect value={selected} onChange={this.handleChange}>
        {options.map((obj, i) => (
          <option value={obj.region_code} index={`selec-region-${i}`}>{obj.region_code}</option>
        ))}
        </RegionSelect> */}
        <Select
          value={selected}
          onChange={this.handleChange}
          MenuProps={{
            getContentAnchorEl: null,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            }
          }}
          style={{display: "flex", flexWrap: "wrap"}}
          input={<BootstrapInput name="age" id="age-customized-select" />}
        >
          {options.map((obj, i) => (
            <MenuItem value={obj.region_code || obj.value || obj.account_id} index={`selec-region-${i}-${obj.region_code || obj.value || obj.account_id}`} key={`selec-region-${i}-${obj.region_code || obj.value || obj.account_id}`}>
              {
                ((obj.region_code  && obj.region_name) ? `${obj.region_code} (${obj.region_name})` : obj.region_code) 
                || obj.value 
                || ((obj.account_name && obj.account_id) ? `${obj.account_id} (${obj.account_name})` : obj.account_id)
              } 
            </MenuItem>
            // <option value={obj.region_code} index={`selec-region-${i}`}>{obj.region_code}</option>
          ))}
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FixedDropdown>  
    )
  }
}



const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      // marginTop: theme.spacing(3),
    },
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
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

export default CustomDropDown;