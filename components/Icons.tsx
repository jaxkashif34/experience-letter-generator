import React from "react";

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 100 95"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Head */}
    <path
      d="M85 58H15C11.6863 58 9 55.3137 9 52V22C9 18.6863 11.6863 16 15 16H85C88.3137 16 91 18.6863 91 22V52C91 55.3137 88.3137 58 85 58Z"
      fill="#E8E8E8"
    />
    <path
      d="M50 58H15C11.6863 58 9 55.3137 9 52V22C9 18.6863 11.6863 16 15 16H50V58Z"
      fill="#D8D8D8"
    />

    {/* Antenna Base */}
    <path
      d="M59 16H41C40.4477 16 40 15.5523 40 15V9C40 8.44772 40.4477 8 41 8H59C59.5523 8 60 8.44772 60 9V15C60 15.5523 59.5523 16 59 16Z"
      fill="#E8E8E8"
    />
    <path
      d="M50 16H41C40.4477 16 40 15.5523 40 15V9C40 8.44772 40.4477 8 41 8H50V16Z"
      fill="#D8D8D8"
    />

    {/* Antenna Top */}
    <circle cx="50" cy="4.5" r="4.5" fill="#E8E8E8" />
    <path
      d="M50 9C52.4853 9 54.5 6.98528 54.5 4.5C54.5 2.01472 52.4853 0 50 0V9Z"
      fill="#D8D8D8"
    />

    {/* Screen */}
    <rect x="15" y="24" width="70" height="26" rx="2" fill="#3B596A" />

    {/* Eyes */}
    <circle cx="36" cy="37" r="5" fill="#2CAFAF" />
    <circle cx="64" cy="37" r="5" fill="#2CAFAF" />
    <circle cx="38" cy="35" r="1.5" fill="white" fillOpacity="0.8" />
    <circle cx="66" cy="35" r="1.5" fill="white" fillOpacity="0.8" />

    {/* Mouth */}
    <path
      d="M45 44C47.5 46.5 52.5 46.5 55 44"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Body */}
    <path
      d="M72.934 81.3333H27.066C24.2679 81.3333 22 79.0654 22 76.2673V62H78V76.2673C78 79.0654 75.7321 81.3333 72.934 81.3333Z"
      fill="#E8E8E8"
    />
    <path
      d="M50 81.3333H27.066C24.2679 81.3333 22 79.0654 22 76.2673V62H50V81.3333Z"
      fill="#D8D8D8"
    />

    {/* Base/Wheel */}
    <path
      d="M68.5 95C68.5 87.5442 62.4558 81.5 55 81.5H45C37.5442 81.5 31.5 87.5442 31.5 95H68.5Z"
      fill="#E8E8E8"
    />
    <path
      d="M50 95C50 87.5442 43.9558 81.5 36.5 81.5H45C37.5442 81.5 31.5 87.5442 31.5 95H50Z"
      fill="#D8D8D8"
    />
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

export const BoldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
    <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
  </svg>
);

export const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
