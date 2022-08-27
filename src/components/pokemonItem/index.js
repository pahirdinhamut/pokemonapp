import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Grass, Poison, PokeballItem, Svg6X3 } from "../../components/icons";
import { height, width } from "../../../assets/Size/Size";
import Space from "../Space";
import {
  textColor,
  backgroundColors,
  colors,
} from "../../../assets/COLORS/Color";

console.log(height / 9);
const PokemonItem = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#8bbe8a",
        height: 115,
        borderRadius: 10,
      }}
    >
      <View style={{ margin: 20 }}>
        <View>
          <Text
            style={{ fontSize: 12, lineHeight: 14, color: textColor.number }}
          >
            #001
          </Text>
          <Text
            style={{ fontSize: 26, fontWeight: "700", color: textColor.white }}
          >
            Bulbasaur
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: colors.grass,
              padding: 5,
              borderRadius: 5,
            }}
          >
            <Space size={3}>
              <Grass width={14} height={14} />
            </Space>
            <Text
              style={{
                color: textColor.white,
                fontWeight: "500",
                fontSize: 12,
                lineHeight: 14,
              }}
            >
              Grass
            </Text>
          </View>
          <View>
            <Space size={3} />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: backgroundColors.poison,
              padding: 5,
              borderRadius: 5,
            }}
          >
            <Space size={3}>
              <Poison width={14} height={14} />
            </Space>
            <Text
              style={{
                color: textColor.white,
                fontWeight: "500",
                fontSize: 12,
                lineHeight: 14,
              }}
            >
              Poison
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: 74,
          height: 32,
          position: "absolute",
          left: 90,
          bottom: 110,
        }}
      >
        <Svg6X3 width={110} height={110} />
      </View>
      <View>
        <PokeballItem width={145} height={145} />
        <Image
          source={require("../../../assets/pokemon/01.png")}
          resizeMode={"contain"}
          style={{ position: "absolute", top: -30, height: 140, width: 140 }}
        />
      </View>
    </View>
  );
};

export default PokemonItem;
