/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const Words = ["What's", "up", "mobile", "devs?"];

const { width, height } = Dimensions.get("window");

const AnimateThree = () => {
  const translateX = useSharedValue(0);

  const inputRange = (index: number) => {
    "worklet";
    return [(index - 1) * width, index * width, (index + 1) * width];
  };

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  const getAnimatedStyle = (index: number) => {
    return useAnimatedStyle(() => {
      const scale = interpolate(
        translateX.value,
        inputRange(index),
        [0, 1, 0],
        Extrapolation.CLAMP
      );

      return {
        transform: [{ scale }],
      };
    });
  };

  return (
    <Animated.ScrollView
      style={[styles.mainContainer]}
      horizontal
      pagingEnabled
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    >
      {Words.map((title, index) => {
        const rStyle = getAnimatedStyle(index);

        return (
          <View
            key={index.toString()}
            style={[
              styles.container,
              {
                backgroundColor: `rgba(0, 0, 256, 0.${index + 2})`,
              },
            ]}
          >
            <Animated.View style={[styles.square, rStyle]}>
              <Animated.Text style={{ fontSize: 50 }}>{title}</Animated.Text>
            </Animated.View>
          </View>
        );
      })}
    </Animated.ScrollView>
  );
};

export default AnimateThree;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    width,
    // height,
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: width * 0.7,
    height: width * 0.7,
    backgroundColor: "rgba(0, 0, 256, 0.4)",
  },
});
