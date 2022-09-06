import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { textColor } from "../../../assets/COLORS/Color";
import { typesCategory, WeaknessesType } from "../Filter/typesCategory";
const GenerationMode = () => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <Text
        style={{
          color: "black",
          fontSize: 28,
          lineHeight: 30,
          fontWeight: "700",
          marginVertical: 5,
        }}
      >
        Generation
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "400", color: textColor.grey }}>
        Use advanced search to explore Pokémon by type, weakness, height and
        more!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default GenerationMode;
