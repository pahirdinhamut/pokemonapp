import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgGrass = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.79 13.085A7.063 7.063 0 0 1 2.63 2.943C5.389.185 14.178 0 14.178 0s1.2 10.173-1.559 12.931a7.065 7.065 0 0 1-9.003.823l2.218-2.722 3.545-.765-2.894-.29 1.839-1.872 2.093-.459-1.655-.49 1.655-2.986-2.354 2.641-.91-1.283.32 2.118-1.64 1.85-.76-2.34v3.11l-2.283 2.82Z"
      fill={props.fill}
    />
  </Svg>
);

export default SvgGrass;
