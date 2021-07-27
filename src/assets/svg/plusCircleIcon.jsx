import * as React from "react";

function SvgComponent(props) {
  return (
    <svg data-name="Group 880" xmlns="http://www.w3.org/2000/svg" width={24.218} height={24.218} viewBox="0 0 24.218 24.218" {...props}>
      <g data-name="Group 778">
        <g data-name="Group 776">
          <path
            data-name="Path 979"
            d="M8.006 13.186a1.077 1.077 0 01-1.077-1.076 1.076 1.076 0 011.077-1.076h8.207a1.076 1.076 0 011.076 1.076 1.077 1.077 0 01-1.076 1.076H8.006z"
            fill={props.color}
          />
        </g>
        <g data-name="Group 777">
          <path
            data-name="Path 980"
            d="M11.033 16.212V8.005a1.076 1.076 0 011.076-1.077 1.077 1.077 0 011.077 1.077v8.207a1.077 1.077 0 01-1.077 1.076 1.076 1.076 0 01-1.076-1.076z"
            fill={props.color}
          />
        </g>
      </g>
      <g data-name="Group 779">
        <path
          data-name="Path 981"
          d="M0 12.109A12.11 12.11 0 0112.109 0a12.109 12.109 0 0112.108 12.109 12.109 12.109 0 01-12.108 12.109A12.11 12.11 0 010 12.109zm5.069-7.041a9.922 9.922 0 00-2.916 7.041 9.922 9.922 0 002.916 7.04 9.926 9.926 0 007.041 2.916 9.922 9.922 0 007.04-2.916 9.92 9.92 0 002.916-7.04 9.921 9.921 0 00-2.916-7.041 9.918 9.918 0 00-7.04-2.916 9.921 9.921 0 00-7.041 2.916z"
          fill={props.color}
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
