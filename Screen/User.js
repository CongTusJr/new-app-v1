import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Button,
    ScrollView,
    RefreshControl,
    Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Alert,
} from 'react-native';
import { Zocial } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Input } from '@rneui/themed';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Input } from 'react-native-elements';

export default function ThongTinTaiKhoan() {
    // const theme = useContext(ThemeConText)
    const [email,setEmail] = useState("")
    useEffect(() => {
        const fetchUserId = async () => {
        try {
          const res = await AsyncStorage.getItem('email');
          if (res) {
            setEmail(res);
          }
        } catch (error) {
          console.error('Error fetching user ID:', error);
        }
      };

      fetchUserId();

    
  }, []);

    return (
        <View
            style={{
                flex: 1,
            }}
        >
          
            <View>
                <View
                    style={{
                        height: 160,
                    }}
                >
                  
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                marginTop: 50,
                            }}
                        >
                            <Ionicons
                                name="ios-return-up-back"
                                size={27}
                                color="white"
                                style={{
                                    color: 'black',
                                    marginTop: 5,
                                }}
                            />
                            <Text
                                style={{
                                    fontSize: 28,
                                    // color: 'white',
                                    textAlign: 'center',
                                    marginTop: 5,
                                    color: "black",
                                }}
                            >
                                Tài Khoản
                            </Text>
                            <Ionicons
                                name="notifications-outline"
                                size={27}
                                color="white"
                                style={{
                                    marginTop: 7,
                                    color: "black",
                                }}
                            />
                        </View>
                      
                </View>

                {/* Thông tin khách hàng */}
                <View
                    style={{
                        backgroundColor: 'white',
                        height: 1000,
                        marginTop: -20,
                        zIndex: -10,
                    }}
                >
                    <View
                        style={{
                            marginTop: 40,
                        }}
                    >
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                marginTop: 10,
                            }}
                        >
                            <Image
                                source={{
                                    uri: 'https://antimatter.vn/wp-content/uploads/2022/11/anh-avatar-trang-fb-mac-dinh.jpg',
                                }}
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 300,
                                }}
                            />
                            <View>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        padding: 20,
                                        color: "black",
                                    }}
                                >
                                   {email}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                padding: 20,
                                marginTop: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                backgroundColor: 'white',
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.36,
                                shadowRadius: 6.68,

                                elevation: 1,
                            }}
                        >
                            <View>
                                <Ionicons
                                    name="people"
                                    size={24}
                                    color={"black"}
                                />
                            </View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: "black",
                                    marginLeft: 10,
                                }}
                            >
                                Tài khoản:
                            </Text>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 10,
                                    color: "black",
                                }}
                            >
                            </Text>
                        </View>

                        <View
                            style={{
                                padding: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                backgroundColor: 'white',

                                marginTop: 10,
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.36,
                                shadowRadius: 6.68,

                                elevation: 11,
                            }}
                        >
                            <View>
                                <FontAwesome
                                    name="address-card-o"
                                    size={24}
                                    color={"black"}
                                />
                            </View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: "black",
                                    marginLeft: 10,
                                }}
                            >
                                Địa chỉ:
                            </Text>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 10,
                                    color: "black",
                                }}
                            >
                            </Text>
                        </View>

                        <View
                            style={{
                                padding: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                backgroundColor: 'white',
                                marginTop: 10,
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.36,
                                shadowRadius: 6.68,

                                elevation: 11,
                            }}
                        >
                            <View>
                                <Feather
                                    name="phone"
                                    size={24}
                                    color={"black"}
                                />
                            </View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: "black",
                                    marginLeft: 10,
                                }}
                            >
                                Số điện thoại :
                            </Text>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 10,
                                    color: 'black',
                                }}
                            >
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            marginTop: 40,
                        }}
                    >
                        <Button
                            title="Cập Nhật"
                            onPress={() => setIsModalVisible(true)}
                        ></Button>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
