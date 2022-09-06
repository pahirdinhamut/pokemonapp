import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Tablo = ({ discription, subTitle }) => {
  return (
    <View style={{ flexDirection: "row", marginVertical: 5 }}>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <Text style={styles.discription}>{discription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 12,
    color: "#17171B",
    textTransform: "capitalize",
    marginRight: 5,
    width: 70,
  },
  discription: {
    textTransform: "capitalize",
    marginLeft: 60,
    fontWeight: "400",
    fontSize: 14,
    color: "#747476",
  },
});
export default Tablo;
