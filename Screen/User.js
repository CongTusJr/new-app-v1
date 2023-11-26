import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const User = ({navigation}) => {
  return (
    <View>
      <Text>User</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>
          Đơn hàng đã mua
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default User;
