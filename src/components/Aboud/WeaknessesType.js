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

  const WeaknessType = () => {
    return (
      <View
        style={{
          marginLeft: 5,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: colors[weakness[1]],
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            height: 25,
            width: 25,
          }}
        >
          <TypeIcon name={weakness[1]} color={"white"} width={15} height={15} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Weaknesses</Text>

      {/* {newtypeData().map((item, index) => {
        return (
          <View style={{ marginTop: 10 }}>
            <View style={{ marginLeft: 5, backgroundColor: "red" }}>
              <TypeIcon
                key={index}
                name={item}
                height={18}
                width={18}
                color={colors[item]}
                style={styles.icon}
              />
            </View>
          </View>
        );
      })} */}

      <View style={{ marginLeft: 45, flexDirection: "row" }}>
        <WeaknessType />
        <WeaknessType />
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
