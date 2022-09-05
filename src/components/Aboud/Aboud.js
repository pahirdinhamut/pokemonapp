import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, textColor } from "../../../assets/COLORS/Color";
import Space from "../Space";

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
      {/* Data */}
      <View style={{ marginVertical: 5 }}>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Text style={styles.discription}>Species</Text>
          <Space size={30} />
          <Text>Seed Pokémon</Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Text style={styles.discription}>Height</Text>
          <Space size={35} />
          <Text>{pokemon.height / 10}m</Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Text style={styles.discription}>weight</Text>
          <Space size={35} />
          <Text>{pokemon.weight / 10}Kg</Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Text style={styles.discription}>Abilities</Text>
          <Space size={30} />
          <Text>{pokemon.abilities[0].ability.name}</Text>
        </View>
      </View>
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
    marginTop: 10,
  },
  discription: {
    fontSize: 12,
  },
});
export default Aboud;
