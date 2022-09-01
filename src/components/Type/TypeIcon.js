import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { textColor } from "../../../assets/COLORS/Color";
import {
  Grass,
  Fire,
  Poison,
  Dark,
  Bug,
  Dragon,
  Electric,
  Fairy,
  Fighting,
  Flying,
  Ghost,
  Ground,
  Normal,
  Psychic,
  Rock,
  Steel,
  Water,
  Ice,
} from "../icons";

const TypeIcon = ({ children, onPress, name, style, width, height, color }) => {
  let RenderIcon;
  switch (name) {
    case "grass":
      RenderIcon = Grass;
      break;
    case "psychic":
      RenderIcon = Psychic;
      break;
    case "rock":
      RenderIcon = Rock;
      break;
    case "steel":
      RenderIcon = Steel;
      break;
    case "water":
      RenderIcon = Water;
      break;
    case "ice":
      RenderIcon = Ice;
      break;
    case "fire":
      RenderIcon = Fire;
      break;
    case "poison":
      RenderIcon = Poison;
      break;
    case "bug":
      RenderIcon = Bug;
      break;
    case "dragon":
      RenderIcon = Dragon;
      break;
    case "electric":
      RenderIcon = Electric;
      break;
    case "fairy":
      RenderIcon = Fairy;
      break;
    case "fighting":
      RenderIcon = Fighting;
      break;
    case "flying":
      RenderIcon = Flying;
      break;
    case "ghost":
      RenderIcon = Ghost;
      break;
    case "ground":
      RenderIcon = Ground;
      break;
    case "normal":
      RenderIcon = Normal;
      break;
    case "ice":
      RenderIcon = Ice;
      break;
    default:
      RenderIcon = Dark;
  }
  return (
    <TouchableOpacity style={{ ...styles.icon, ...style }} onPress={onPress}>
      {name ? (
        <RenderIcon height={height} width={width} fill={color} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default TypeIcon;

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 3,
  },
});
