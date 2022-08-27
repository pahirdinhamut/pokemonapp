import React, { useRef } from "react";
import { View, Text, ImageBackground, TextInput } from "react-native";
import { height, width } from "../../../assets/Size/Size";
import { textColor } from "../../../assets/COLORS/Color";
import { Generation, Sort, Filter, Search } from "../../components/icons";
import PokemonItem from "../../components/pokemonItem";
import Space from "../../components/Space";

const HomeScreen = () => {
  const SearchRef = useRef();

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
                  ref={SearchRef}
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
        {/* Ppokemon items */}
        <PokemonItem />
      </View>
    </View>
  );
};

export default HomeScreen;
