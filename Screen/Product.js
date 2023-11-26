import { View, Text } from "react-native";
import React, { useEffect } from "react";

const Product = () => {

    useEffect(() => {
      fetch('http://192.168.0.100:3000/test')
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log(data);
      })
    },[])

  return (
    <View>
      <Text>Product</Text>
    </View>
  );
};

export default Product;
