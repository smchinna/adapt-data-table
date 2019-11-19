
import React from 'react';

const Filter = ({ fill }) => {
  let useTag = `<use xlink:href="#filter"/>`;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <path id="filter" d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <mask id="filterMask" fill="#fff" dangerouslySetInnerHTML={{__html: useTag }} />
        <g fill={fill} fill-opacity=".54" mask="url(#filterMask)">
          <path d="M0 0h24v24H0z"/>
        </g>
      </g>
   </svg>
  )
}

export default Filter;