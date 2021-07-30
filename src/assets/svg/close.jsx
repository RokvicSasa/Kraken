import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16.374} height={16.373} viewBox="0 0 16.374 16.373" {...props}>
      <g data-name="Group 1175">
        <g data-name="Group 790">
          <path
            data-name="Path 985"
            d="M14.091.76a1.076 1.076 0 011.522 0 1.076 1.076 0 010 1.522L2.39 15.505a1.077 1.077 0 01-1.522 0 1.077 1.077 0 010-1.522L14.091.761z"
            fill={props.color}
          />
        </g>
        <g data-name="Group 792">
          <path
            data-name="Path 987"
            d="M.76 2.387A1.076 1.076 0 01.763.865a1.076 1.076 0 011.521 0l13.223 13.222a1.076 1.076 0 010 1.523 1.077 1.077 0 01-1.522 0L.76 2.387z"
            fill={props.color}
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;
