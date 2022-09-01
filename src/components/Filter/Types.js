import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Bug, Grass } from "../icons";
import TypeView from "../Type/TypeView";
import TypeIcon from "../Type/TypeIcon";
import { colors } from "../../../assets/COLORS/Color";

const Types = ({ type, isSelect, onPress }) => {
  return (
    <View
      style={{
        backgroundColor: isSelect ? colors[type] : "#f2f2f2",
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginTop: 15,
      }}
    >
      <TypeIcon
        name={type}
        onPress={onPress}
        height={24}
        width={24}
        color={isSelect ? "white" : colors[type]}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default Types;
