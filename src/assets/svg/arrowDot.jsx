import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={27.233} height={21.614} viewBox="0 0 27.233 21.614" {...props}>
      <g data-name="Group 886">
        <g data-name="Group 883">
          <g data-name="Group 881">
            <path
              data-name="Path 1013"
              d="M9.983 21.273l-9.641-9.64a1.166 1.166 0 010-1.65 1.167 1.167 0 011.651 0l9.641 9.64a1.168 1.168 0 010 1.651 1.164 1.164 0 01-.826.341 1.161 1.161 0 01-.825-.341z"
              fill={props.color}
            />
          </g>
          <g data-name="Group 882">
            <path
              data-name="Path 1014"
              d="M.342 11.633a1.166 1.166 0 010-1.65L9.983.343a1.168 1.168 0 011.651 0 1.167 1.167 0 010 1.65l-9.641 9.641a1.164 1.164 0 01-.826.342 1.16 1.16 0 01-.825-.342z"
              fill={props.color}
            />
          </g>
        </g>
        <g data-name="Group 884">
          <path
            data-name="Path 1015"
            d="M24.208 11.975a1.167 1.167 0 01-1.167-1.167 1.167 1.167 0 011.167-1.167h1.857a1.168 1.168 0 011.168 1.167 1.168 1.168 0 01-1.168 1.167h-1.857z"
            fill={props.color}
          />
        </g>
        <g data-name="Group 885">
          <path
            data-name="Path 1016"
            d="M3.652 11.975a1.166 1.166 0 01-1.167-1.167 1.166 1.166 0 011.167-1.167h14.54a1.167 1.167 0 011.167 1.167 1.167 1.167 0 01-1.167 1.167H3.652z"
            fill={props.color}
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;
