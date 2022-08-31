import React, { useEffect, useRef, useState } from "react";
import { View, Text, Animated, StyleSheet, Button } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

import { height, width } from "../../../assets/Size/Size";

const BottomSheet = ({ show, onDismiss, children }) => {
  const bottomSheetHeight = height * 0.5;
  const deviceWidht = width;
  const [open, setOpen] = useState(show);
  const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;

  const onGesture = (event) => {
    if (event.nativeEvent.translationY > 0) {
      bottom.setValue(-event.nativeEvent.translationY);
    }
  };
  const endGesture = (event) => {
    if (event.nativeEvent.translationY > bottomSheetHeight / 2) {
      onDismiss();
    } else {
      bottom.setValue(0);
    }
  };

  useEffect(() => {
    if (show) {
      setOpen(show);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [show]);
  if (!open) {
    return null;
  }
  return (
    <Animated.View
      style={[styles.root, { height: bottomSheetHeight, bottom: bottom }]}
    >
      <PanGestureHandler onGestureEvent={onGesture} onEnded={endGesture}>
        <View style={styles.header} />
      </PanGestureHandler>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "#f8ab70",
    borderRadius: 30,
  },
  header: {
    height: 5,
    width: 80,
    borderRadius: "5",
    backgroundColor: "red",
    alignSelf: "center",
    marginVertical: 5,
  },
});

export default BottomSheet;
