import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, textColor } from "../../../assets/COLORS/Color";
import StatsCard from "./StatsCard";

const Stats = ({ pokemon }) => {
  const { stats } = pokemon;

  return (
    <View style={styles.Container}>
      <View style={styles.ContainerTitle}>
        <Text
          style={[
            styles.ContainerTitleText,
            { color: colors[pokemon.types[0].type.name] },
          ]}
        >
          Base Stats
        </Text>
      </View>
      {/* pokemon stats card  */}
      {stats.map((stat, index) => {
        const baseStat = stat.base_stat;
        const statName = stat.stat.name;
        const statPercent = baseStat;
        const statColor = colors[pokemon.types[0].type.name];
        const statMin = 0;
        const statMax = 255;

        return (
          <StatsCard
            key={index}
            title={statName}
            value={baseStat}
            lineHeight={statPercent}
            lineColor={statColor}
            min={statMin}
            max={statMax}
          />
        );
      })}
      <View style={styles.Disctription}>
        <Text style={styles.DispText}>
          The ranges shown on the right are for a level 100 Pokémon. Maximum
          values are based on a beneficial nature, 252 EVs, 31 IVs; minimum
          values are based on a hindering nature, 0 EVs, 0 IVs.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginVertical: 10,
  },

  ContainerTitle: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  ContainerTitleText: {
    fontWeight: "700",
    fontSize: 20,
  },
  Disctription: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  DispText: {
    color: textColor.grey,
    fontSize: 14,
    fontWeight: "500",
  },
});
export default Stats;
