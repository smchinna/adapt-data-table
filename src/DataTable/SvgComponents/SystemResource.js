import React from 'react';

const SystemResourceSvg = ({ fill }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30">
            <g fill="none" fill-rule="evenodd">
                <path d="M-9-9h48v48H-9z"/>
                <g transform="translate(1 1)">
                    <rect width="28" height="11" stroke={ fill } stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="2"/>
                    <rect width="28" height="11" y="17" stroke={ fill } stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="2"/>
                    <path stroke={ fill } stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.5 22.5"/>
                    <path fill={ fill } d="M3 3h2v2H3zM3 20h2v2H3z"/>
                </g>
            </g>
        </svg>
    )
}

export default SystemResourceSvg;