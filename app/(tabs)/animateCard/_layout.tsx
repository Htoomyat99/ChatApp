import { Stack } from "expo-router";
import React from "react";

const _Animatedlayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="animateTwo" />
    </Stack>
  );
};

export default _Animatedlayout;
