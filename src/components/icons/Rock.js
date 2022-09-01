import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRock = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 25 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.303 9.974a.01.01 0 0 1-.002-.007L20.893.686c0-.004.004-.008.008-.008h.504c.004 0 .008.003.009.007L25 12.038a.009.009 0 0 1-.003.01l-2.644 2.064a.009.009 0 0 1-.013-.002l-3.037-4.136ZM0 16.126c0 .004.002.007.006.009l5.45 1.782a.01.01 0 0 0 .008-.002l12.182-8.41a.009.009 0 0 0 .004-.006L18.956.733a.009.009 0 0 0-.008-.01H8.158a.009.009 0 0 0-.008.003l-8.148 9.83a.009.009 0 0 0-.002.006v5.564Zm7.727 2.245 5.954 1.95.008-.001 7.09-5.085a.009.009 0 0 0 .001-.012l-2.657-3.955a.009.009 0 0 0-.012-.002L7.727 18.37Z"
      fill={props.fill}
    />
  </Svg>
);

export default SvgRock;
