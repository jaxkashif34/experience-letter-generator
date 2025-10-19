import React from 'react';

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 95" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Head */}
    <path d="M85 58H15C11.6863 58 9 55.3137 9 52V22C9 18.6863 11.6863 16 15 16H85C88.3137 16 91 18.6863 91 22V52C91 55.3137 88.3137 58 85 58Z" fill="#E8E8E8"/>
    <path d="M50 58H15C11.6863 58 9 55.3137 9 52V22C9 18.6863 11.6863 16 15 16H50V58Z" fill="#D8D8D8"/>
    
    {/* Antenna Base */}
    <path d="M59 16H41C40.4477 16 40 15.5523 40 15V9C40 8.44772 40.4477 8 41 8H59C59.5523 8 60 8.44772 60 9V15C60 15.5523 59.5523 16 59 16Z" fill="#E8E8E8"/>
    <path d="M50 16H41C40.4477 16 40 15.5523 40 15V9C40 8.44772 40.4477 8 41 8H50V16Z" fill="#D8D8D8"/>

    {/* Antenna Top */}
    <circle cx="50" cy="4.5" r="4.5" fill="#E8E8E8"/>
    <path d="M50 9C52.4853 9 54.5 6.98528 54.5 4.5C54.5 2.01472 52.4853 0 50 0V9Z" fill="#D8D8D8"/>

    {/* Screen */}
    <rect x="15" y="24" width="70" height="26" rx="2" fill="#3B596A"/>

    {/* Eyes */}
    <circle cx="36" cy="37" r="5" fill="#2CAFAF"/>
    <circle cx="64" cy="37" r="5" fill="#2CAFAF"/>
    <circle cx="38" cy="35" r="1.5" fill="white" fillOpacity="0.8"/>
    <circle cx="66" cy="35" r="1.5" fill="white" fillOpacity="0.8"/>
    
    {/* Mouth */}
    <path d="M45 44C47.5 46.5 52.5 46.5 55 44" stroke="white" strokeWidth="2" strokeLinecap="round"/>

    {/* Body */}
    <path d="M72.934 81.3333H27.066C24.2679 81.3333 22 79.0654 22 76.2673V62H78V76.2673C78 79.0654 75.7321 81.3333 72.934 81.3333Z" fill="#E8E8E8"/>
    <path d="M50 81.3333H27.066C24.2679 81.3333 22 79.0654 22 76.2673V62H50V81.3333Z" fill="#D8D8D8"/>

    {/* Base/Wheel */}
    <path d="M68.5 95C68.5 87.5442 62.4558 81.5 55 81.5H45C37.5442 81.5 31.5 87.5442 31.5 95H68.5Z" fill="#E8E8E8"/>
    <path d="M50 95C50 87.5442 43.9558 81.5 36.5 81.5H45C37.5442 81.5 31.5 87.5442 31.5 95H50Z" fill="#D8D8D8"/>
  </svg>
);


export const PrintIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <polyline points="6 9 6 2 18 2 18 9"></polyline>
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
        <rect x="6" y="14" width="12" height="8"></rect>
    </svg>
);
