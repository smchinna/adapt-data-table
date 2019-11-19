import React from 'react';
import { CSVLink } from "react-csv";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HideElement = styled.div`
  display: block;
`; 

class CSVMaker extends React.Component {
  componentDidMount() {
    setTimeout(() => this.inputElement.link.click(), 500 );
    setTimeout(() => this.props.removeCSVData(), 1000)
  }

  render() {
    const { data, csvName } = this.props;
    return (
      <HideElement>
        <CSVLink
          data={data}
          filename={csvName ? `${csvName}.csv` : "table.csv"}
          target="_blank" 
          ref={(input) => this.inputElement = input}
        >
        
        </CSVLink>
      </HideElement>
    )
  }
}

CSVMaker.propTypes = {
  data: PropTypes.array,
  removeCSVData: PropTypes.func
}

export default CSVMaker;