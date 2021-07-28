import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" {...props}>
      <g data-name="Group 687" transform="translate(-25 -966)">
        <circle data-name="Ellipse 37" cx={16} cy={16} r={16} transform="translate(25 966)" fill={props.color} />
        <g data-name="Group 686">
          <g data-name="Group 684">
            <path
              data-name="Path 887"
              d="M36.156 983.497a1.156 1.156 0 01-1.157-1.156 1.156 1.156 0 011.157-1.156h10.37a1.156 1.156 0 011.157 1.156 1.156 1.156 0 01-1.157 1.156h-10.37z"
              fill={props.color2}
            />
          </g>
          <g data-name="Group 685">
            <path
              data-name="Path 888"
              d="M40.185 987.527v-10.37A1.157 1.157 0 0141.341 976a1.157 1.157 0 011.157 1.157v10.37a1.157 1.157 0 01-1.157 1.156 1.157 1.157 0 01-1.156-1.156z"
              fill={props.color2}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;
