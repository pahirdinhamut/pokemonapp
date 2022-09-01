import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBug = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 23 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.704.024a.057.057 0 0 1 .08-.014l1.775 1.243a.057.057 0 0 1 .014.08l-2.47 3.529c1.2.383 2.019.797 2.019.797s-2 3.441-5.393 3.441-5.803-3.207-5.803-3.207.855-.545 2.122-1.013l-2.71-3.23a.057.057 0 0 1 .007-.08L7.005.175a.057.057 0 0 1 .08.008l3.432 4.089c.294-.033.593-.052.895-.052.434 0 .868.033 1.291.089l3-4.286Zm.671 9.239c.905-.647 2.275-2.334 2.275-2.334s3.5 2.773 3.5 8.652c0 5.88-6.05 9.419-6.05 9.419s-2.89-2.919-3.6-6.62c-.71-3.7 1.05-7.808 1.05-7.808s1.92-.662 2.825-1.31Zm-9.75 0C5.72 8.616 4.35 6.929 4.35 6.929S.85 9.702.85 15.58C.85 21.462 6.9 25 6.9 25s2.89-2.919 3.6-6.62c.71-3.7-1.05-7.808-1.05-7.808s-1.92-.662-2.825-1.31Z"
      fill={props.fill}
    />
  </Svg>
);

export default SvgBug;
