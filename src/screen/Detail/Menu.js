import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { textColor } from "../../../assets/COLORS/Color";

const Menu = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 16,
    fontWeight: "700",
    textTransform: "capitalize",
  },
});
export default Menu;
