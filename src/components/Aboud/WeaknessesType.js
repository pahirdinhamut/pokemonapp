import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Weaknesses from "../../api/Weakness";
import { useState } from "react";
import Space from "../Space";
import TypeIcon from "../Type/TypeIcon";
import { colors } from "../../../assets/COLORS/Color";
const WeaknessesType = ({ pokemonType }) => {
  const [weaknesses, setWeaknesses] = useState(Weaknesses);
  const { weakness } = weaknesses[9];

  const newtypeData = () => {
    let data = weaknesses.find((item) => {
      if (item.type == pokemonType) {
        return true;
      }
    });
    return data.weakness;
  };
  newtypeData();

  const WeaknessType = ({ item }) => {
    return (
      <View
        style={{
          marginLeft: 5,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: colors[item],
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            height: 25,
            width: 25,
          }}
        >
          <TypeIcon name={item} color={"white"} width={15} height={15} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Weaknesses</Text>

      <View style={{ marginLeft: 45, flexDirection: "row" }}>
        {newtypeData().map((item, index) => {
          return <WeaknessType item={item} key={index} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  Title: {
    fontSize: 12,
    color: "#17171B",
    textTransform: "capitalize",
    marginRight: 5,
    width: 80,
  },
});

export default WeaknessesType;
