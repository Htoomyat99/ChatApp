/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from "react-native-reanimated";

const SIZE = 100;

const handleRotation = (progress: SharedValue<number>) => {
  "worklet";

  return `${progress.value * 2 * Math.PI}rad`;
};

const ExampleOne = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1.5);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }],
      borderRadius: (progress.value * SIZE) / 2,
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, []);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Animated.View
        style={[
          reanimatedStyle,
          { width: SIZE, height: SIZE, backgroundColor: "blue" },
        ]}
      />
    </View>
  );
};

export default ExampleOne;
