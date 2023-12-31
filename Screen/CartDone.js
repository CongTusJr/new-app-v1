import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import { Header } from "@rneui/themed";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import CheckBox from "react-native-check-box";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";

const CartDone = () => {
  // const [check1, setCheck1] = useState(false);
  const navigation = useNavigation();
  const [isCheckedAll, setisCheckedAll] = useState(false);
  const [checkedShops, setCheckedShops] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShopCheckboxClick = (shopId) => {
    setCheckedShops((prevCheckedShops) => {
      let updatedCheckedShops;
      if (prevCheckedShops.includes(shopId)) {
        // Nếu shopId đã tồn tại trong mảng, loại bỏ nó
        updatedCheckedShops = prevCheckedShops.filter(
          (shop) => shop !== shopId
        );
      } else {
        // Nếu shopId chưa tồn tại trong mảng, thêm nó vào
        updatedCheckedShops = [...prevCheckedShops, shopId];
      }

      // Lấy danh sách các mục trong cửa hàng được chọn
      const itemsInSelectedShop = listItemsContents
        .filter((item) => item.id_shop === shopId)
        .map((item) => item.id);

      // Cập nhật danh sách các mục được chọn bằng cách thêm hoặc loại bỏ tùy thuộc vào việc cửa hàng được chọn hay không
      setCheckedItems((prevCheckedItems) => {
        if (prevCheckedShops.includes(shopId)) {
          // Nếu cửa hàng đã được chọn, loại bỏ tất cả các mục trong cửa hàng đó
          return prevCheckedItems.filter(
            (item) => !itemsInSelectedShop.includes(item)
          );
        } else {
          // Nếu cửa hàng chưa được chọn, thêm tất cả các mục trong cửa hàng đó
          return [...prevCheckedItems, ...itemsInSelectedShop];
        }
      });

      return updatedCheckedShops;
    });
  };

  const handleItemCheckboxClick = (itemId) => {
    setCheckedItems((prevCheckedItems) => {
      if (prevCheckedItems.includes(itemId)) {
        return prevCheckedItems.filter((item) => item !== itemId);
      } else {
        return [...prevCheckedItems, itemId];
      }
    });
  };

  const handleCheckAllClick = () => {
    setisCheckedAll(!isCheckedAll);
    if (!isCheckedAll) {
      setCheckedShops(listShops.map((shop) => shop.id));
      setCheckedItems(listItemsContents.map((item) => item.id));
    } else {
      setCheckedShops([]);
      setCheckedItems([]);
    }
  };

  //lấy id của ng đnăg nhập
  const [userId, setUserId] = useState();
  AsyncStorage.getItem("id").then((res) => setUserId(res));

  console.log({ userId });

  //xử lý gọi giỏ hàng ra
  const [apis, setApi] = useState([]);
  useEffect(() => {
    fetch(`http://192.168.19.5:4000/api/getListToCartByTT/${userId}`) //chú ý đổi mạng của chính bản thân
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setApi(data);
      });
  }, [userId]);

  console.log({ apis });
  //Xử lý thanh toán
  const HanlerTT = () => {
    Alert.alert(
      "Thanh toán",
      "Bạn đã thanh toán thành công",
      [
        {
          text: "OK",
          onPress: () => {
            fetch("http://192.168.19.5:4000/api/thanhtoan", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                product: apis,
              }),
            })
              .then((response) => response.json())
              .then((responseJson) => {
                alert(responseJson.mes);
              })
              .catch((error) => {
                console.log(error);
              });
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Header
          backgroundColor="#FFB6C1"
          leftComponent={
            <View style={styles.headerLeft}>
              <TouchableOpacity onPress={() => navigation.push("Home")}>
                <Ionicons name="md-arrow-back" size={24} color="white" />
              </TouchableOpacity>
            </View>
          }
          centerComponent={
            <View style={styles.headerCenter}>
              <Text style={styles.textHeader}>Your Cart</Text>
            </View>
          }
          rightComponent={
            <View style={styles.headerRight}>
              <TouchableOpacity style={{ marginRight: 5 }}>
                <Ionicons name="ios-trash-bin" size={22} color="white" />
              </TouchableOpacity>
            </View>
          }
        />
      </View>
      <ScrollView>
        <View style={styles.listContent}>
          <View style={styles.listShop}>
            {apis?.map((listItemsContent) => (
              <View key={listItemsContent._id} style={styles.listItemsContent}>
                <View style={styles.listItems}>
                  <View style={styles.items}>
                    <CheckBox
                      style={styles.checkBox}
                      isChecked={checkedItems.includes(listItemsContent.id)}
                      onClick={() =>
                        handleItemCheckboxClick(listItemsContent.id)
                      }
                      checkBoxColor="pink"
                    />
                    <Image
                      source={{
                        uri: listItemsContent.img,
                      }}
                      style={styles.imageContent}
                    />
                  </View>
                  <View style={styles.items2}>
                    <View style={styles.viewProduct}>
                      <Text style={styles.productName}>
                        {listItemsContent.productName}
                      </Text>

                      <View style={styles.productSize}>
                        <Text
                          style={{
                            textAlign: "center",
                            color: "pink",
                            marginLeft: 4,
                            fontSize: 13,
                          }}
                        >
                          Phân loại:
                        </Text>
                        <Text
                          style={{
                            textAlign: "center",
                            color: "pink",
                            marginLeft: 4,
                            fontSize: 13,
                          }}
                        >
                          {listItemsContent.productSize}
                        </Text>
                        <Entypo name="chevron-down" size={20} color="pink" />
                      </View>
                      <View style={styles.productDay}>
                        <Text style={styles.productday}>
                          7 ngày miễn phí trả hàng
                        </Text>
                      </View>
                      <Text style={styles.productPrice}>
                        {listItemsContent.price}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.productVNum}>
                  <View style={styles.productNum}>
                    <Text
                      style={{
                        textAlign: "center",
                        color: "grey",
                      }}
                    >
                      -
                    </Text>
                  </View>
                  <View style={styles.productNum}>
                    <Text
                      style={{
                        textAlign: "center",
                        color: "grey",
                      }}
                    >
                      {listItemsContent.quantity}
                    </Text>
                  </View>
                  <View style={styles.productNum}>
                    <Text
                      style={{
                        textAlign: "center",
                        color: "grey",
                      }}
                    >
                      +
                    </Text>
                  </View>
                </View>
              </View>
            ))}
            <View style={{ height: 10 }}></View>
          </View>
        </View>
        <View style={{ height: 60 }}></View>
      </ScrollView>
      <View style={styles.footer}>
        <CheckBox
          style={[styles.checkBox, {}]}
          isChecked={isCheckedAll}
          onClick={handleCheckAllClick}
          checkBoxColor="grey"
        />
        <View
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ textAlignVertical: "center", color: "grey" }}>
            All
          </Text>
          <View style={{ marginRight: 10 }}>
            <Text style={{ color: "grey", textAlign: "center" }}>Total</Text>
            <Text style={{ color: "red" }}>100.000.000 vnđ</Text>
          </View>
        </View>
        <View style={styles.footerButton}>
          <Button color="pink" title="Check Out" onPress={() => HanlerTT()} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display: "flex",
    // justifyContent: "center",
  },
  headerLeft: {
    display: "flex",
    flexDirection: "row",
  },
  textHeader: {
    color: "white",
    fontSize: 18,
  },
  headerCenter: {
    display: "flex",
    flexDirection: "row",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
  },
  listContent: {
    marginHorizontal: 10,
    // display: "flex",
  },
  listShop: {
    width: "100%",
    height: "auto",
    backgroundColor: "pink",
    marginTop: 10,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  nameShop: {
    marginLeft: 10,
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  names: {
    fontSize: 16,
    // textAlign: "center",
  },
  listItems: {
    width: "100%",
    height: 110,
    backgroundColor: "#FFE4E1",
    borderRadius: 15,
    flexDirection: "row",
    // alignItems: "center",
  },
  items: {
    marginTop: 10,
    width: 125,
    height: 90,
    backgroundColor: "#FFE4E1",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  items2: {
    marginTop: 10,
    width: "70%",
  },
  checkBox: {
    padding: 5,
  },
  imageContent: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },
  viewProduct: {
    marginLeft: 10,
  },
  productName: {
    fontSize: 18,
    color: "grey",
    fontWeight: "bold",
  },
  productSize: {
    width: 150,
    height: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    alignContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  productDay: {
    borderWidth: 1,
    borderColor: "red",
    width: 100,
    borderRadius: 5,
  },
  productday: {
    color: "red",
    fontSize: 8,
    padding: 2,
    textAlign: "center",
  },
  productPrice: { color: "red", marginTop: 3 },
  productVNum: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 15,
  },
  productNum: {
    width: 25,
    height: 25,
    backgroundColor: "white",
    alignContent: "center",
    alignItems: "center",
    padding: 2,
    marginLeft: 2,
    borderRadius: 5,
  },
  listItemsContent: {
    marginTop: 10,
    width: "95%",
    height: 150,
    backgroundColor: "#FFE4E1",
    borderRadius: 15,
    marginLeft: 10,
  },
  footer: {
    width: "100%",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    height: 50,
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  footerButton: {
    width: 110,
    marginRight: 10,
  },
});

export default CartDone;
