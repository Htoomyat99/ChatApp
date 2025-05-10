import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const index = () => {
  return (
    <View>
      <Text onPress={() => router.push("/animateOne")}>Animate One</Text>
      <Text onPress={() => router.push("/animateTwo")}>Animate Two</Text>
      <Text onPress={() => router.push("/animateThree")}>Animate Three</Text>
      {/* <Text onPress={() => router.push("/animateOne")}>Animate One</Text>
      <Text onPress={() => router.push("/animateOne")}>Animate One</Text>
      <Text onPress={() => router.push("/animateOne")}>Animate One</Text>
      <Text onPress={() => router.push("/animateOne")}>Animate One</Text> */}
    </View>
  );
};

export default index;
