import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={22.804} height={22.315} viewBox="0 0 22.804 22.315" {...props}>
      <path
        data-name="Path 1006"
        d="M20.348 4.3H2.459A2.46 2.46 0 00.002 6.757v13.1a2.461 2.461 0 002.457 2.458H20.35a2.461 2.461 0 002.456-2.457v-13.1A2.461 2.461 0 0020.348 4.3zm.748 15.558a.752.752 0 01-.748.748H2.459a.752.752 0 01-.748-.748v-13.1a.753.753 0 01.748-.749H20.35a.753.753 0 01.748.749zM5.432 1.709h10.741a.855.855 0 000-1.709H5.432a.855.855 0 000 1.709z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgComponent;
