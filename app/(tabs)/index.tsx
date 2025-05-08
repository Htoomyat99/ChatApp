import ExampleOne from "@/components/reanimated/ExampleOne";
import React from "react";
import { SafeAreaView } from "react-native";

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ExampleOne />
      {/* <ExampleTwo /> */}
    </SafeAreaView>
  );
};

export default index;
