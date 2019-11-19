import React from 'react';

const DataCenterSvg = ({ fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 37 30">
        <g fill="none" fill-rule="evenodd">
            <path d="M-6-9h48v48H-6z"/>
            <g stroke={ fill } stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M36 15H1M7.037 2.942L1 15v10.5A3.5 3.5 0 0 0 4.5 29h28a3.5 3.5 0 0 0 3.5-3.5V15L29.962 2.942A3.5 3.5 0 0 0 26.83 1H10.17a3.5 3.5 0 0 0-3.133 1.942zM15 22"/>
            </g>
        </g>
    </svg>
  )
}

export default DataCenterSvg;