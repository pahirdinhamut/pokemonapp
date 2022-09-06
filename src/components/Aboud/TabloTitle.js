import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, textColor } from "../../../assets/COLORS/Color";
import Space from "../Space";

const TabloTitle = ({ title, color }) => {
  return (
    <View>
      <Text style={[styles.Title, { color: color }]}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  Title: {
    fontS: 16,
    fontWeight: "700",
    marginVertical: 10,
  },
});

export default TabloTitle;
