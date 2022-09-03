import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgCircle = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 75 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Defs>
      <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="50%">
        <Stop
          offset="0%"
          stopColor="rgba(255, 255, 255, 0.3)"
          stopOpacity="0"
        />
        <Stop
          offset="100%"
          stopColor="rgba(255, 255, 255, 0)"
          stopOpacity="0.4"
        />
      </LinearGradient>
    </Defs>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M37.5 75C58.21 75 75 58.21 75 37.5S58.21 0 37.5 0 0 16.79 0 37.5 16.79 75 37.5 75Zm0-3C56.554 72 72 56.554 72 37.5 72 18.446 56.554 3 37.5 3 18.446 3 3 18.446 3 37.5 3 56.554 18.446 72 37.5 72Z"
      fill="url(#grad)"
    />
  </Svg>
);

export default SvgCircle;
