import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FilterMode = () => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <Text style={{ color: "black", fontSize: 22 }}>Filter</Text>
      <Text>
        Use advanced search to explore Pokémon by type, weakness, height and
        more!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default FilterMode;
