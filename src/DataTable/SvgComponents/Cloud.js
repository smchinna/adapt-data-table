import React from 'react';

const CloudSvg = ({ fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 28">
        <g fill="none" fill-rule="evenodd">
            <path d="M-6-10h48v48H-6z"/>
            <path stroke={ fill } stroke-width="2" d="M27.82 11.325h-2.845l-.187-.762C23.211 4.14 17.243.075 11.067 1.181 4.877 2.291.509 8.225 1.044 14.85c.535 6.618 5.782 11.684 12.053 11.68h14.724c3.953 0 7.179-3.393 7.179-7.603s-3.226-7.602-7.18-7.602z"/>
        </g>
    </svg>
  )
}

export default CloudSvg;