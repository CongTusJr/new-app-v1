import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //gửi request lên backend để đăng nhập
  const handlerSubmit = async () => {
    // try {
    //   const response = await fetch("http://192.168.19.5:4000/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       username: email,
    //       password: password,
    //     }),
    //   });
    //   const responseJson = await response.json();
    //   if (responseJson.mes === "Đăng nhập thành công") {
    //     console.log(responseJson);
    //     alert(responseJson.mes);
    //     // Reset login attempts on successful login
    //     AsyncStorage.removeItem("loginAttempts");
    //     AsyncStorage.setItem("id", responseJson.id);
    //     navigation.replace("tab");
    //   } else {
    //     // Increment login attempts on unsuccessful login
    //     const loginAttempts =
    //       (await AsyncStorage.getItem("loginAttempts")) || "0";
    //     const attempts = parseInt(loginAttempts) + 1;
    //     if (attempts >= 3) {
    //       alert(
    //         "Bạn đã đạt đến số lần đăng nhập tối đa. Vui lòng thử lại sau."
    //       );
    //       // Optionally: You may want to block the login button or take additional actions.
    //     } else {
    //       alert(`Đăng nhập thất bại! (Thử lại ${attempts} / 3 lần.)`);
    //       AsyncStorage.setItem("loginAttempts", attempts.toString());
    //     }
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    fetch("http://192.168.19.5:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.mes === "Đăng nhập thành công") {
          console.log(responseJson);
          alert(responseJson.mes);
          AsyncStorage.setItem("id", responseJson.id);
          navigation.replace("tab");
        } else {
          alert(responseJson.mes);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -100,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
            margin: 10,
          }}
        >
          Login
        </Text>
        <View>
          <Text>Email:</Text>
          <TextInput
            placeholder="Email"
            style={{
              borderColor: 1,
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 10,
              padding: 10,
              margin: 10,
              width: 300,
            }}
            onChangeText={(e) => setEmail(e)}
          />
        </View>
        <View>
          <Text>Password:</Text>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={{
              borderColor: 1,
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 10,
              padding: 10,
              margin: 10,
              width: 300,
            }}
            onChangeText={(e) => setPassword(e)}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFB6C1",
              borderRadius: 10,
              padding: 10,
              margin: 10,
              width: 300,
            }}
            onPress={() => handlerSubmit()}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                margin: 10,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text
              style={{
                color: "#FFB6C1",
                fontWeight: "bold",
                textAlign: "center",
                margin: 10,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;
