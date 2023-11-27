import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

function Singup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Repassword, setRePassword] = useState("");

  //gửi request lên backend để đăng nhập
  const handlerSubmit = () => {
    // Basic email validation
    // if (!email || !/\S+@\S+\.\S+/.test(email)) {
    //   alert("Vui lòng nhập địa chỉ email hợp lệ!");
    //   return;
    // }

    // // Basic password validation
    // if (!password || password.length < 6) {
    //   alert("Vui lòng nhập mật khẩu có ít nhất 6 ký tự!");
    //   return;
    // }

    // // Check if the password and re-entered password match
    // if (password !== Repassword) {
    //   alert("Mật khẩu nhập lại không chính xác!");
    //   return;
    // }
    fetch("http://192.168.19.5:4000/api/register", {
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
        if (responseJson.mes === "Đăng ký tài khoản thành công!") {
          alert(responseJson.mes);
          navigation.navigate("Login");
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
          Sign Up
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
          <Text>Retype Pasword:</Text>
          <TextInput
            placeholder="Retype Pasword"
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
            onChangeText={(e) => setRePassword(e)}
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
              Sign Up
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
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                color: "#FFB6C1",
                fontWeight: "bold",
                textAlign: "center",
                margin: 10,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Singup;
