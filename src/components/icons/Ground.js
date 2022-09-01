import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgGround = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 25 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.506 18.492a.01.01 0 0 1-.01-.013L11.88.444a.01.01 0 0 1 .01-.007h6.813a.01.01 0 0 1 .01.007L25 18.48a.01.01 0 0 1-.01.013H5.506Zm-5.496.07A.01.01 0 0 1 0 18.55L4.755 5.86a.01.01 0 0 1 .009-.006h4.13a.01.01 0 0 1 .009.013l-4.596 12.69a.01.01 0 0 1-.01.006H.01Z"
      fill={props.fill}
    />
  </Svg>
);

export default SvgGround;
