import React from 'react';

const AnalyticsSvg = ({ fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 17">
      <g fill="none" fill-rule="evenodd">
        <path d="M-9-16h48v48H-9z"/>
        <g stroke={ fill } stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M29 1L16.91 12.875l-6.365-6.25L1 16"/>
          <path d="M21 1h8v8"/>
        </g>
      </g>
    </svg>
  )
}

export default AnalyticsSvg;