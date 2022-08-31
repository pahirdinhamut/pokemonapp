import { View, Text, StyleSheet } from "react-native";
import React, { Children, useCallback, useEffect, useState } from "react";
import { height, width } from "../../assets/Size/Size";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const BottomSheet = ({ show, setShow, children }) => {
  const [open, setOpen] = useState(show);
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const scrollTo = useCallback((destination) => {
    "worklet";
    translateY.value = withSpring(destination, { damping: 50 });
  });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -height / 1.5);
    })
    .onEnd(() => {
      if (translateY.value > -height / 4) {
        scrollTo(0);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const showBottomSheet = () => {
    translateY.value = withSpring(-height / 2, { damping: 50 });
  };

  useEffect(() => {
    if (show) {
      setOpen(show);
      showBottomSheet();
      setShow(false);
    }
  }, [show]);

  if (!open) {
    return null;
  }

  return (
    <Animated.View style={[styles.BottomSheet, rBottomSheetStyle]}>
      <GestureDetector gesture={gesture}>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
        </View>
      </GestureDetector>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  BottomSheet: {
    height: height,
    width: "100%",
    backgroundColor: "#f2f2f2",
    position: "absolute",
    top: height,
    borderRadius: 25,
  },
  lineContainer: {
    height: 30,
    width: "100%",
  },
  line: {
    height: 5,
    width: 75,
    backgroundColor: "grey",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 2,
  },
});

export default BottomSheet;
