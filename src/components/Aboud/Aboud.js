import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, textColor } from "../../../assets/COLORS/Color";

const Aboud = ({ pokemon }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Info}>
        {pokemon.name} can be seen napping in bright sunlight. There is a seed
        on its back. By soaking up the sun's rays, the seed grows progressively
        larger.
      </Text>
      <Text
        style={[styles.Title, { color: colors[pokemon.types[0].type.name] }]}
      >
        Pokédex Data
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginVertical: 10,
  },
  Info: {
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: 16,
    color: textColor.grey,
  },
  Title: {
    fontS: 16,
    fontWeight: "700",
  },
});
export default Aboud;
