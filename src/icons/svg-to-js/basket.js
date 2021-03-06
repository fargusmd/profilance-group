import React from 'react';

const SVG = ({
  style = {},
  fill = 'white',
  width = '100%',
  className = '',
  viewBox = '0 0 24 24',
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 8.5C22 7.39 21.11 6.5 20 6.5H16V4.5C16 3.39 15.11 2.5 14 2.5H10C8.89 2.5 8 3.39 8 4.5V6.5H4C2.89 6.5 2.01 7.39 2.01 8.5L2 19.5C2 20.61 2.89 21.5 4 21.5H20C21.11 21.5 22 20.61 22 19.5V8.5ZM14 6.5V4.5H10V6.5H14ZM4 9.5V18.5C4 19.05 4.45 19.5 5 19.5H19C19.55 19.5 20 19.05 20 18.5V9.5C20 8.95 19.55 8.5 19 8.5H5C4.45 8.5 4 8.95 4 9.5Z"
      // fill={fill}
    />
  </svg>
);

export default SVG;
