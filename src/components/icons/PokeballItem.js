import * as React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

const SvgPokeballItem = (props) => (
  <Svg
    width="50"
    height="50"
    viewBox="0 0 75 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Defs>
      <LinearGradient id="grad" x1="0%" y1="100%" x2="30%" y2="0%">
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
      d="M37.5 0C56.798 0 72.717 14.361 75 32.903H56.697c-2.084-8.605-9.888-15-19.197-15-9.31 0-17.113 6.395-19.197 15H0C2.283 14.361 18.202 0 37.5 0ZM56.697 42.097H75C72.717 60.639 56.798 75 37.5 75S2.283 60.639 0 42.097h18.303c2.084 8.605 9.888 15 19.197 15 9.31 0 17.114-6.395 19.197-15Z"
      fill="url(#grad)"
    />
    <Path
      d="M37.5 49.839c6.865 0 12.431-5.524 12.431-12.339 0-6.814-5.566-12.339-12.431-12.339-6.866 0-12.431 5.524-12.431 12.339S30.635 49.839 37.5 49.839Z"
      fill="url(#grad)"
    />
  </Svg>
);

export default SvgPokeballItem;
