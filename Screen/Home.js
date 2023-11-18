import React, { useState, useEffect } from "react";
import {
  AntDesign,
  Ionicons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  FlatList,
  ScrollView,
  // LogBox,
} from "react-native";
import { Header } from "@rneui/themed";

import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
  "Sending",
]);

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.searchContainer}>
      <FontAwesome
        name="search"
        size={22}
        color="white"
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="white"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const Home = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const data = [
    {
      uri: "https://baotinmobile.vn/uploads/2023/09/banner-15promax-baotin.jpg.webp",
    },
    {
      uri: "https://baotinmobile.vn/uploads/2023/09/banner-15.jpg.webp",
    },
    {
      uri: "https://baotinmobile.vn/uploads/2023/06/sl-iphone-14.jpg.webp",
    },
    {
      uri: "https://baotinmobile.vn/uploads/2023/03/sl-iphone-13-promax.jpg.webp",
    },
  ];

  //flash sale
  const listFlashSales = [
    {
      id: 1,
      name: "IPhone 15 Pro Max",
      price: " 40.990.000 vnđ",
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      sale: "-10%",
    },
    {
      id: 2,
      name: "IPhone 14 Pro Max",
      price: " 20.990.000 vnđ",
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      sale: "-11%",
    },
    {
      id: 3,
      name: "IPhone 15 Pro Max",
      price: " 40.990.000 vnđ",
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      sale: "-9%",
    },
    {
      id: 4,
      name: "IPhone 15 Pro Max",
      price: " 40.990.000 vnđ",
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      sale: "-10%",
    },
    {
      id: 5,
      name: "IPhone 15 Pro Max",
      price: " 40.990.000 vnđ",
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      sale: "-10%",
    },
    {
      id: 6,
      name: "IPhone 15 Pro Max",
      price: " 40.990.000 vnđ",
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      sale: "-10%",
    },
    {
      id: 7,
      name: "IPhone 15 Pro Max",
      price: " 40.990.000 vnđ",
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      sale: "-10%",
    },
    {
      id: 8,
      name: "IPhone 15 Pro Max",
      price: " 40.990.000 vnđ",
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      sale: "-10%",
    },
  ];
  //discover
  const listProducts = [
    {
      id: 1,
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      name: "IPhone 15 Pro Max 1TB",
      price: "40.990.000 vnđ",
      discount: "50.000.000 vnđ",
      star: "4.9",
      sold: "20 Đã bán",
      map: "Hà Nội",
    },
    {
      id: 2,
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      name: "IPhone 15 Pro Max 1TB",
      price: "40.990.000 vnđ",
      discount: "50.000.000 vnđ",
      star: "4.9",
      sold: "20 Đã bán",
      map: "Hà Nội",
    },
    {
      id: 3,
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      name: "IPhone 15 Pro Max 1TB",
      price: "40.990.000 vnđ",
      discount: "50.000.000 vnđ",
      star: "4.9",
      sold: "20 Đã bán",
      map: "Hà Nội",
    },
    {
      id: 4,
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      name: "IPhone 15 Pro Max 1TB",
      price: "40.990.000 vnđ",
      discount: "50.000.000 vnđ",
      star: "4.9",
      sold: "20 Đã bán",
      map: "Hà Nội",
    },
    {
      id: 5,
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      name: "IPhone 15 Pro Max 1TB",
      price: "40.990.000 vnđ",
      discount: "50.000.000 vnđ",
      star: "4.9",
      sold: "20 Đã bán",
      map: "Hà Nội",
    },
    {
      id: 6,
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      name: "IPhone 15 Pro Max 1TB",
      price: "40.990.000 vnđ",
      discount: "50.000.000 vnđ",
      star: "4.9",
      sold: "20 Đã bán",
      map: "Hà Nội",
    },
    {
      id: 7,
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      name: "IPhone 15 Pro Max 1TB",
      price: "40.990.000 vnđ",
      discount: "50.000.000 vnđ",
      star: "4.9",
      sold: "20 Đã bán",
      map: "Hà Nội",
    },
    {
      id: 8,
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      name: "IPhone 15 Pro Max 1TB",
      price: "40.990.000 vnđ",
      discount: "50.000.000 vnđ",
      star: "4.9",
      sold: "20 Đã bán",
      map: "Hà Nội",
    },
    {
      id: 9,
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      name: "IPhone 15 Pro Max 1TB",
      price: "40.990.000 vnđ",
      discount: "50.000.000 vnđ",
      star: "4.9",
      sold: "20 Đã bán",
      map: "Hà Nội",
    },
    {
      id: 10,
      url: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      name: "IPhone 15 Pro Max 1TB",
      price: "40.990.000 vnđ",
      discount: "50.000.000 vnđ",
      star: "4.9",
      sold: "20 Đã bán",
      map: "Hà Nội",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {}, [currentIndex]);

  //Khai báo buttoms
  const [selectedButton, setSelectedButton] = useState(null);
  const buttons = [
    { id: 1, value: "PHONE" },
    { id: 2, value: "LAPTOP" },
    { id: 3, value: "TABLET" },
    { id: 4, value: "PC" },
    { id: 5, value: "TIVI" },
    { id: 6, value: "ACCESSORY" },
    { id: 7, value: "SMARTWATCH" },
  ];

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  // console.log({ selectedButton });

  return (
    <View style={styles.container}>
      <Header
        backgroundColor="#FFB6C1"
        leftComponent={
          <View style={styles.headerLeft}>
            <TouchableOpacity style={{ marginLeft: 5 }}>
              <FontAwesome name="bars" size={22} color="white" />
            </TouchableOpacity>
          </View>
        }
        rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity style={{ marginRight: 5 }}>
              <FontAwesome name="filter" size={22} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <FontAwesome name="bell" size={22} color="white" />
            </TouchableOpacity>
          </View>
        }
        centerComponent={
          <SearchBar
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        }
      />
      <ScrollView>
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) => {
              const newIndex = Math.round(
                event.nativeEvent.contentOffset.x /
                  event.nativeEvent.layoutMeasurement.width
              );
              setCurrentIndex(newIndex);
            }}
            renderItem={({ item, index }) => (
              <Image
                source={{ uri: data[currentIndex].uri }}
                style={styles.imageView}
              />
            )}
          />
          <View style={styles.pagination}>
            {data.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  {
                    backgroundColor:
                      index === currentIndex ? "#FFB6C1" : "#888",
                  },
                ]}
              />
            ))}
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 10,
                marginTop: -5,
              }}
            >
              {buttons.map((button) => (
                <TouchableOpacity
                  key={button.id}
                  onPress={() => handleButtonClick(button.id)}
                  style={[
                    styles.button,
                    {
                      backgroundColor:
                        selectedButton === button.id
                          ? "#FFB6C1"
                          : "transparent",

                      // Thay đổi màu sắc khi button được chọn
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      {
                        color: selectedButton === button.id ? "white" : "pink",
                        fontSize: 12,
                        top: -2,
                      },
                    ]}
                  >
                    {button.value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingVertical: 5,
            fontSize: 16,
          }}
        >
          <Text style={{ color: "pink" }}>NEW ARRIVALS</Text>
          <Text style={{ color: "gray" }}>VIEW ALL</Text>
        </View>
        <View>
          <View>
            <ScrollView
              horizontal={true}
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                marginLeft: 5.5,
                marginRight: 5.5,
              }}
            >
              {listProducts.map((listProduct) => (
                <TouchableOpacity
                  key={listProduct.id}
                  style={styles.content}
                  onPress={() => {
                    navigation.navigate("Details");
                  }}
                >
                  <Image
                    source={{
                      uri: listProduct.url,
                    }}
                    style={styles.imageContent}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.productName}>{listProduct.name}</Text>
                    <Text style={styles.price}>{listProduct.price}</Text>
                    <Text style={styles.discount}>{listProduct.discount}</Text>
                    <View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 1,
                        }}
                      >
                        <AntDesign name="star" size={13} color="orange" />
                        <Text
                          style={{
                            color: "orange",
                            fontSize: 12,
                            marginLeft: 3,
                          }}
                        >
                          {listProduct.star}
                        </Text>
                        <Text
                          style={{
                            color: "grey",
                            fontSize: 12,
                            marginLeft: 50,
                          }}
                        >
                          {"|       "}
                          {listProduct.sold}
                        </Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 0,
                          marginLeft: 2,
                        }}
                      >
                        <FontAwesome5
                          name="map-marker-alt"
                          size={12}
                          color="grey"
                        />
                        <Text
                          style={{
                            color: "grey",
                            fontSize: 12,
                            marginLeft: 5,
                          }}
                        >
                          {listProduct.map}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                paddingVertical: 15,
                fontSize: 16,
              }}
            >
              <Text style={{ color: "red" }}>FLASH SALE</Text>
              <Text style={{ color: "gray" }}>VIEW ALL</Text>
            </View>
            <ScrollView
              horizontal={true}
              style={{
                marginTop: 0,
                display: "flex",
                flexDirection: "row",
                marginLeft: 5.5,
                marginRight: 5.5,
              }}
            >
              {listFlashSales.map((listFlashSale) => (
                <TouchableOpacity
                  key={listFlashSale.id}
                  style={styles.contentSale}
                  onPress={() => {
                    navigation.navigate("Details");
                  }}
                >
                  <Image
                    source={{
                      uri: listFlashSale.url,
                    }}
                    style={styles.imageContentSale}
                  />
                  <View
                    style={{
                      right: -58,
                      top: -135,
                      backgroundColor: "red",
                      borderRadius: 15,
                      height: 16,
                      width: 26,
                    }}
                  >
                    {/* <Badge value="-10%" status="error" />
                     */}
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 10,
                        color: "white",
                      }}
                    >
                      {listFlashSale.sale}
                    </Text>
                  </View>
                  <View style={styles.textContainerSale}>
                    <Text style={styles.productNameSale}>
                      {listFlashSale.name}
                    </Text>
                    <Text style={styles.priceSale}>{listFlashSale.price}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                paddingHorizontal: 10,
                paddingVertical: 15,
                fontSize: 16,
                backgroundColor: "#FFB6C1",
                margin: 10,
                marginBottom: -5,
                borderRadius: 15,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>
                DAILY DISCOVER
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
                marginLeft: 5.5,
                marginRight: 5.5,
              }}
            >
              {listProducts.map((listProduct) => (
                <TouchableOpacity
                  key={listProduct.id}
                  style={styles.contentDiscover}
                  onPress={() => {
                    navigation.navigate("Details");
                  }}
                >
                  <Image
                    source={{
                      uri: listProduct.url,
                    }}
                    style={styles.imageContent}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.productName}>{listProduct.name}</Text>
                    <Text style={styles.price}>{listProduct.price}</Text>
                    <Text style={styles.discount}>{listProduct.discount}</Text>
                    <View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 1,
                        }}
                      >
                        <AntDesign name="star" size={13} color="orange" />
                        <Text
                          style={{
                            color: "orange",
                            fontSize: 12,
                            marginLeft: 3,
                          }}
                        >
                          {listProduct.star}
                        </Text>
                        <Text
                          style={{
                            color: "grey",
                            fontSize: 12,
                            marginLeft: 50,
                          }}
                        >
                          {"|       "}
                          {listProduct.sold}
                        </Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 0,
                          marginLeft: 2,
                        }}
                      >
                        <FontAwesome5
                          name="map-marker-alt"
                          size={12}
                          color="grey"
                        />
                        <Text
                          style={{
                            color: "grey",
                            fontSize: 12,
                            marginLeft: 5,
                          }}
                        >
                          {listProduct.map}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerLeft: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
  },
  searchContainer: {
    top: -3,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    paddingLeft: 10,
  },
  searchInput: {
    flex: 1,
    height: 26,
    color: "white",
    marginLeft: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  filterButton: {
    marginLeft: 10,
  },
  imageView: {
    width: 382,
    height: 180,
    resizeMode: "cover",
    borderRadius: 20,
    margin: 5,
    marginBottom: 0,
  },
  pagination: {
    top: -20,
    flexDirection: "row",
    justifyContent: "center",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },

  buttonGroup: {
    flexDirection: "row",
    padding: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: "pink",
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
    height: 35,
    left: -10,
  },
  content: {
    marginLeft: 5.5,
    marginRight: 5.5,
    width: 180,
    height: 300,
    backgroundColor: "#FFE4E1",
    borderRadius: 15,
    alignItems: "center",
  },
  imageContent: {
    marginTop: 8,
    width: 160,
    height: 160,
    borderRadius: 15,
  },
  textContainer: {
    padding: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 3,
  },
  price: {
    fontSize: 16,
    color: "red", // Set color for the price
  },
  contentSale: {
    marginLeft: 5.5,
    marginRight: 5.5,
    width: 150,
    height: 210,
    backgroundColor: "#FFE4E1",
    borderRadius: 15,
    alignItems: "center",
  },
  productNameSale: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 3,
  },
  imageContentSale: {
    marginTop: 8,
    width: 130,
    height: 130,
    borderRadius: 15,
  },
  priceSale: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "red", // Set color for the price
  },
  discount: {
    color: "grey",
    fontSize: 12,
    textDecorationLine: "line-through",
  },
  textContainerSale: {
    top: -10,
  },
  contentDiscover: {
    width: 180,
    height: 300,
    backgroundColor: "#FFE4E1",
    borderRadius: 15,
    alignItems: "center",
    margin: 5,
  },
});

export default Home;
