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
const Cart = () => {
  // const [check1, setCheck1] = useState(false);
  const [isChecked, setisChecked] = useState(false);
  //listShops
  const listShops = [
    {
      id: 1,
      nameShop: "CongTusJr",
    },
    {
      id: 2,
      nameShop: "Celphone S",
    },
    {
      id: 3,
      nameShop: "CongTusJr 3",
    },
  ];
  const listItemsContents = [
    {
      id: 1,
      uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      productName: "IPhone 15 Pro Max 1TB",
      productPrice: "43.990.000 vnđ",
      productNum: 1,
      productSize: "Titanium",
    },
    {
      id: 2,
      uri: "https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg",
      productName: "IPhone 15 Pro Max 1TB",
      productPrice: "43.990.000 vnđ",
      productNum: 2,
      productSize: "Gold",
    },
  ];
  return (
    <View>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Header
            backgroundColor="#FFB6C1"
            leftComponent={
              <View style={styles.headerLeft}>
                <TouchableOpacity>
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
        <View style={styles.listContent}>
          {listShops.map((listShop) => (
            <View key={listShop.id} style={styles.listShop}>
              <View style={styles.nameShop}>
                <CheckBox
                  style={[styles.checkBox, {}]}
                  isChecked={isChecked}
                  onClick={() => setisChecked(!isChecked)}
                  checkBoxColor="white"
                />
                <Text style={styles.names}>{listShop.nameShop}</Text>
              </View>
              {listItemsContents.map((listItemsContent) => (
                <View key={listItemsContent.id} style={styles.listItemsContent}>
                  <View style={styles.listItems}>
                    <View style={styles.items}>
                      <CheckBox
                        style={styles.checkBox}
                        isChecked={isChecked}
                        onClick={() => setisChecked(!isChecked)}
                        checkBoxColor="pink"
                      />
                      <Image
                        source={{
                          uri: listItemsContent.uri,
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
                          {listItemsContent.productPrice}
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
                        {listItemsContent.productNum}
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
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <CheckBox
          style={[styles.checkBox, {}]}
          isChecked={isChecked}
          onClick={() => setisChecked(!isChecked)}
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
          <Button
            color="pink"
            title="Check Out"
            onPress={() => Alert.alert("Right button pressed")}
          />
        </View>
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
    width: "95%",
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

export default Cart;
