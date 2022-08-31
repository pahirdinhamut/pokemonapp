import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GenerationMode = () => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <Text
        style={{
          color: "black",
          fontSize: 28,
          lineHeight: 30,
          fontWeight: "700",
        }}
      >
        Generation
      </Text>
      <Text>
        Use advanced search to explore Pokémon by type, weakness, height and
        more!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default GenerationMode;
