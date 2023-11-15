import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  FlatList,
  ScrollView,
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
  },[currentIndex])

  //Khai báo buttoms
  const [selectedButton, setSelectedButton] = useState(null);
  const buttons = [
    {id: 1, value: 'IPHONE'},
    {id: 2, value: 'SAMSUNG'},
    {id: 3, value: 'XIAOMI'},
    {id: 4, value: 'REDMI'},
    {id: 5, value: 'OPPO'},
  ]


  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  console.log({selectedButton})

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
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
              {/* <ButtonGroup
          buttons={["IPHONE", "SAMSUNG", "XIAOMI", "REDMI", "OPPO"]}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          buttonStyle={{
            backgroundColor: 'white',
            paddingHorizontal: 15, // Adjust padding as needed
          }}
          selectedButtonStyle={{
            backgroundColor: 'black', // Set the color you want when the button is selected
          }}
          containerStyle={{ marginVertical: 20, marginHorizontal: 10, width: 500, backgroundColor: 'white', color: 'white' }}
          innerBorderStyle={{ width: 5, borderColor: 'white',  backgroundColor: 'white', }} // To remove the border between buttons
        /> */}
          <View>
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              padding: 10
            }}>
               {buttons.map((button) => (
          <TouchableOpacity
            key={button.id}
            onPress={() => handleButtonClick(button.id)}
            style={[
              styles.button,
              {
                backgroundColor: selectedButton === button.id ? 'gray' : 'transparent',
                
                // Thay đổi màu sắc khi button được chọn
              },
            ]}
          >
            <Text style={[styles.buttonText, {
              color: selectedButton === button.id ? 'white' : 'black',
            }  ]}>{button.value}</Text>
          </TouchableOpacity>
        ))}
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
    width: 400,
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
  viewBButton: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    width: 50,
  },
  buttonGroup: {
    flexDirection: 'row',
    padding: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default Home;
