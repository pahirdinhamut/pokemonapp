import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const index = ({ children, size, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ paddingHorizontal: size }}>
      {children}
    </TouchableOpacity>
  );
};

export default index;
