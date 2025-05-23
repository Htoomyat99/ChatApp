import React from "react";
import { Image } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const imageUrl =
  "https://images.unsplash.com/photo-1621569642780-4864752e847e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80";

const AnimatedImage = Animated.createAnimatedComponent(Image);

const AnimateFive = () => {
  const scale = useSharedValue(1);

  const pitchHandler = Gesture.Pinch().onUpdate((event) => {
    scale.value = event.scale;
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <GestureDetector gesture={pitchHandler}>
      <AnimatedImage style={[{ flex: 1 }, rStyle]} source={{ uri: imageUrl }} />
    </GestureDetector>
  );
};

export default AnimateFive;
