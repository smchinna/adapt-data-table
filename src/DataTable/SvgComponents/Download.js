import React from 'react';

const Download = ({ fill }) => {
  //let useTag = `<use xlink:href="#download"/>`;
  return (
  //   <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
  //     <defs>
  //     <path id="download" d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"/>
  //     </defs>
  //     <g fill="none" fill-rule="evenodd">
  //       <mask id="downloadMask" fill="#fff" dangerouslySetInnerHTML={{__html: useTag }} />
  //       <g fill={fill || '#000'} fill-opacity=".54" mask="url(#downloadMask)">
  //         <path d="M0 0h24v24H0z"/>
  //       </g>
  //     </g>
  //  </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g fill={fill || "#000"}  fill-opacity=".54" fill-rule="evenodd">
        <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"/>
      </g>
    </svg>
  )
}

export default Download;