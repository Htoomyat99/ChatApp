import React, { useState } from "react";
import { StyleSheet, Switch } from "react-native";
import Animated from "react-native-reanimated";

const Colors = {
  dark: {
    background: "#1E1E1E",
    circle: "#252525",
    text: "#F8F8F8",
  },
  light: {
    background: "#F8F8F8",
    circle: "#FFF",
    text: "#1E1E1E",
  },
};

const SWITCH_TRACK_COLOR = {
  true: "rgba(256, 0, 256, 0.2)",
  false: "rgba(0, 0, 0, 0.1)",
};

type Theme = "dark" | "light";

const AnimateFour = () => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <Animated.View style={styles.container}>
      <Switch
        value={theme === "dark"}
        onValueChange={(value) => setTheme(value ? "dark" : "light")}
        trackColor={SWITCH_TRACK_COLOR}
        thumbColor={"violet"}
      />
    </Animated.View>
  );
};

export default AnimateFour;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
