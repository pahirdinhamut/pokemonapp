import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getAllPokemon, getPokemon } from "../../api/pokemon";
import Space from "../../components/Space";
import menuItem from "./menuItem";
import { SvgUri } from "react-native-svg";
import {
  colors,
  backgroundColors,
  textColor,
} from "../../../assets/COLORS/Color";
import { height, width } from "../../../assets/Size/Size";
import PokemonName from "./PokemonName";
import { Back, Circle, PokeballItem } from "../../components/icons";
import TypeView from "../../components/Type/TypeView";
import Svg10X5 from "../../components/icons/10X5";
import Menu from "./Menu";

const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const pokemon = route.params.pokemon;
  const [SelectNemu, setSelectMenu] = useState(false);

  const SelectMode = (value) => {
    switch (value) {
      case "generation":
        setSelectionMode("generation");
        setSelectMenu(true);
        break;
      case "sort":
        setSelectionMode("sort");
        setSelectMenu(true);

        break;
      case "filter":
        setSelectionMode("filter");
        setSelectMenu(true);
        break;
    }
  };

  return (
    <View style={styles.Container}>
      <View
        style={{
          backgroundColor: backgroundColors[pokemon.types[0].type.name],
          paddingVertical: 45,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back width={20} height={20} fill={"white"} />
        </TouchableOpacity>
        <PokemonName pokemon={pokemon} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Circle width={125} height={125} style={styles.Circle} />
          <SvgUri
            uri={`${pokemon.sprites.other.dream_world.front_default}`}
            height={125}
            width={125}
            style={styles.Image}
          />
          <View style={{ marginLeft: 40 }}>
            <Text
              style={{ color: textColor.grey, fontWeight: "700", fontSize: 16 }}
            >
              #00{pokemon.id}
            </Text>
            <Text
              style={{
                color: textColor.white,
                fontWeight: "700",
                fontSize: 30,
              }}
            >
              {pokemon.name}
            </Text>
            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              {pokemon.types.map((item, index) => {
                return (
                  <Space key={index} size={2}>
                    <TypeView type={item.type.name} />
                  </Space>
                );
              })}
            </View>
          </View>
        </View>
        <Svg10X5 width={130} height={130} style={styles.plugin} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 50,
          }}
        >
          <PokeballItem style={styles.Menu} width={100} height={100} />
          {menuItem.map((item, index) => {
            return (
              <Menu key={index} title={item.name} SelectNemu={item.isSelect} />
            );
          })}
        </View>
      </View>
      <View style={styles.detail}>
        <Text>dd</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: { flex: 1 },
  detail: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 25,
    marginTop: -35,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  Image: {
    position: "absolute",
    left: 20,
  },
  Circle: {
    marginLeft: 20,
  },
  Menu: {
    position: "absolute",
    left: "34%",
    right: 0,
    top: -20,
    bottom: 0,
    opacity: 0.7,
  },
  Text: {
    position: "absolute",
  },
  plugin: {
    position: "absolute",
    left: 320,
    opacity: 0.7,
    right: 100,
    top: 230,
  },
  Text: {
    fontSize: 16,
    fontWeight: "700",
  },
});

export default Detail;
