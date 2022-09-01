import { View, Text } from "react-native";
import React from "react";
import Space from "../Space";
import { Poison, Grass, Dragon, Dark } from "../icons";
import { textColor, colors } from "../../../assets/COLORS/Color";
import TypeIcon from "./TypeIcon";

const TypeView = ({ type }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors[type],
        padding: 5,
        borderRadius: 5,
      }}
    >
      <Space size={3}>
        <TypeIcon name={type} color={"white"} width={14} height={14} />
      </Space>
      <Text
        style={{
          color: textColor.white,
          fontWeight: "500",
          fontSize: 12,
          lineHeight: 14,
          textTransform: "capitalize",
        }}
      >
        {type}
      </Text>
    </View>
  );
};

export default TypeView;
