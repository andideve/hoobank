import React from 'react';

export default function GradientRobot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="767"
      height="768"
      viewBox="0 0 767 768"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_f_1_38)">
        <path d="M124 73L298.468 644H502.608L702 73H124Z" fill="url(#paint0_linear_1_38)" />
        <path d="M124 73L298.468 644H502.608L702 73H124Z" stroke="black" />
      </g>
      <defs>
        <filter
          id="filter0_f_1_38"
          x="0.324402"
          y="-50.5"
          width="825.38"
          height="818"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="61.5" result="effect1_foregroundBlur_1_38" />
        </filter>
        <linearGradient
          id="paint0_linear_1_38"
          x1="413"
          y1="73"
          x2="413"
          y2="644"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCA5FF" stopOpacity="0" />
          <stop offset="1" stopColor="#214D76" />
        </linearGradient>
      </defs>
    </svg>
  );
}
