import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  FlatList,
  ScrollView,
  LogBox,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Header, Badge } from "@rneui/themed";
import { FontAwesome5 } from "@expo/vector-icons";
// import { Animated } from "react-native";

// import { LogBox } from "react-native";
LogBox.ignoreLogs(["Sending"]);

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

  useEffect(() => {
    // setSelectedIndex(currentIndex)
  }, [currentIndex]);

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
    <ScrollView
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
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
                  backgroundColor: index === currentIndex ? "#FFB6C1" : "#888",
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
                      selectedButton === button.id ? "#FFB6C1" : "transparent",

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
            <View style={styles.content}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContent}
              />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>IPhone 15 Pro Max 1TB</Text>
                <Text style={styles.price}>43.990.000 vnđ</Text>
                <Text style={styles.discount}>50.000.000 vnđ</Text>
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
                      4.9
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 12,
                        marginLeft: 50,
                      }}
                    >
                      {"|       "}
                      20 Đã bán
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
            </View>
            <View style={styles.content}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContent}
              />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>IPhone 15 Pro Max 1TB</Text>
                <Text style={styles.price}>43.990.000 vnđ</Text>
                <Text style={styles.discount}>50.000.000 vnđ</Text>
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
                      4.9
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 12,
                        marginLeft: 50,
                      }}
                    >
                      {"|       "}
                      20 Đã bán
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
            </View>
            <View style={styles.content}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContent}
              />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>IPhone 15 Pro Max 1TB</Text>
                <Text style={styles.price}>43.990.000 vnđ</Text>
                <Text style={styles.discount}>50.000.000 vnđ</Text>
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
                      4.9
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 12,
                        marginLeft: 50,
                      }}
                    >
                      {"|       "}
                      20 Đã bán
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
            </View>
            <View style={styles.content}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContent}
              />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>IPhone 15 Pro Max 1TB</Text>
                <Text style={styles.price}>43.990.000 vnđ</Text>
                <Text style={styles.discount}>50.000.000 vnđ</Text>
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
                      4.9
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 12,
                        marginLeft: 50,
                      }}
                    >
                      {"|       "}
                      20 Đã bán
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
            </View>
            <View style={styles.content}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContent}
              />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>IPhone 15 Pro Max 1TB</Text>
                <Text style={styles.price}>43.990.000 vnđ</Text>
                <Text style={styles.discount}>50.000.000 vnđ</Text>
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
                      4.9
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 12,
                        marginLeft: 50,
                      }}
                    >
                      {"|       "}
                      20 Đã bán
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
            </View>
            <View style={styles.content}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContent}
              />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>IPhone 15 Pro Max 1TB</Text>
                <Text style={styles.price}>43.990.000 vnđ</Text>
                <Text style={styles.discount}>50.000.000 vnđ</Text>
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
                      4.9
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 12,
                        marginLeft: 50,
                      }}
                    >
                      {"|       "}
                      20 Đã bán
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
            </View>
            <View style={styles.content}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContent}
              />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>IPhone 15 Pro Max 1TB</Text>
                <Text style={styles.price}>43.990.000 vnđ</Text>
                <Text style={styles.discount}>50.000.000 vnđ</Text>
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
                      4.9
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 12,
                        marginLeft: 50,
                      }}
                    >
                      {"|       "}
                      20 Đã bán
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
            </View>
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
            <View style={styles.contentSale}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContentSale}
              />
              <View style={{ right: -60, top: -137 }}>
                <Badge value="-10%" status="error" />
              </View>
              <View style={styles.textContainerSale}>
                <Text style={styles.productNameSale}>IPhone 15 Pro Max</Text>
                <Text style={styles.priceSale}>40.990.000 vnđ</Text>
              </View>
            </View>
            <View style={styles.contentSale}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContentSale}
              />
              <View style={{ right: -60, top: -137 }}>
                <Badge value="-10%" status="error" />
              </View>
              <View style={styles.textContainerSale}>
                <Text style={styles.productNameSale}>IPhone 15 Pro Max</Text>
                <Text style={styles.priceSale}>40.990.000 vnđ</Text>
              </View>
            </View>
            <View style={styles.contentSale}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContentSale}
              />
              <View style={{ right: -60, top: -137 }}>
                <Badge value="-10%" status="error" />
              </View>
              <View style={styles.textContainerSale}>
                <Text style={styles.productNameSale}>IPhone 15 Pro Max</Text>
                <Text style={styles.priceSale}>40.990.000 vnđ</Text>
              </View>
            </View>
            <View style={styles.contentSale}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContentSale}
              />
              <View style={{ right: -60, top: -137 }}>
                <Badge value="-10%" status="error" />
              </View>
              <View style={styles.textContainerSale}>
                <Text style={styles.productNameSale}>IPhone 15 Pro Max</Text>
                <Text style={styles.priceSale}>40.990.000 vnđ</Text>
              </View>
            </View>
            <View style={styles.contentSale}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContentSale}
              />
              <View style={{ right: -60, top: -137 }}>
                <Badge value="-10%" status="error" />
              </View>
              <View style={styles.textContainerSale}>
                <Text style={styles.productNameSale}>IPhone 15 Pro Max</Text>
                <Text style={styles.priceSale}>40.990.000 vnđ</Text>
              </View>
            </View>
            <View style={styles.contentSale}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContentSale}
              />
              <View style={{ right: -60, top: -137 }}>
                <Badge value="-10%" status="error" />
              </View>
              <View style={styles.textContainerSale}>
                <Text style={styles.productNameSale}>IPhone 15 Pro Max</Text>
                <Text style={styles.priceSale}>40.990.000 vnđ</Text>
              </View>
            </View>
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
            <Text style={{ color: "#fff", fontSize: 20 }}>DAILY DISCOVER</Text>
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
            <TouchableOpacity
              style={styles.contentDiscover}
              onPress={() => {
                navigation.navigate("Details");
              }}
            >
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContent}
              />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>IPhone 15 Pro Max 1TB</Text>
                <Text style={styles.price}>43.990.000 vnđ</Text>
                <Text style={styles.discount}>50.000.000 vnđ</Text>
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
                      4.9
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 12,
                        marginLeft: 50,
                      }}
                    >
                      {"|       "}
                      20 Đã bán
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
            <View style={styles.contentDiscover}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContent}
              />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>IPhone 15 Pro Max 1TB</Text>
                <Text style={styles.price}>43.990.000 vnđ</Text>
                <Text style={styles.discount}>50.000.000 vnđ</Text>
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
                      4.9
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 12,
                        marginLeft: 50,
                      }}
                    >
                      {"|       "}
                      20 Đã bán
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
            </View>
            <View style={styles.contentDiscover}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContent}
              />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>IPhone 15 Pro Max 1TB</Text>
                <Text style={styles.price}>43.990.000 vnđ</Text>
                <Text style={styles.discount}>50.000.000 vnđ</Text>
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
                      4.9
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 12,
                        marginLeft: 50,
                      }}
                    >
                      {"|       "}
                      20 Đã bán
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
            </View>
            <View style={styles.contentDiscover}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContent}
              />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>IPhone 15 Pro Max 1TB</Text>
                <Text style={styles.price}>43.990.000 vnđ</Text>
                <Text style={styles.discount}>50.000.000 vnđ</Text>
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
                      4.9
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 12,
                        marginLeft: 50,
                      }}
                    >
                      {"|       "}
                      20 Đã bán
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
            </View>
            <View style={styles.contentDiscover}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContent}
              />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>IPhone 15 Pro Max 1TB</Text>
                <Text style={styles.price}>43.990.000 vnđ</Text>
                <Text style={styles.discount}>50.000.000 vnđ</Text>
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
                      4.9
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 12,
                        marginLeft: 50,
                      }}
                    >
                      {"|       "}
                      20 Đã bán
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
            </View>
            <View style={styles.contentDiscover}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContent}
              />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>IPhone 15 Pro Max 1TB</Text>
                <Text style={styles.price}>43.990.000 vnđ</Text>
                <Text style={styles.discount}>50.000.000 vnđ</Text>
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
                      4.9
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 12,
                        marginLeft: 50,
                      }}
                    >
                      {"|       "}
                      20 Đã bán
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
            </View>
            <View style={styles.contentDiscover}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContent}
              />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>IPhone 15 Pro Max 1TB</Text>
                <Text style={styles.price}>43.990.000 vnđ</Text>
                <Text style={styles.discount}>50.000.000 vnđ</Text>
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
                      4.9
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 12,
                        marginLeft: 50,
                      }}
                    >
                      {"|       "}
                      20 Đã bán
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
            </View>
            <View style={styles.contentDiscover}>
              <Image
                source={{
                  uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
                }}
                style={styles.imageContent}
              />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>IPhone 15 Pro Max 1TB</Text>
                <Text style={styles.price}>43.990.000 vnđ</Text>
                <Text style={styles.discount}>50.000.000 vnđ</Text>
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
                      4.9
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 12,
                        marginLeft: 50,
                      }}
                    >
                      {"|       "}
                      20 Đã bán
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
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
