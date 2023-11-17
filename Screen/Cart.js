import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Button,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Header } from '@rneui/themed';
import { AntDesign, Entypo } from '@expo/vector-icons';
import CheckBox from 'react-native-check-box';
const Cart = () => {
    // const [check1, setCheck1] = useState(false);
    const [isChecked, setisChecked] = useState(false);
    return (
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
                                <Ionicons
                                    name="md-arrow-back"
                                    size={24}
                                    color="white"
                                />
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
                                <AntDesign
                                    name="message1"
                                    size={22}
                                    color="white"
                                />
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>
            <View style={styles.listContent}>
                <View style={styles.listShop}>
                    <View style={styles.nameShop}>
                        <CheckBox
                            style={[styles.checkBox, {}]}
                            isChecked={isChecked}
                            onClick={() => setisChecked(!isChecked)}
                            checkBoxColor="white"
                        />
                        <Text style={styles.names}>CongTusJr</Text>
                    </View>
                    <View style={styles.listItemsContent}>
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
                                        uri: 'https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg',
                                    }}
                                    style={styles.imageContent}
                                />
                            </View>
                            <View style={styles.items2}>
                                <View style={styles.viewProduct}>
                                    <Text style={styles.productName}>
                                        IPhone 15 Pro Max 1TB
                                    </Text>

                                    <View style={styles.productSize}>
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                color: 'pink',
                                                marginLeft: 4,
                                                fontSize: 13,
                                            }}
                                        >
                                            Phân loại:
                                        </Text>
                                        {/* div.containner.item */}
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                color: 'pink',
                                                marginLeft: 4,
                                                fontSize: 13,
                                            }}
                                        >
                                            Titanium
                                        </Text>
                                        <Entypo
                                            name="chevron-down"
                                            size={20}
                                            color="pink"
                                        />
                                    </View>
                                    <View style={styles.productDay}>
                                        <Text style={styles.productday}>
                                            7 ngày miễn phí trả hàng
                                        </Text>
                                    </View>
                                    <Text style={styles.productPrice}>
                                        43.990.000 vnđ
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productVNum}>
                            <View style={styles.productNum}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: 'grey',
                                    }}
                                >
                                    -
                                </Text>
                            </View>
                            <View style={styles.productNum}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: 'grey',
                                    }}
                                >
                                    1
                                </Text>
                            </View>
                            <View style={styles.productNum}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: 'grey',
                                    }}
                                >
                                    +
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.listItemsContent}>
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
                                        uri: 'https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg',
                                    }}
                                    style={styles.imageContent}
                                />
                            </View>
                            <View style={styles.items2}>
                                <View style={styles.viewProduct}>
                                    <Text style={styles.productName}>
                                        IPhone 15 Pro Max 1TB
                                    </Text>

                                    <View style={styles.productSize}>
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                color: 'pink',
                                                marginLeft: 4,
                                                fontSize: 13,
                                            }}
                                        >
                                            Phân loại:
                                        </Text>
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                color: 'pink',
                                                marginLeft: 4,
                                                fontSize: 13,
                                            }}
                                        >
                                            Titanium
                                        </Text>
                                        <Entypo
                                            name="chevron-down"
                                            size={20}
                                            color="pink"
                                        />
                                    </View>
                                    <View style={styles.productDay}>
                                        <Text style={styles.productday}>
                                            7 ngày miễn phí trả hàng
                                        </Text>
                                    </View>
                                    <Text style={styles.productPrice}>
                                        43.990.000 vnđ
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productVNum}>
                            <View style={styles.productNum}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: 'grey',
                                    }}
                                >
                                    -
                                </Text>
                            </View>
                            <View style={styles.productNum}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: 'grey',
                                    }}
                                >
                                    1
                                </Text>
                            </View>
                            <View style={styles.productNum}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: 'grey',
                                    }}
                                >
                                    +
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 10 }}></View>
                </View>
                <View style={styles.listShop}>
                    <View style={styles.nameShop}>
                        <CheckBox
                            style={[styles.checkBox, {}]}
                            isChecked={isChecked}
                            onClick={() => setisChecked(!isChecked)}
                            checkBoxColor="white"
                        />
                        <Text style={styles.names}>CongTusJr</Text>
                    </View>
                    <View style={styles.listItemsContent}>
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
                                        uri: 'https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg',
                                    }}
                                    style={styles.imageContent}
                                />
                            </View>
                            <View style={styles.items2}>
                                <View style={styles.viewProduct}>
                                    <Text style={styles.productName}>
                                        IPhone 15 Pro Max 1TB
                                    </Text>

                                    <View style={styles.productSize}>
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                color: 'pink',
                                                marginLeft: 4,
                                                fontSize: 13,
                                            }}
                                        >
                                            Phân loại:
                                        </Text>
                                        {/* div.containner.item */}
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                color: 'pink',
                                                marginLeft: 4,
                                                fontSize: 13,
                                            }}
                                        >
                                            Titanium
                                        </Text>
                                        <Entypo
                                            name="chevron-down"
                                            size={20}
                                            color="pink"
                                        />
                                    </View>
                                    <View style={styles.productDay}>
                                        <Text style={styles.productday}>
                                            7 ngày miễn phí trả hàng
                                        </Text>
                                    </View>
                                    <Text style={styles.productPrice}>
                                        43.990.000 vnđ
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productVNum}>
                            <View style={styles.productNum}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: 'grey',
                                    }}
                                >
                                    -
                                </Text>
                            </View>
                            <View style={styles.productNum}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: 'grey',
                                    }}
                                >
                                    1
                                </Text>
                            </View>
                            <View style={styles.productNum}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: 'grey',
                                    }}
                                >
                                    +
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.listItemsContent}>
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
                                        uri: 'https://cdn1.viettelstore.vn/Images/Product/ProductImage/1921167348.jpeg',
                                    }}
                                    style={styles.imageContent}
                                />
                            </View>
                            <View style={styles.items2}>
                                <View style={styles.viewProduct}>
                                    <Text style={styles.productName}>
                                        IPhone 15 Pro Max 1TB
                                    </Text>

                                    <View style={styles.productSize}>
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                color: 'pink',
                                                marginLeft: 4,
                                                fontSize: 13,
                                            }}
                                        >
                                            Phân loại:
                                        </Text>
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                color: 'pink',
                                                marginLeft: 4,
                                                fontSize: 13,
                                            }}
                                        >
                                            Titanium
                                        </Text>
                                        <Entypo
                                            name="chevron-down"
                                            size={20}
                                            color="pink"
                                        />
                                    </View>
                                    <View style={styles.productDay}>
                                        <Text style={styles.productday}>
                                            7 ngày miễn phí trả hàng
                                        </Text>
                                    </View>
                                    <Text style={styles.productPrice}>
                                        43.990.000 vnđ
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.productVNum}>
                            <View style={styles.productNum}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: 'grey',
                                    }}
                                >
                                    -
                                </Text>
                            </View>
                            <View style={styles.productNum}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: 'grey',
                                    }}
                                >
                                    1
                                </Text>
                            </View>
                            <View style={styles.productNum}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: 'grey',
                                    }}
                                >
                                    +
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 10 }}></View>
                </View>
            </View>
            <View style={styles.footer}>
                <Button
                    color="pink"
                    title="Right button"
                    onPress={() => Alert.alert('Right button pressed')}
                    style={styles.footerButton}
                />
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerLeft: {
        display: 'flex',
        flexDirection: 'row',
    },
    textHeader: {
        color: 'white',
        fontSize: 18,
    },
    headerCenter: {
        display: 'flex',
        flexDirection: 'row',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
    },
    listContent: {
        marginHorizontal: 10,
        // display: "flex",
    },
    listShop: {
        width: '100%',
        height: 'auto',
        backgroundColor: 'pink',
        marginTop: 10,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    nameShop: {
        marginLeft: 10,
        width: '95%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    names: {
        fontSize: 16,
        // textAlign: "center",
    },
    listItems: {
        width: '100%',
        height: 110,
        backgroundColor: '#FFE4E1',
        borderRadius: 15,
        flexDirection: 'row',
        // alignItems: "center",
    },
    items: {
        marginTop: 10,
        width: 125,
        height: 90,
        backgroundColor: '#FFE4E1',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    items2: {
        marginTop: 10,
        width: '70%',
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
        color: 'grey',
        fontWeight: 'bold',
    },
    productSize: {
        width: 150,
        height: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        alignContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    productDay: {
        borderWidth: 1,
        borderColor: 'red',
        width: 100,
        borderRadius: 5,
    },
    productday: {
        color: 'red',
        fontSize: 8,
        padding: 2,
        textAlign: 'center',
    },
    productPrice: { color: 'red', marginTop: 3 },
    productVNum: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 15,
    },
    productNum: {
        width: 25,
        height: 25,
        backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center',
        padding: 2,
        marginLeft: 2,
        borderRadius: 5,
    },
    listItemsContent: {
        marginTop: 10,
        width: '95%',
        height: 150,
        backgroundColor: '#FFE4E1',
        borderRadius: 15,
        marginLeft: 10,
    },
    footer: {
        position: 'fixed',
        bottom: 0,
    },
    footerButton: {
        width: 50,
    },
});

export default Cart;
