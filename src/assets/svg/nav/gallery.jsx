import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={23.765} height={22.231} viewBox="0 0 23.765 22.231" {...props}>
      <path
        data-name="Path 1007"
        d="M16.881 12.254a.855.855 0 00-.855.854 4.285 4.285 0 01-.049.651 4.241 4.241 0 11-1.393-3.836.855.855 0 001.128-1.284 5.956 5.956 0 102.024 4.47.855.855 0 00-.855-.855zM4.133 6.381A1.049 1.049 0 105.182 7.43a1.049 1.049 0 00-1.05-1.048zm17.176-2.908h-.351V2.457A2.461 2.461 0 0018.497 0h-2.382a2.461 2.461 0 00-2.457 2.457v1.016H2.457A2.461 2.461 0 000 5.93v13.845a2.46 2.46 0 002.457 2.456h18.852a2.46 2.46 0 002.457-2.456V5.93a2.461 2.461 0 00-2.457-2.456zm-5.937-1.016a.751.751 0 01.748-.748h2.377a.751.751 0 01.748.748v1.016h-3.877zm6.685 17.318a.752.752 0 01-.748.748H2.457a.752.752 0 01-.748-.748V5.93a.753.753 0 01.748-.748h18.852a.753.753 0 01.748.748z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgComponent;