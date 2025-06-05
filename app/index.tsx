/* eslint-disable react-hooks/rules-of-hooks */
import { router } from "expo-router";
import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const index = () => {
  const { top } = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          padding: Platform.OS === "android" ? 20 : 0,
          marginTop: Platform.OS === "android" ? top : null,
        },
      ]}
    >
      <Text style={styles.text} onPress={() => router.push("/animateOne")}>
        Animate One
      </Text>
      <Text style={styles.text} onPress={() => router.push("/animateTwo")}>
        Animate Two
      </Text>
      <Text style={styles.text} onPress={() => router.push("/animateThree")}>
        Animate Three
      </Text>
      <Text style={styles.text} onPress={() => router.push("/animateFour")}>
        Animate Four
      </Text>
      <Text style={styles.text} onPress={() => router.push("/animateFive")}>
        Animate Five
      </Text>
      <Text style={styles.text} onPress={() => router.push("/animateSix")}>
        Animate Six
      </Text>
      <Text style={styles.text} onPress={() => router.push("/animateSeven")}>
        Animate Seven
      </Text>
      {/* <Text onPress={() => router.push("/animateOne")}>Animate One</Text> */}
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  text: {
    paddingVertical: 5,
    paddingLeft: Platform.OS === "ios" ? 20 : 0,
  },
});
