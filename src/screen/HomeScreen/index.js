import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { height, width } from "../../../assets/Size/Size";
import { textColor } from "../../../assets/COLORS/Color";
import { Generation, Sort, Filter, Search } from "../../components/icons/index";
import BottomSheet from "../../components/BottomSheet";
import Space from "../../components/Space";
import { getAllPokemon, getPokemon } from "../../api/pokemon";
import PokemonItems from "../../components/PokemonCard/PokemonItems";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";

import GenerationMode from "../../components/GenerationComponent/GenerationMode";
import FilterMode from "../../components/Filter/FilterMode";
import SortMode from "../../components/Sort/SortMode";

function HomeScreen() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [preUrl, setPreUrl] = useState("");
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [selecetionMode, setSelectionMode] = useState("filter");

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);
      setNextUrl(response.next);
      setPreUrl(response.previous);
      await loadingPokemon(response.results);
    }
    fetchData();
    console.disableYellowBox = true;
  }, []);

  const loadingPokemon = async (data) => {
    const _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);

        return pokemonRecord;
      })
    );
    setAllPokemons(_pokemonData);
    setSearchData(_pokemonData);
  };

  const selecetMode = (value) => {
    switch (value) {
      case "generation":
        setSelectionMode("generation");
        setShow(true);
        break;
      case "sort":
        setSelectionMode("sort");
        setShow(true);

        break;
      case "filter":
        setSelectionMode("filter");
        setShow(true);
        break;
    }
  };
  const SearchFilter = (text) => {
    if (text) {
      let newData = allPokemons.filter((item) => {
        return item.name.toUpperCase().indexOf(text.toUpperCase()) > -1;
      });
      setSearchData(allPokemons);
      setSearchData(newData);
    } else {
      setSearchData(allPokemons);
    }
  };

  const renderLoader = () => {
    return (
      <View style={{ marginTop: 10 }}>
        {isLoading && <ActivityIndicator size={"large"} color={"red"} />}
      </View>
    );
  };

  const loadMoreItem = async () => {
    setIsLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPreUrl(data.previous);
    setIsLoading(false);
    console.disableYellowBox = true;
  };

  return (
    <GestureHandlerRootView style={[{ flex: 1 }]}>
      <ImageBackground
        style={{
          height: height / 3,
          width: width,
          paddingHorizontal: 20,
          backgroundColor: "white",
        }}
        source={require("../../../assets/ComponentsImages/Pokeball.png")}
        resizeMode={"contain"}
      >
        {/* Hedaer Icons */}

        <View style={styles.headerIconContainer}>
          <Space onPress={() => selecetMode("filter")} size={7}>
            <Generation fill={"black"} />
          </Space>
          <Space size={7} onPress={() => selecetMode("sort")}>
            <Sort fill={"black"} />
          </Space>
          <Space size={7} onPress={() => selecetMode("generation")}>
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
                  onChangeText={(text) => SearchFilter(text)}
                />
              </Space>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={searchData}
          renderItem={({ item }) => <PokemonItems pokemon={item} />}
          keyExtractor={item => item.id}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
        />
      </View>
      <BottomSheet show={show} setShow={setShow}>
        {selecetionMode === "generation" && <FilterMode />}
        {selecetionMode === "sort" && <SortMode />}
        {selecetionMode === "filter" && <GenerationMode />}
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  headerIconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: height / 7.5,
  },
});

export default HomeScreen;
