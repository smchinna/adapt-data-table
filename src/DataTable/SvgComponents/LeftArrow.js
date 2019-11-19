
import React from 'react';

const LeftArrow = ({ fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" viewBox="0 0 16 16">
      <g fill={fill || "#000"} fill-rule="evenodd">
        <path id="a" d="M5 8l5-5 .707.707L6.414 8l4.293 4.293L10 13z"/>
      </g>
    </svg>
  )
}

export default LeftArrow;


