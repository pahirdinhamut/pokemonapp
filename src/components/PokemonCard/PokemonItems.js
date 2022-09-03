import { View, Text } from "react-native";
import React from "react";
import { PokeballItem, Svg6X3 } from "../icons";
import { backgroundColors } from "../../../assets/COLORS/Color";

import TypeView from "../Type/TypeView";
import { SvgUri } from "react-native-svg";
import styles from "./styles";

import Space from "../Space";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PokemonItems = ({ pokemon }) => {
  const navigation = useNavigation();
  const pokemonBackgroundColor = pokemon.types[0].type.name;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Pokemons", { pokemon: pokemon })}
      activeOpacity={0.8}
      style={[
        styles.container,
        { backgroundColor: backgroundColors[pokemonBackgroundColor] },
      ]}
    >
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.pokeNumber}>#00{pokemon.id}</Text>
          <Text style={styles.pokeName}>{pokemon.name}</Text>
        </View>
        <View style={styles.typesContainer}>
          {pokemon.types.map((item, index) => {
            return (
              <Space key={index} size={3}>
                <TypeView type={item.type.name} />
              </Space>
            );
          })}
        </View>
      </View>
      <View style={styles.item}>
        <Svg6X3 width={110} height={110} />
      </View>
      <View>
        <PokeballItem width={145} height={145} />
        <SvgUri
          uri={`${pokemon.sprites.other.dream_world.front_default}`}
          width="100%"
          height="100%"
          resizeMode={"contain"}
          style={styles.pokeImageStyle}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PokemonItems;
