import React from 'react';

export default function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.4696 23.7122C29.0552 24.1138 28.8648 24.6946 28.9592 25.2642L30.3816 33.1362C30.5016 33.8034 30.22 34.4786 29.6616 34.8642C29.1144 35.2642 28.3864 35.3122 27.7896 34.9922L20.7032 31.2962C20.4568 31.165 20.1832 31.0946 19.9032 31.0866H19.4696C19.3192 31.109 19.172 31.157 19.0376 31.2306L11.9496 34.9442C11.5992 35.1202 11.2024 35.1826 10.8136 35.1202C9.86639 34.941 9.23439 34.0386 9.38959 33.0866L10.8136 25.2146C10.908 24.6402 10.7176 24.0562 10.3032 23.6482L4.52559 18.0482C4.04239 17.5794 3.87439 16.8754 4.09519 16.2402C4.30959 15.6066 4.85679 15.1442 5.51759 15.0402L13.4696 13.8866C14.0744 13.8242 14.6056 13.4562 14.8776 12.9122L18.3816 5.72823C18.4648 5.56823 18.572 5.42103 18.7016 5.29623L18.8456 5.18423C18.9208 5.10103 19.0072 5.03223 19.1032 4.97623L19.2776 4.91223L19.5496 4.80023H20.2232C20.8248 4.86263 21.3544 5.22263 21.6312 5.76023L25.1816 12.9122C25.4376 13.4354 25.9352 13.7986 26.5096 13.8866L34.4616 15.0402C35.1336 15.1362 35.6952 15.6002 35.9176 16.2402C36.1272 16.8818 35.9464 17.5858 35.4536 18.0482L29.4696 23.7122Z"
        fill="currentColor"
      />
    </svg>
  );
}
