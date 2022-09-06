import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Button from "../Button/Button";

const SortMode = () => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <Text style={{ color: "black", fontSize: 22 }}>Sort</Text>
      <Text style={{ marginTop: 10 }}>
        Use advanced search to explore Pokémon by type, weakness, height and
        more!
      </Text>

      {/* bottom */}
      <Button
        color={"#ea5d5f"}
        title={"Smallest number first"}
        titleColor={"white"}
      />
      <Button color={"white"} title={"Highest number first"} />
      <Button color={"white"} title={"A-Z"} />
      <Button color={"white"} title={"Z-A"} />
    </View>
  );
};

export default SortMode;
