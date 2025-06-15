import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const imageUrl =
  "https://images.unsplash.com/photo-1621569642780-4864752e847e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80";

const AnimatedImage = Animated.createAnimatedComponent(Image);

const AnimateFive = () => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const pitchHandler = Gesture.Pinch()
    .onUpdate((event) => {
      scale.value = event.scale;
      focalX.value = event.focalX;
      focalY.value = event.focalY;
    })
    .onEnd(() => {
      scale.value = withTiming(1);
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: focalX.value },
        { translateY: focalY.value },
        { translateX: -width / 2 },
        { translateY: -height / 2 },
        { scale: scale.value },
        { translateX: -focalX.value },
        { translateY: -focalY.value },
        { translateX: width / 2 },
        { translateY: height / 2 },
      ],
    };
  });

  const focalPointStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: focalX.value }, { translateY: focalY.value }],
    };
  });


  return (
    <GestureDetector gesture={pitchHandler}>
      <Animated.View style={{ flex: 1 }}>
        <AnimatedImage
          style={[{ flex: 1 }, rStyle]}
          source={{ uri: imageUrl }}
        />
        <Animated.View style={[styles.focalPoint, focalPointStyle]} />

      </Animated.View>
    </GestureDetector>
  );
};

export default AnimateFive;

const styles = StyleSheet.create({
  focalPoint: {
    ...StyleSheet.absoluteFillObject,
    width: 20,
    height: 20,
    backgroundColor: "blue",
    borderRadius: 10,
  },
});
