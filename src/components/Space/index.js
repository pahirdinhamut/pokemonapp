import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const index = ({ children, size }) => {
  return (
    <TouchableOpacity style={{ paddingHorizontal: size }}>
      {children}
    </TouchableOpacity>
  );
};

export default index;
