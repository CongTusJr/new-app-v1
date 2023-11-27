import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
  RefreshControl,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Zocial } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
// import { Input } from '@rneui/themed';

import { FontAwesome, Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
// import { Input } from 'react-native-elements';np

export default function ThongTinTaiKhoan() {
  // const theme = useContext(ThemeConText)
  const navigation = useNavigation();
  const handleLogout = async () => {
    try {
      // Xóa dữ liệu đăng nhập từ AsyncStorage (thay đổi key thành key bạn sử dụng)
      await AsyncStorage.removeItem("userToken");

      // Chuyển hướng người dùng về màn hình đăng nhập
      navigation.navigate("Login");
    } catch (error) {
      console.error("Lỗi khi đăng xuất: ", error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View>
        <View
          style={{
            height: 160,
            backgroundColor: "#fff",
          }}
        >
          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 50,
            }}
          ></View> */}
        </View>

        {/* Thông tin khách hàng */}
        <View
          style={{
            backgroundColor: "white",
            height: 1000,
            marginTop: -20,
            zIndex: -10,
          }}
        >
          <View
            style={{
              marginTop: 40,
            }}
          >
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 10,
              }}
            >
              <Image
                source={{
                  uri: "https://antimatter.vn/wp-content/uploads/2022/11/anh-avatar-trang-fb-mac-dinh.jpg",
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 300,
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                padding: 20,
                marginTop: 20,
                display: "flex",
                flexDirection: "row",
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,

                elevation: 11,
              }}
            >
              <View>
                <Ionicons name="people" size={24} color={"black"} />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  marginLeft: 10,
                }}
              >
                Tài khoản:
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 10,
                  color: "black",
                }}
              ></Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("CartDone")}
              style={{
                padding: 20,
                display: "flex",
                flexDirection: "row",
                backgroundColor: "white",

                marginTop: 10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,

                elevation: 11,
              }}
            >
              <View>
                <FontAwesome name="list-alt" size={24} color="black" />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  marginLeft: 10,
                }}
              >
                Đơn hàng đã thanh toán
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 10,
                  color: "black",
                }}
              ></Text>
            </TouchableOpacity>

            <View
              style={{
                padding: 20,
                display: "flex",
                flexDirection: "row",
                backgroundColor: "white",
                marginTop: 10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,

                elevation: 11,
              }}
            >
              <View>
                <Entypo name="help-with-circle" size={24} color="black" />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  marginLeft: 10,
                }}
              >
                Trung tâm trợ giúp
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 10,
                  color: "black",
                }}
              ></Text>
            </View>
          </View>

          <View style={{ marginTop: 40, alignItems: "center" }}>
            {/* Sử dụng TouchableOpacity để tạo nút Đăng xuất */}
            <TouchableOpacity
              style={{
                backgroundColor: "pink",
                padding: 15,
                borderRadius: 10,
                alignItems: "center",
                width: 200,
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,
                elevation: 11,
              }}
              onPress={() => handleLogout()}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                }}
              >
                Đăng xuất
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
