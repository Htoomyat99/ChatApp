import React, { useCallback } from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Circle } from "react-native-svg";

const BACKGROUND_COLOR = "#444B6F";
const BACKGROUND_STROKE_COLOR = "#303858";
const STROKE_COLOR = "#A6E1FA";
const { width, height } = Dimensions.get("window");

const CIRCLE_LENGTH = 1000;
const R = CIRCLE_LENGTH / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const AnimateSeven = () => {
  const { top } = useSafeAreaInsets();
  const progress = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}`;
  });

  const onPress = useCallback(() => {
    progress.value = withTiming(progress.value > 0 ? 0 : 1, { duration: 2000 });
  }, [progress]);

  return (
    <View style={styles.container}>
      <Svg
        style={{
          position: "absolute",
          top: Platform.OS === "android" ? top : 0,
        }}
      >
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={BACKGROUND_STROKE_COLOR}
          strokeWidth={30}
        />

        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={STROKE_COLOR}
          strokeWidth={15}
          strokeDasharray={CIRCLE_LENGTH}
          strokeDashoffset={CIRCLE_LENGTH}
          animatedProps={animatedProps}
        />
      </Svg>

      <ReText style={styles.progressText} text={progressText} />

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Run</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnimateSeven;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  progressText: {
    fontSize: 80,
    color: "#FFFFFF",
    width: 200,
    textAlign: "center",
  },
  button: {
    bottom: 80,
    width: width * 0.7,
    height: 60,
    position: "absolute",
    backgroundColor: BACKGROUND_STROKE_COLOR,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 25,
    color: "#FFF",
    letterSpacing: 2.0,
  },
});
