import ExampleOne from "@/components/reanimated/ExampleOne";
import { ThemedView } from "@/components/ThemedView";
import React from "react";

const index = () => {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ExampleOne />
    </ThemedView>
  );
};

export default index;
