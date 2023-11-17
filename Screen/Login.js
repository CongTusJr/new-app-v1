import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>

      <TouchableOpacity onPress={() => navigation.replace("tab")}>
        <Text>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
