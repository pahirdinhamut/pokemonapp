import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, textColor } from "../../../assets/COLORS/Color";
import Space from "../Space";
import { Tablo, TabloTitle, WeaknessesType } from "./index";

const Aboud = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <View style={styles.Container}>
      <Text style={styles.Info}>
        {pokemon.name} can be seen napping in bright sunlight. There is a seed
        on its back. By soaking up the sun's rays, the seed grows progressively
        larger.
      </Text>
      <TabloTitle
        title={"Pokemon Data"}
        color={colors[pokemon.types[0].type.name]}
      />
      <Tablo subTitle={"species"} discription={"Seed Pokemon"} />
      <Tablo subTitle={"Height"} discription={pokemon.height + " m"} />
      <Tablo subTitle={"weight"} discription={pokemon.weight + " Kg"} />
      <Tablo
        subTitle={"Abilities"}
        discription={pokemon.abilities[0].ability.name}
      />
      <WeaknessesType pokemonType={pokemon.types[0].type.name} />
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
    lineHeight: 19,
  },
  Title: {
    fontS: 16,
    fontWeight: "700",
    marginTop: 10,
  },
  subTitle: {
    fontSize: 12,
    color: "#17171B",
  },
  discription: {
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: 14,
    color: "#747476",
  },
});
export default Aboud;
