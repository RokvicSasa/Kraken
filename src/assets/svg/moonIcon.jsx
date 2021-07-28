import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 77.276 76.853" {...props}>
      <defs>
        <clipPath id="prefix__a">
          <path data-name="Path 1237" d="M0-76.853h77.276V0H0z" fill={props.color} />
        </clipPath>
      </defs>
      <g data-name="Group 1171">
        <g data-name="Group 1170" clipPath="url(#prefix__a)" transform="translate(0 76.853)">
          <g data-name="Group 1169">
            <path
              data-name="Path 1236"
              d="M0-39.207a39.035 39.035 0 0128.9-37.509 4 4 0 014.419 1.731 4 4 0 01-.344 4.736 25.776 25.776 0 00-6.23 16.73 25.961 25.961 0 0025.8 26.048l-.02 4-.019 4a33.923 33.923 0 01-33.758-34.086 33.846 33.846 0 011.633-10.26A30.963 30.963 0 008-39.169a31.066 31.066 0 0030.876 31.17 30.99 30.99 0 0025.876-13.687 33.833 33.833 0 01-12.242 2.215l.019-4 .02-4a25.807 25.807 0 0017.972-7.125 4 4 0 016.668 3.734A39.032 39.032 0 0138.836 0 39.024 39.024 0 010-39.207"
              fill={props.color}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;
