import { View, Text } from "react-native";
import React from "react";
import { Animated } from "react-native";

const av = new Animated.Value(0);
av.addListener(() => {
  console.log("anbc");
  return;
});
const Product = () => {
  return (
    <View>
      <Text>Product</Text>
    </View>
  );
};

export default Product;
