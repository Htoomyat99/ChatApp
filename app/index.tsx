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
          padding: 20,
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
      <Text style={styles.text} onPress={() => router.push("/animateFive")}>
        Animate Six
      </Text>
      {/* <Text onPress={() => router.push("/animateOne")}>Animate One</Text> */}
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  text: {
    paddingVertical: 5,
  },
});
