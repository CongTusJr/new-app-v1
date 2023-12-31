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
      uri: "https://nganphatthinh.com.vn/wp-content/uploads/2022/02/banner-home-2.jpg",
    },
    {
      uri: "https://nganphatthinh.com.vn/wp-content/uploads/2022/02/banner.png",
    },
    {
      uri: "https://gagoinem.com/wp-content/uploads/Cung-cap-si-le-ga-goi-nem-1.jpg",
    },
    {
      uri: "https://goiyte.com/wp-content/uploads/elementor/thumbs/banner1-jpg-qcaj7e75oil5p0sc6g5v5f44l4mpj6gzorbmezxjrg.webp",
    },
    {
      uri: "https://chumy.vn/wp-content/uploads/chan-ga-goi-khach-san-CHUMY-BN1.jpg",
    },
    {
      uri: "https://vuanem.com/image/L/B9gzgRs70ElZtPIn6pERa5tbpueUpQHTdc2wCiXc.webp",
    },
    {
      uri: "https://vuanem.com/image/L/t43vmVdWq00jptivQ0oUHCpan0bKpvuCEmyQK2pv.jpg",
    },
    {
      uri: "https://vuanem.com/image/L/LCIzWAUL1TV4Ecg4Ie1qPXo8H4d5RrKhylWb5xYQ.jpg",
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

  //gọi api từ backend của tâm
  const [apis, setApi] = useState([]);
  useEffect(() => {
    fetch("http://192.168.19.5:4000/api/getproducts") //chú ý đổi mạng của chính bản thân
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setApi(data);
      });
  }, []);

  //chức nagw tìm kiếm
  const [search, setSearch] = useState([]);
  useEffect(() => {
    if (searchText !== undefined && searchText !== "") {
      fetch(`http://192.168.19.5:4000/api/search/${searchText}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((data) => data.json())
        .then((data) => {
          setSearch(data.metadata);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      setSearch([]);
    }
  }, [searchText]);

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
        // rightComponent={
        //   <View style={styles.headerRight}>
        //     {/* <TouchableOpacity style={{ marginRight: 5 }}>
        //       <FontAwesome name="filter" size={22} color="white" />
        //     </TouchableOpacity> */}
        //     <TouchableOpacity
        //       style={styles.filterButton}
        //       onPress={() => navigation.navigate("CartDone")}
        //     >
        //       <FontAwesome name="bell" size={22} color="white" />
        //     </TouchableOpacity>
        //   </View>
        // }
        centerComponent={
          <SearchBar
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        }
      />
      {searchText !== undefined && searchText !== "" ? (
        <View
          style={{
            width: 350,
            height: 300,
            backgroundColor: "#FFB6C1",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            position: "absolute",
            zIndex: 1,
            top: 80,
            right: 30,
          }}
        >
          <ScrollView>
            {search?.map((api) => (
              <TouchableOpacity
                key={api._id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: 320,
                }}
                onPress={() => navigation.navigate("Details", { id: api._id })}
              >
                <Image
                  source={{
                    uri: api.img,
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                    marginBottom: 10,
                  }}
                />
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    width: 150,
                  }}
                >
                  {api.name}
                </Text>
                <Text>{api.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : null}
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
            {apis.map((_, index) => (
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
          {/* <View> */}
          {/* <View
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 10,
                marginTop: -5,
              }}
            >
              {buttons.map((button) => (
                <TouchableOpacity
                  key={button._id}
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
            </View> */}
          {/* </View> */}
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
              {apis?.map((listProduct) => (
                <TouchableOpacity
                  key={listProduct._id}
                  style={styles.content}
                  onPress={() => {
                    navigation.navigate("Details", { id: listProduct._id });
                  }}
                >
                  <Image
                    source={{
                      uri: listProduct.img,
                    }}
                    style={styles.imageContent}
                  />
                  <View style={styles.textContainer}>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={{
                        width: 150,
                        fontSize: 16,
                      }}
                    >
                      {listProduct.name}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.price}>{listProduct.price}</Text>
                      <Text style={styles.price}> vnđ</Text>
                    </View>
                    {/* <Text style={styles.discount}>{listProduct.discount}</Text> */}
                    <View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 5,
                          justifyContent: "space-around",
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
                          4,5
                        </Text>
                        <Text
                          style={{
                            color: "grey",
                            fontSize: 12,
                            marginLeft: 50,
                          }}
                        >
                          {"|       "}
                          {/* {listProduct.sold} */}
                          20 đã bán
                        </Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 0,
                          marginLeft: 2,
                          marginTop: 10,
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
                            marginLeft: 3,
                          }}
                        >
                          {/* {listProduct.map} */}
                          Hà nội
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
              {apis.map((listFlashSale) => (
                <TouchableOpacity
                  key={listFlashSale._id}
                  style={styles.contentSale}
                  onPress={() => {
                    navigation.navigate("Details", { id: listFlashSale._id });
                  }}
                >
                  <Image
                    source={{
                      uri: listFlashSale.img,
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
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 10,
                        color: "white",
                      }}
                    >
                      -10%
                    </Text>
                  </View>
                  <View style={styles.textContainerSale}>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={styles.productNameSale}
                    >
                      {listFlashSale.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={styles.priceSale}>
                        {listFlashSale.price}
                      </Text>
                      <Text style={styles.priceSale}> vnđ</Text>
                    </View>
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
              {apis.map((listProduct) => (
                <TouchableOpacity
                  key={listProduct._id}
                  style={styles.contentDiscover}
                  onPress={() => {
                    navigation.navigate("Details", { id: listProduct._id });
                  }}
                >
                  <Image
                    source={{
                      uri: listProduct.img,
                    }}
                    style={styles.imageContent}
                  />
                  <View style={styles.textContainer}>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={styles.productName}
                    >
                      {listProduct.name}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.price}>{listProduct.price}</Text>
                      <Text style={styles.price}> vnđ</Text>
                    </View>
                    {/* <Text style={styles.discount}>{listProduct.discount}</Text> */}
                    <View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 1,
                          marginTop: 10,
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
                          4.5
                        </Text>
                        <Text
                          style={{
                            color: "grey",
                            fontSize: 12,
                            marginLeft: 50,
                          }}
                        >
                          {"|     "}
                          100 Đã bán
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
                          Hà Nội
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
    fontSize: 18,
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
