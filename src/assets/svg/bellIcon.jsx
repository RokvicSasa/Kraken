import * as React from "react";

function SvgComponent(props) {
  return (
    <svg data-name="Group 796" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 22.502 24.588" {...props}>
      <g data-name="Group 772">
        <path
          data-name="Path 976"
          d="M3.583 20.069a1.083 1.083 0 01-.761-.315 1.08 1.08 0 01-.315-.761V8.745A8.745 8.745 0 0111.252 0a8.746 8.746 0 018.745 8.745v10.247a1.07 1.07 0 01-.314.761 1.07 1.07 0 01-.762.315H3.583zm1.076-2.152h13.185V8.803v-.057a6.6 6.6 0 00-6.592-6.593 6.6 6.6 0 00-6.593 6.583v9.182z"
          fill={props.color}
        />
      </g>
      <g data-name="Group 773">
        <path
          data-name="Path 977"
          d="M1.076 20.07A1.076 1.076 0 010 18.994a1.076 1.076 0 011.076-1.077h20.349a1.077 1.077 0 011.077 1.077 1.076 1.076 0 01-1.077 1.076H1.076z"
          fill={props.color}
        />
      </g>
      <g data-name="Group 774">
        <path
          data-name="Path 978"
          d="M6.735 19.946a1.076 1.076 0 011.077-1.077 1.076 1.076 0 011.077 1.077 2.491 2.491 0 002.488 2.488 2.492 2.492 0 002.489-2.488 1.076 1.076 0 011.076-1.077 1.076 1.076 0 011.077 1.077 4.643 4.643 0 01-4.642 4.642 4.642 4.642 0 01-4.642-4.642z"
          fill={props.color}
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
