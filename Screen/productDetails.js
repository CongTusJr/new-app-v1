// import React from "react";
import React, { useEffect, useState } from "react";

import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  Button,
  BackHandler,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductDetails = () => {
  const navigation = useNavigation();
  const [selectedColor, setSelectedColor] = useState(null);
  const colorOptions = ["white", "grey", "aqua", "black"];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handlePickerChange = (itemValue, itemIndex) => {
    setSelectedValue(itemValue);
  };
  const MyButton = ({ onPress, title }) => (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: "pink", padding: 5, borderRadius: 6 }}
    >
      <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
  const handleButtonPress = () => {
    // Handle button press logic here
    console.log("Button pressed!");
  };
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //Lấy id khi click từ trang home
  const route = useRoute();
  const id = route.params?.id;
  //gọi api để lấy ra từng phần tử 1
  const [apis, setApi] = useState();
  useEffect(() => {
    fetch(`http://192.168.19.5:4000/api/getdetail/${id}`) //chú ý đổi mạng của chính bản thân
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setApi(data);
      });
  }, []);

  //lấy id của ng đnăg nhập
  const [userId, setUserId] = useState();
  AsyncStorage.getItem("id").then((res) => setUserId(res));

  //xử lý khi click để thêm vào sản phẩm
  const handleAddCart = () => {
    // console.log('abc')
    fetch("http://192.168.19.5:4000/api/addtocart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: apis._id,
        userid: userId,
        img: apis.img,
        nameproduct: apis.name,
        price: apis.price,
        status: false,
        quantity: quantity,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson.mes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.imagesDetails}>
          <Image
            source={{
              uri: apis?.img,
            }}
            style={styles.imageDetails}
          />
          <TouchableOpacity
            onPress={() => navigation.push("Home")}
            style={styles.back}
          >
            <Ionicons name="md-arrow-back" size={28} color="pink" />
          </TouchableOpacity>
        </View>
        <View style={{ margin: 10 }}>
          <View style={styles.nameDetails}>
            <Text style={styles.nameDetail}>{apis?.name} </Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <AntDesign name="star" size={15} color="orange" />
              <Text
                style={{
                  color: "orange",
                  fontSize: 15,
                  marginLeft: 3,
                  top: -2,
                }}
              >
                5.0
              </Text>
              <Text style={{ color: "grey", top: -2, fontSize: 15 }}>
                {"  |    "}20 Đã bán
              </Text>
            </View>
            <Text style={styles.price}>{apis?.price} vnđ</Text>
            <Text style={styles.discount}>50.000.000 vnđ</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.colorDetails}>
              <Text style={{ color: "gray", fontSize: 18 }}>Color:</Text>
              <View style={styles.colorOption}>
                {colorOptions.map((color) => (
                  <TouchableOpacity
                    key={color}
                    style={[
                      styles.colorOption,
                      { backgroundColor: color },
                      selectedColor === color && styles.selectedColorBorder,
                    ]}
                    onPress={() => handleColorSelect(color)}
                  />
                ))}
              </View>
              {/* {selectedColor && (
                <View style={styles.selectedColor}>
                  <Text style={{ color: "white" }}>✓</Text>
                </View>
              )} */}
            </View>
          </View>
        </View>

        <View style={styles.describeDetails}>
          <Text style={{ textAlign: "center", color: "red", fontSize: 20 }}>
            ĐẶC ĐIỂM NỔI BẬT
          </Text>
          <Text style={styles.describeText}>
            {/* • Thiết kế khung viền từ titan chuẩn hàng không vũ trụ - Cực nhẹ,
            bền cùng viền cạnh mỏng cầm nắm thoảiƯ mái */}
            {apis?.description}
          </Text>
          {/* <Text style={styles.describeText}>
            • Hiệu năng Pro chiến game thả ga - Chip A17 Pro mang lại hiệu năng
            đồ họa vô cùng sống động và chân thực
          </Text>
          <Text style={styles.describeText}>
            • Thoả sức sáng tạo và quay phim chuyên nghiệp - Cụm 3 camera sau
            đến 48MP và nhiều chế độ tiên tiến
          </Text>
          <Text style={styles.describeText}>
            • Nút tác vụ mới giúp nhanh chóng kích hoạt tính năng yêu thích của
            bạn
          </Text> */}
        </View>
        {/* </View> */}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          height: 50,
          borderTopStartRadius: 15,
          borderTopEndRadius: 15,
          justifyContent: "space-between",
        }}
      >
        <View style={styles.quality}>
          <TouchableOpacity onPress={decreaseQuantity}>
            <View
              style={{
                width: 25,
                height: 25,
                borderColor: "grey",
                alignContent: "center",
                alignItems: "center",
                borderRadius: 5,
                marginLeft: 25,
                borderWidth: 0.5,
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: "grey",
                  textAlign: "center",
                  top: -6,
                }}
              >
                -
              </Text>
            </View>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 20,
              color: "grey",
              marginLeft: 10,
              marginRight: 10,
              top: -1,
            }}
          >
            {quantity}
          </Text>

          <TouchableOpacity onPress={increaseQuantity}>
            <View
              style={{
                width: 25,
                height: 25,
                borderColor: "grey",
                alignContent: "center",
                alignItems: "center",
                borderRadius: 5,
                borderWidth: 0.5,
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: "grey",
                  textAlign: "center",
                  top: -6,
                }}
              >
                +
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginRight: 25,
            marginTop: 6,
          }}
        >
          <Button
            color="pink"
            title="Add to cart"
            onPress={() => handleAddCart()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE4E1",
  },
  imagesDetails: {
    width: "100%",
    aspectRatio: 1,
    position: "relative",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "pink",
    overflow: "hidden", // Để ảnh không tràn ra khỏi borderRadius
  },
  imageDetails: {
    width: "100%",
    aspectRatio: 1,
  },
  back: {
    position: "absolute",
    top: 35,
    left: 15,
    padding: 3,
  },
  nameDetails: {
    // Cài đặt phần còn lại của màn hình
  },
  nameDetail: { fontSize: 28 },
  describeDetails: {
    marginTop: 10,
    display: "flex",
    width: "95%",
    marginLeft: 10,

    backgroundColor: "white",
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  price: {
    fontSize: 25,
    color: "red", // Set color for the price
    marginTop: 5,
  },
  discount: {
    color: "grey",
    fontSize: 16,
    textDecorationLine: "line-through",
  },
  describeText: {
    color: "grey",
    fontSize: 15,
    marginBottom: 5,
  },
  colorDetails: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  colorOption: {
    flexDirection: "row",
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    marginLeft: 10,
    // padding: 2,
  },
  selectedColorBorder: {
    borderWidth: 2,
    borderColor: "pink",
  },
  selectedColor: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "pink", // Màu sắc của ô chọn đã được chọn
    justifyContent: "center",
    alignItems: "center",
  },
  quality: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    // paddingHorizontal: 20,
  },
});

export default ProductDetails;
