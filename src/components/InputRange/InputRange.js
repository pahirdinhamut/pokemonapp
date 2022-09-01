import { View, Text, StyleSheet } from "react-native";
import React, { useMemo, useRef } from "react";
import { height, width } from "../../../assets/Size/Size";
import Svg, { Line } from "react-native-svg";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated, { max } from "react-native-reanimated";

const {
  View: AView,
  Value,
  event,
  set,
  block,
  cond,
  lessThan,
  greaterThan,
  add,
  eq,
} = Animated;

const maxWidth = width - 100;

const usePanGesture = () => {
  const transX = useRef(new Value(0)).current;
  const offsetX = useRef(new Value(0)).current;

  const onGestureHandle = useMemo(() => {
    return event([
      {
        naviteEvent: ({ transtionX: x, state }) =>
          block([
            cond(lessThan(add(offsetX, x), 0), set(transX, 0), [
              cond(
                greaterThan(add(offsetX, x), maxWidth),
                set(transX, maxWidth),
                set(transX, add(offsetX, x))
              ),
            ]),
            cond(eq(state, State.END), set(offsetX, add(offsetX, x))),
          ]),
      },
    ]);
  }, [transX, offsetX]);

  return { transX, onGestureHandle };
};

const PanComponent = () => {
  const { transX, onGestureHandle } = usePanGesture();
  return (
    <PanGestureHandler
      onGestureEvent={onGestureHandle}
      onHandlerStateChange={onGestureHandle}
    >
      <AView style={[styles.knob, { transform: [{ translateX: transX }] }]} />
    </PanGestureHandler>
  );
};

const InputRange = ({ minValue, maxValue, onChangeMin, onChangeMax }) => {
  return (
    <View style={styles.container}>
      <View style={styles.trilho} />
      <View style={{ position: "absolute" }}>
        <Svg height={6} width={width - 80}>
          <Line
            stroke={"#ea5d60"}
            strokeWidth={"12"}
            x1={0}
            y1={0}
            x2={width - 80}
            y2={0}
          />
        </Svg>
      </View>
      <PanComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    justifyContent: "center",
    marginTop: 40,
  },
  trilho: {
    backgroundColor: "#B9BED1",
    position: "absolute",
    height: 6,
    borderRadius: 6,
    width: width - 80,
  },
  knob: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "white",
    position: "absolute",
    elevation: "5",
    shadowColor: "#ea5d60",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.3,
  },
});

export default InputRange;
