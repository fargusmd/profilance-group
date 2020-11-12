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
      d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM9.36164 5.63867C10.0443 5.6076 10.2625 5.6 12.0006 5.6H11.9986C13.7373 5.6 13.9546 5.6076 14.6373 5.63867C15.3186 5.66987 15.784 5.77774 16.192 5.936C16.6133 6.09934 16.9693 6.31801 17.3253 6.67401C17.6813 7.02975 17.9 7.38682 18.064 7.80776C18.2213 8.21469 18.3293 8.67977 18.3613 9.36111C18.392 10.0438 18.4 10.2619 18.4 12.0001C18.4 13.7382 18.392 13.9558 18.3613 14.6385C18.3293 15.3196 18.2213 15.7848 18.064 16.1918C17.9 16.6126 17.6813 16.9697 17.3253 17.3255C16.9697 17.6815 16.6132 17.9007 16.1924 18.0641C15.7852 18.2224 15.3196 18.3303 14.6382 18.3615C13.9556 18.3925 13.7381 18.4001 11.9998 18.4001C10.2618 18.4001 10.0438 18.3925 9.36111 18.3615C8.6799 18.3303 8.2147 18.2224 7.8075 18.0641C7.38682 17.9007 7.02975 17.6815 6.67415 17.3255C6.31828 16.9697 6.09961 16.6126 5.93601 16.1917C5.77787 15.7848 5.67001 15.3197 5.63867 14.6384C5.60774 13.9557 5.60001 13.7382 5.60001 12.0001C5.60001 10.2619 5.60801 10.0436 5.63854 9.36097C5.66921 8.6799 5.77721 8.21469 5.93588 7.80762C6.09988 7.38682 6.31855 7.02975 6.67455 6.67401C7.03029 6.31814 7.38736 6.09947 7.8083 5.936C8.21523 5.77774 8.6803 5.66987 9.36164 5.63867Z"
      // fill="#F1F4F6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.4265 6.75355C11.5379 6.75338 11.6579 6.75343 11.7873 6.75349L12.0006 6.75355C13.7094 6.75355 13.912 6.75969 14.5868 6.79035C15.2108 6.81889 15.5494 6.92315 15.775 7.01076C16.0737 7.12676 16.2866 7.26543 16.5105 7.48943C16.7345 7.71343 16.8732 7.92677 16.9894 8.22544C17.0771 8.45077 17.1815 8.78944 17.2099 9.41345C17.2405 10.0881 17.2472 10.2908 17.2472 11.9988C17.2472 13.7068 17.2405 13.9095 17.2099 14.5842C17.1813 15.2082 17.0771 15.5468 16.9894 15.7722C16.8734 16.0708 16.7345 16.2835 16.5105 16.5074C16.2865 16.7314 16.0738 16.8701 15.775 16.9861C15.5497 17.0741 15.2108 17.1781 14.5868 17.2066C13.9121 17.2373 13.7094 17.2439 12.0006 17.2439C10.2916 17.2439 10.0891 17.2373 9.41444 17.2066C8.79043 17.1778 8.45176 17.0735 8.22602 16.9859C7.92735 16.8699 7.71402 16.7313 7.49002 16.5073C7.26601 16.2833 7.12735 16.0704 7.01108 15.7716C6.92348 15.5463 6.81908 15.2076 6.79068 14.5836C6.76001 13.909 6.75388 13.7063 6.75388 11.9972C6.75388 10.2881 6.76001 10.0865 6.79068 9.41185C6.81921 8.78784 6.92348 8.44917 7.01108 8.22357C7.12708 7.9249 7.26601 7.71156 7.49002 7.48756C7.71402 7.26356 7.92735 7.12489 8.22602 7.00862C8.45163 6.92062 8.79043 6.81662 9.41444 6.78795C10.0048 6.76129 10.2336 6.75329 11.4265 6.75195V6.75355ZM15.4169 7.81623C14.9929 7.81623 14.6489 8.15984 14.6489 8.58397C14.6489 9.00798 14.9929 9.35198 15.4169 9.35198C15.8409 9.35198 16.1849 9.00798 16.1849 8.58397C16.1849 8.15997 15.8409 7.81597 15.4169 7.81597V7.81623ZM8.7139 12.0003C8.7139 10.1853 10.1854 8.71369 12.0005 8.71362C13.8156 8.71362 15.2868 10.1852 15.2868 12.0003C15.2868 13.8154 13.8157 15.2864 12.0006 15.2864C10.1855 15.2864 8.7139 13.8154 8.7139 12.0003Z"
      // fill="#F1F4F6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0006 9.8667C13.1787 9.8667 14.134 10.8218 14.134 12.0001C14.134 13.1782 13.1787 14.1334 12.0006 14.1334C10.8223 14.1334 9.86725 13.1782 9.86725 12.0001C9.86725 10.8218 10.8223 9.8667 12.0006 9.8667V9.8667Z"
      // fill="#F1F4F6"
    />
  </svg>
);

export default SVG;