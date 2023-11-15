import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  // Button,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Button, Header, ButtonGroup } from "@rneui/themed";

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

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
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
    }, 11111111); // Đổi ảnh mỗi 3 giây

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    // console.log("Current Index:", currentIndex);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <View>
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
            // console.log("newIndex:", newIndex);
            console.log(currentIndex);
            setCurrentIndex(newIndex);
          }}
          renderItem={({ item }) => (
            <Image source={{ uri: item.uri }} style={styles.imageView} />
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
      <View style={styles.viewBButton}>
        <ButtonGroup
          buttons={["IPHONE", "SAMSUNG", "XIAOMI", "REDMI", "OPPO"]}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          containerStyle={{ marginBottom: 20, marginLeft: 10 }}
        />
      </View>
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
    width: 382.5,
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
    // marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  viewBButton: {
    display: "flex",
    justifyContent: "space-between",
  },
  Button: {
    width: 50,
  },
});

export default Home;
