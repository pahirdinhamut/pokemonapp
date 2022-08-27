import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSort = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 21 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m4.589 4.367-.276-.285v10.836l.276-.285a.955.955 0 1 1 1.352 1.352l-1.904 1.904a.952.952 0 0 1-.315.2.895.895 0 0 1-.723 0 .952.952 0 0 1-.315-.2L.78 15.985a.956.956 0 0 1 1.352-1.352l.276.285V4.082l-.276.285A.956.956 0 0 1 .78 3.015l1.904-1.904A.952.952 0 0 1 3 .91a.895.895 0 0 1 .723 0 .952.952 0 0 1 .315.2L5.94 3.015a.956.956 0 1 1-1.352 1.352ZM11.026 14.309h8.522a.952.952 0 0 1 0 1.904h-8.522a.952.952 0 1 1 0-1.904ZM11.026 8.309h6.522a.952.952 0 0 1 0 1.904h-6.522a.952.952 0 0 1 0-1.904ZM11.026 2.309h4.522a.952.952 0 0 1 0 1.904h-4.522a.952.952 0 0 1 0-1.904Z"
      fill="#17171B"
    />
  </Svg>
);

export default SvgSort;
