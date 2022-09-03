import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, {
  Text as Texta,
  Defs,
  Stop,
  LinearGradient,
} from "react-native-svg";
import { height, width } from "../../../assets/Size/Size";
import { colors, backgroundColors } from "../../../assets/COLORS/Color";

const PokemonName = ({ pokemon }) => {
  return (
    <Svg height={height / 12} width={width} style={{ opacity: 0.7 }}>
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="100%" x2="0%" y2="50%">
          <Stop
            offset="30%"
            stopColor={backgroundColors[pokemon.types[0].type.name]}
            stopOpacity="0"
          />
          <Stop
            offset="60%"
            stopColor="rgba(255, 255, 255, 0)"
            stopOpacity="0.2"
          />
        </LinearGradient>
      </Defs>
      <Texta
        fill="url(#grad)"
        stroke={"rgba(139, 190, 138,0.3)"}
        fontSize="90"
        fontWeight="700"
        x="190"
        y="75"
        textAnchor="middle"
      >
        {pokemon.name}
      </Texta>
    </Svg>
  );
};

export default PokemonName;

const styles = StyleSheet.create({});
