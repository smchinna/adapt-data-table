import React from 'react';
//import DataTable from './DataTable';

class App extends React.Component {
  render() {
    const headerData = [
      { name: "employee", label: "Employee"},
      { name: "leave", label: "Leave"},
    ]
    
    const rowData = [
      ["Suraj", 3],
      ["Sujata", 6],
      ["a", 3],
      ["b", 6],
      ["c", 3],
      ["d", 6],
      ["e", 3],
      ["f", 6],
      ["g", 3],
      ["h", 6],
      ["i", 3],
      ["j", 6],
    ]
    
    const extraOptions = {
      tableName: 'Table Name',
      rowHeight: '32px',
      rowBorder: true,
      rowBorderColor: '1px solid #f0f0f0',
      bodyCellPadding: '0 10px',
      bodyAlign: false,
      headBorder: true,
      headBorderColor: '1px solid #f0f0f0',
      headHeight: '32px',
      headCellPadding: '0 10px',
      headAlign: false,
      rowColor: ['#f9f9f9', 'white'],
      showPagination: false,
    }
    
    return(
     <div>
       Hiii
     </div>
      )
  }
}

export default App;
