import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Light = (props) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.636 6.982c-.019.401 0 .807-.063 1.208-.02.131-.03.26.093.372.87.79 1.268 1.818 1.461 2.945.177 1.026.118 2.05-.222 3.024-.405 1.163-1.024 2.204-2.127 2.863-.127.077-.163.155-.15.302.024.297.01.597-.04.892-.094.617.278 1.04.681 1.42a4.543 4.543 0 0 0 2.544 1.206c.88.12 1.682-.107 2.407-.61.215-.15.475-.265.451-.602-.006-.081.078-.131.155-.153.26-.073.234-.213.155-.432-.312-.87-.33-1.776-.264-2.687.025-.452.11-.9.255-1.329a2.9 2.9 0 0 1 .808-1.246c.302-.27.654-.412 1.038-.276.4.141.558.5.63.903.18 1.027-.132 1.973-.51 2.895-.258.631-.499 1.277-.888 1.848a3.756 3.756 0 0 1-.245.32c-.063.073-.089.139-.047.235.13.298.02.545-.183.764-.08.085-.168.16-.16.293.022.407-.163.753-.357 1.084a15.7 15.7 0 0 1-.719 1.08 2.878 2.878 0 0 1-.867.797c-.693.423-1.406.786-2.193 1.023-1.924.579-3.814.41-5.723-.09-1.365-.357-2.557-1-3.637-1.883-.368-.3-.705-.632-.948-1.045-.11-.187-.22-.197-.426-.11-1.197.507-2.32-.266-2.26-1.535a.755.755 0 0 1 .088-.332c.08-.137.057-.254.003-.384-.204-.494-.175-.96.183-1.379.1-.117.046-.187-.043-.264a.284.284 0 0 0-.244-.055c-.924.14-1.553-.662-1.64-1.428-.058-.512-.01-1.006.376-1.404a.329.329 0 0 0 .079-.241c.011-.417.134-.824.355-1.178.1-.17.045-.225-.108-.297-.598-.283-1.147-.63-1.54-1.188-.463-.66-.715-1.38-.685-2.19a.779.779 0 0 0-.124-.491c-.606-.907-.735-1.92-.668-2.982a6.08 6.08 0 0 1 .474-2.01c.089-.21.02-.277-.187-.332-.39-.107-.775-.233-1.152-.38A1.48 1.48 0 0 1 .5 2.563c.002-.678.92-1.557 1.778-1.088.611.334 1.148.78 1.755 1.12.184.102.294.094.458-.03.6-.451 1.187-.922 1.865-1.263.453-.227.937-.348 1.415-.5C8.917.438 10.093.511 11.266.538c.383.01.74.155 1.09.28.991.356 1.945.806 2.773 1.467.781.624 1.457 1.36 1.867 2.285.338.764.67 1.543.64 2.412Z"
      fill={props.fill}
    />
  </Svg>
);

export default Light;