import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNormal = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25 12.5C25 19.404 19.404 25 12.5 25S0 19.404 0 12.5 5.596 0 12.5 0 25 5.596 25 12.5Zm-5.357 0a7.143 7.143 0 1 1-14.286 0 7.143 7.143 0 0 1 14.286 0Z"
      fill={props.fill}
    />
  </Svg>
);

export default SvgNormal;
