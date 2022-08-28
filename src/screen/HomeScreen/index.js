import React, { useRef, useState, useEffect } from "react";
import { View, Text, ImageBackground, TextInput, FlatList } from "react-native";
import { height, width } from "../../../assets/Size/Size";
import { textColor } from "../../../assets/COLORS/Color";
import {
  Generation,
  Sort,
  Filter,
  Search,
  PokeballItem,
} from "../../components/icons/index";

import Space from "../../components/Space";
import { getAllPokemon, getPokemon } from "../../api/pokemon";

import PokemonItems from "../../components/PokemonCard/PokemonItems";
import { ScrollView } from "react-native";

function HomeScreen() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [preUrl, setPreUrl] = useState("");
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);
      setNextUrl(response.next);
      setPreUrl(response.previous);
      await loadingPokemon(response.results);
    }
    fetchData();
  }, []);

  const loadingPokemon = async (data) => {
    const _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setAllPokemons(_pokemonData);
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ height: height / 3, width: width, paddingHorizontal: 20 }}
        source={require("../../../assets/ComponentsImages/Pokeball.png")}
        resizeMode={"contain"}
      >
        {/* Hedaer Icons */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: height / 11,
          }}
        >
          <Space size={7}>
            <Generation fill={"black"} />
          </Space>
          <Space size={7}>
            <Sort fill={"black"} />
          </Space>
          <Space size={7}>
            <Filter fill={"black"} />
          </Space>
        </View>
        <Text style={{ fontSize: 32, fontWeight: "700" }}>Pokéwiki</Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 13,
            color: textColor.grey,
            lineHeight: 15,
          }}
        >
          Search for Pokéwiki by name or using the National Pokédex number.
        </Text>
        <View
          style={{
            backgroundColor: "#f2f2f2",
            borderRadius: 5,
            marginVertical: height / 50,
            padding: height / 45,
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Search />
              <Space size={10}>
                <TextInput
                  maxLength={25}
                  style={{ fontSize: 16 }}
                  placeholder={"What Pokémon are you looking for?"}
                />
              </Space>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {allPokemons.map((item, index) => {
            return (
              <PokemonItems
                key={index}
                pokeName={item.name}
                pokeNumber={item.id}
                pokeImage={item.sprites.other.dream_world.front_default}
                pokeType={item.types}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

export default HomeScreen;
