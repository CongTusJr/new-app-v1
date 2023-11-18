import React from "react";
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductDetails = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.imagesDetails}>
        <Image
          source={{
            uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
          }}
          style={styles.imageDetails}
        />
        <TouchableOpacity
          onPress={() => navigation.push("Home")}
          style={styles.back}
        >
          <Ionicons name="md-arrow-back" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ margin: 10 }}>
        <View style={styles.nameDetails}>
          <Text style={styles.nameDetail}>Apple IPhone 15 Pro Max </Text>

          <Text style={styles.price}>40.990.000 vnđ</Text>
          <Text style={styles.discount}>50.000.000 vnđ</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <AntDesign name="star" size={15} color="orange" />
            <AntDesign name="star" size={15} color="orange" />
            <AntDesign name="star" size={15} color="orange" />
            <AntDesign name="star" size={15} color="orange" />
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
        </View>
        <View style={styles.describeDetails}></View>
      </View>
    </ScrollView>
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
    backgroundColor: "pink",
    borderRadius: 50,
    padding: 3,
  },
  nameDetails: {
    // Cài đặt phần còn lại của màn hình
  },
  nameDetail: { fontSize: 20 },
  describeDetails: {
    // Cài đặt phần còn lại của màn hình
  },
  price: {
    fontSize: 16,
    color: "red", // Set color for the price
    marginTop: 20,
  },
  discount: {
    color: "grey",
    fontSize: 12,
    textDecorationLine: "line-through",
  },
});

export default ProductDetails;
