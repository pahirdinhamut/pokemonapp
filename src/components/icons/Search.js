import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSearch = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.188 11.623a6.421 6.421 0 1 1 1.436-1.435c.1.05.195.117.279.201l3.784 3.784a1.07 1.07 0 1 1-1.514 1.513l-3.784-3.783a1.065 1.065 0 0 1-.201-.28Zm.514-5.201a4.28 4.28 0 1 1-8.561 0 4.28 4.28 0 0 1 8.562 0Z"
      fill="#747476"
    />
  </Svg>
);

export default SvgSearch;
