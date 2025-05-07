import React, { useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const SIZE = 100;

const ExampleOne = () => {
  const progress = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    };
  }, [progress]);

  useEffect(() => {
    progress.value = withTiming(0, { duration: 1000 });
  }, [progress]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Animated.View
          style={{
            height: SIZE,
            width: SIZE,
            backgroundColor: "lightblue",
            ...reanimatedStyle,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ExampleOne;
