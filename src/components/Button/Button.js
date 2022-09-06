import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { textColor } from "../../../assets/COLORS/Color";
import { height, width } from "../../../assets/Size/Size";

const Button = ({ color = "#ea5d60", title, titleColor = "black" }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.BottunConrainer, { backgroundColor: color }]}
    >
      <Text style={[styles.BottunText, { color: titleColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  BottunConrainer: {
    height: 60,
    width: width - 40,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 10,
  },
  BottunText: {
    color: textColor.white,
    fontSize: 16,
    fontWeight: "400",
    textTransform: "capitalize",
  },
});
export default Button;
