import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={15.899} height={9.364} viewBox="0 0 15.899 9.364" {...props}>
      <g data-name="Group 1172" fill="none" stroke={props.color} strokeLinecap="round" strokeWidth={2}>
        <path data-name="Line 137" d="M14.485 1.414L7.95 7.949" />
        <path data-name="Line 138" d="M7.95 7.95L1.415 1.415" />
      </g>
    </svg>
  );
}

export default SvgComponent;
