/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const Words = ["What's", "up", "mobile", "devs?"];

const { width, height } = Dimensions.get("window");

const SIZE = width * 0.7;

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

      const borderRadius = interpolate(
        translateX.value,
        inputRange(index),
        [0, SIZE / 2, 0],
        Extrapolation.CLAMP
      );

      return {
        transform: [{ scale }],
        borderRadius,
      };
    });
  };

  const getAnimatedTextStyle = (index: number) => {
    return useAnimatedStyle(() => {
      const translateY = interpolate(
        translateX.value,
        inputRange(index),
        [height / 2, 0, -height / 2],
        Extrapolation.CLAMP
      );

      const opacity = interpolate(
        translateX.value,
        inputRange(index),
        [-1, 1, -1]
      );

      return {
        transform: [{ translateY }],
        opacity,
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
        const rTextStyle = getAnimatedTextStyle(index);

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
              <Animated.Text style={[styles.textStyle, rTextStyle]}>
                {title}
              </Animated.Text>
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
    height: Platform.OS === "ios" ? height : null,
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "rgba(0, 0, 256, 0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 70,
    color: "#FFFFFF",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
