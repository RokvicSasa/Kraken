import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={19.92} height={19.84} viewBox="0 0 19.92 19.84" {...props}>
      <path
        data-name="Union 1"
        d="M2.457 19.84A2.461 2.461 0 010 17.384V2.457A2.461 2.461 0 012.457 0H5.1a.854.854 0 010 1.709H2.457a.752.752 0 00-.748.748v14.927a.752.752 0 00.748.748H5.1a.854.854 0 010 1.709zm7.62-5.226l-4.093-4.092-.011-.011a.851.851 0 01-.208-.338v-.006a.851.851 0 01-.039-.209v-.04-.011V9.856a.852.852 0 01.247-.556l4.1-4.1a.854.854 0 011.208 1.208L8.64 9.052h6.142a.854.854 0 110 1.709H8.64l2.645 2.645a.854.854 0 01-1.208 1.208zm7.841-3.854a.854.854 0 110-1.709h1.148a.854.854 0 010 1.709z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgComponent;
