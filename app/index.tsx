/* eslint-disable react-hooks/rules-of-hooks */
import { router } from "expo-router";
import React from "react";
import { Platform, SafeAreaView, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const index = () => {
  const { top } = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[{ flex: 1, marginTop: Platform.OS === "android" ? top : null }]}
    >
      <Text onPress={() => router.push("/animateOne")}>Animate One</Text>
      <Text onPress={() => router.push("/animateTwo")}>Animate Two</Text>
      <Text onPress={() => router.push("/animateThree")}>Animate Three</Text>
      <Text onPress={() => router.push("/animateFour")}>Animate Four</Text>
      {/* <Text onPress={() => router.push("/animateOne")}>Animate One</Text> */}
      {/* <Text onPress={() => router.push("/animateOne")}>Animate One</Text> */}
      {/* <Text onPress={() => router.push("/animateOne")}>Animate One</Text> */}
    </SafeAreaView>
  );
};

export default index;
