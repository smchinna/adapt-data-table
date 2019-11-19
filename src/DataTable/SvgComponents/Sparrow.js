import React from 'react';

const SparrowSvg = ({ fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88">
      <g fill="none" fill-rule="evenodd">
        <circle cx="44" cy="44" r="44" fill="#EEE" />
        <g transform="translate(11 15)">
          <path fill="#FFF" d="M33 1h2v6h-2z" />
          <ellipse cx="33.5" cy="31.5" fill="#FFF" rx="31.5" ry="25.5" />
          <rect width="48" height="17" x="10" y="21" fill="#000" rx="8.5" />
          <circle cx="22" cy="29" r="3" fill="#046BFC" />
          <circle cx="46" cy="29" r="3" fill="#046BFC" />
          <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M27 44c3.111 2.667 5.444 4 7 4s3.889-1.333 7-4" />
          <rect width="4" height="8" x="63" y="26" fill="#D8D8D8" rx="2" />
          <rect width="2" height="4" x="33" y="-1" fill="#D8D8D8" rx="1" transform="rotate(90 34 1)" />
          <rect width="4" height="8" y="26" fill="#D8D8D8" rx="2" />
        </g>
      </g>
    </svg>
  )
}

export default SparrowSvg; 


