import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SvgUri } from "react-native-svg";
import { colors, textColor } from "../../../assets/COLORS/Color";
import { EvoPokeBall } from "../icons";
import { AntDesign } from "@expo/vector-icons";

const Evolution = ({ pokemon }) => {
  const evo = [1, 2, 3];
  const [pokemonEvolution, setPokemonEvolution] = useState([]);
  const evoImage = [];

  useEffect(() => {
    const getEvolutions = async () => {
      evo.map(async (id) => {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );
          const json = response.data;
          setPokemonEvolution((prev) => [
            ...prev,
            json.sprites.other.dream_world,
          ]);
        } catch (error) {
          console.error(error);
        }
      });
    };
    getEvolutions();
  }, []);

  function test() {
    pokemonEvolution.forEach((item) => {
      return evoImage.push(item.front_default);
    });
  }

  test();
  console.log(evoImage[0]);

  return (
    <View style={styles.Container}>
      {/* Title  */}
      <View style={styles.TitleContainer}>
        <Text
          style={[
            styles.TitleContainerText,
            { color: colors[pokemon.types[0].type.name] },
          ]}
        >
          Evolution
        </Text>
      </View>

      {/* Evolution List   */}

      <View style={styles.EvolutionListContainer}>
        <View style={styles.EvoItem}>
          <EvoPokeBall />
          <SvgUri
            uri={`${evoImage[0]}`}
            width="75"
            height="75"
            style={styles.pokeImageStyle}
          />
          <Text style={styles.pokemonId}>#001</Text>
          <Text>Bulbasaur</Text>
        </View>
        <View style={styles.EvoLevelContainer}>
          <AntDesign name="arrowright" size={24} color={"#747476"} />
          <Text style={{ fontWeight: "500" }}>(Level.16)</Text>
        </View>
        <View style={styles.EvoItem}>
          <EvoPokeBall />
          <SvgUri
            uri={`${evoImage[1]}`}
            width="75"
            height="75"
            style={styles.pokeImageStyle}
          />

          <Text style={styles.pokemonId}>#002</Text>
          <Text>text</Text>
        </View>
      </View>
      <View style={styles.EvolutionListContainer}>
        <View style={styles.EvoItem}>
          <EvoPokeBall />
          <SvgUri
            uri={`${evoImage[1]}`}
            width="75"
            height="75"
            style={styles.pokeImageStyle}
          />
          <Text style={styles.pokemonId}>#001</Text>
          <Text>Bulbasaur</Text>
        </View>
        <View style={styles.EvoLevelContainer}>
          <AntDesign name="arrowright" size={24} color={"#747476"} />
          <Text style={{ fontWeight: "500" }}>(Level.32)</Text>
        </View>
        <View style={styles.EvoItem}>
          <EvoPokeBall />
          <SvgUri
            uri={`${evoImage[2]}`}
            width="75"
            height="75"
            style={styles.pokeImageStyle}
          />

          <Text style={styles.pokemonId}>#002</Text>
          <Text>text</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 20,
  },

  TitleContainer: {
    marginVertical: 30,
  },
  TitleContainerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  EvolutionListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  pokeImageStyle: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 0,
    bottom: 0,
  },
  EvoItem: {
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  EvoLevelContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  pokemonId: {
    color: textColor.grey,
    fontSize: 12,
    fontWeight: "500",
  },
});
export default Evolution;
