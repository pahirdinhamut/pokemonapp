import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Generation, Sort, Filter } from "../../components/icons/index";
import { height } from "../../../assets/Size/Size";
import Space from "../../components/Space";
const Header = (onpress, setShow) => {
  console.log(setShow);

  const updateSwitchMode = () => {
    setShow(true);
  };

  return (
    <View style={styles.headerIconContainer}>
      <Space onPress={onpress} size={7}>
        <Generation fill={"black"} />
      </Space>
      <Space onPress={onpress} size={7}>
        <Sort fill={"black"} />
      </Space>
      <Space onPress={onpress} size={7}>
        <Filter fill={"black"} />
      </Space>
    </View>
  );
};
const styles = StyleSheet.create({
  headerIconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: height / 11,
  },
});

export default Header;
