import React, { useRef } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";

const { width: SIZE } = Dimensions.get("window");

const AnimatedImage = Animated.createAnimatedComponent(Image);

const AnimateSix = () => {
  const doubleTouchRef = useRef(undefined);

  const scale = useSharedValue(0);
  const opacity = useSharedValue(1);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: Math.max(scale.value, 0) }],
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const handleDoubleTouch = () =>
    Gesture.Tap()
      .numberOfTaps(2)
      .withRef(doubleTouchRef)
      .maxDuration(500)
      .onEnd(() => {
        scale.value = withSpring(1, undefined, (isFinished) => {
          if (isFinished) {
            scale.value = withDelay(200, withSpring(0));
          }
        });
      });

  const handleSingleTouch = () =>
    Gesture.Tap()
      .requireExternalGestureToFail(doubleTouchRef)
      .onEnd(() => {
        opacity.value = withSpring(0, undefined, (isFinished) => {
          if (isFinished) {
            opacity.value = withDelay(100, withSpring(1));
          }
        });
      });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={handleSingleTouch()}>
        <GestureDetector gesture={handleDoubleTouch()}>
          <View>
            <ImageBackground
              source={require("@/assets/images/heart.jpg")}
              style={styles.image}
            >
              <AnimatedImage
                source={require("@/assets/images/like.png")}
                style={[styles.image, styles.heart, rStyle]}
                resizeMode="center"
              />
            </ImageBackground>

            <Animated.Text style={[styles.text, rTextStyle]}>
              🐢🐢🐢🐢
            </Animated.Text>
          </View>
        </GestureDetector>
      </GestureDetector>
    </View>
  );
};

export default AnimateSix;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: SIZE,
    height: SIZE,
  },
  heart: {
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 20,
  },
  text: {
    marginTop: 35,
    textAlign: "center",
    fontSize: 55,
  },
});
