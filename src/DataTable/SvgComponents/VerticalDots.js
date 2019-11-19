import React from 'react';

const VerticalDots = ({ fill }) => {
  //let useTag = `<use xlink:href="#vertical"/>`;
  return (
    // <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
    //   <defs>
    //     <path id="vertical" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    //   </defs>
    //   <g fill="none" fill-rule="evenodd">
    //     <mask id="verticalDots" fill="#fff" dangerouslySetInnerHTML={{__html: useTag }}/>
    //     <g fill={fill} fill-opacity=".54" mask="url(#verticalDots)">
    //       <path d="M0 0h24v24H0z"/>
    //     </g>
    //   </g>
    // </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g fill={fill || "#000"}  fill-opacity=".54" fill-rule="evenodd">
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </g>
    </svg>
  )
}

export default VerticalDots;