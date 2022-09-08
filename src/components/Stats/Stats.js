import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../assets/COLORS/Color";
import Space from "../../components/Space";

const Stats = ({ pokemon }) => {
  return (
    <View style={styles.Container}>
      <Text
        style={[styles.title, { color: colors[pokemon.types[0].type.name] }]}
      >
        Base Stats
      </Text>

      <View style={styles.StatsContainer}>
        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <Text>HP</Text>
          <Space size={5}>
            <Text>45</Text>
          </Space>
        </View>
        <View
          style={{ height: 5, width: 120, backgroundColor: "red", flex: 1 }}
        />
        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <Text>200</Text>
          <Space size={5} />
          <Text>294</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginVertical: 30,
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
  },
  StatsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default Stats;
