import React from "react";

const Clock: React.FC = () => {
  return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_844_2056)">
              <path
                  d="M3 8.625C3 9.95108 3.52678 11.2229 4.46447 12.1605C5.40215 13.0982 6.67392 13.625 8 13.625C9.32608 13.625 10.5979 13.0982 11.5355 12.1605C12.4732 11.2229 13 9.95108 13 8.625C13 7.29892 12.4732 6.02715 11.5355 5.08947C10.5979 4.15178 9.32608 3.625 8 3.625C6.67392 3.625 5.40215 4.15178 4.46447 5.08947C3.52678 6.02715 3 7.29892 3 8.625Z"
                  stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 6.125V8.625L9.25 9.875" stroke="black" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M3.625 2.375L1.75 4.25" stroke="black" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M14.25 4.25L12.375 2.375" stroke="black" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M4.4875 12.1875L3 13.625" stroke="black" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M11.5249 12.1687L12.9999 13.625" stroke="black" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
          </g>
          <defs>
              <clipPath id="clip0_844_2056">
                  <rect width="16" height="16" fill="white"/>
              </clipPath>
          </defs>
      </svg>

  )
};

export default Clock;
