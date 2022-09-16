import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, textColor } from "../../../assets/COLORS/Color";

const StatsCard = ({ title, value, lineHeight, lineColor, min, max }) => {
  const statName = () => {
    if (title.length > 10) {
      // /-/g,
      const text = title.split("-");
      // const newtitle = text.charAt(0).toUpperCase() + title.slice(4);
      const newtitle = text[0].substr(0, 2) + "." + text[1].substr(0, 3);

      return newtitle;
    } else {
      const newtitle = title.charAt(0).toUpperCase() + title.slice(1);
      return newtitle;
    }
  };

  return (
    <View style={styles.Row}>
      <View style={styles.Column}>
        <Text style={styles.Title}>{statName(title)}</Text>
        <Text style={styles.Value}>{value}</Text>
        <View style={styles.LineContainer}>
          <View
            style={[
              styles.Line,
              {
                backgroundColor: lineColor,
                width: lineHeight,
              },
            ]}
          />
        </View>
        <Text style={styles.Value}>{min} /</Text>
        <Text style={styles.Value}>{max}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Row: {
    marginVertical: 8,
  },
  Column: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  Title: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "500",
    marginRight: "auto",
    textTransform: "capitalize",
  },
  Value: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "400",
    color: textColor.grey,
    paddingHorizontal: 5,
    marginLeft: -5,
  },
  Line: {
    backgroundColor: "red",
    height: 4,
    width: 150,
    borderRadius: 5,
    marginLeft: 10,
  },
  LineContainer: {
    width: 160,
    height: 4,
  },
});
export default StatsCard;
