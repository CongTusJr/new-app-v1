import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

 function Login({navigation}) {

    const [email, setEmail] =useState("")
    const [password, setPassword] =useState("")


 //gửi request lên backend để đăng nhập
    const handlerSubmit = () => {
        fetch('http://192.168.0.104:4000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: email,
                password: password,
            })
        })
      .then(response => response.json())
      .then(responseJson => {
            if (responseJson.mes === 'Đăng nhập thành công') {
                console.log(responseJson)
                alert(responseJson.mes);
                 AsyncStorage.setItem( 'id', responseJson.id, );
                 AsyncStorage.setItem( 'email', responseJson.usename, );

                navigation.replace('tab');
            } else {
                alert(responseJson.mes);
            }
            })
            .catch(error => {
            console.log(error);
            });

    }

  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -100
    }}> 
      <View>
        <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
            margin: 10,
        }}>
            Đăng nhập
        </Text>
        <View>
            <Text>
                Email
            </Text>
          <TextInput style={{
            borderColor: 1,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 10,
            padding: 10,
            margin: 10,
            width: 300,
          }} 
            onChangeText={(e) => setEmail(e)}
           />
        </View>
         <View>
            <Text >
               Password
            </Text>
          <TextInput
            
          style={{
            borderColor: 1,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 10,
            padding: 10,
            margin: 10,
            width: 300,
          }} 
            onChangeText={(e) => setPassword(e)}
          
          />
        </View>
        <View>
            <TouchableOpacity style={{
                backgroundColor: '#FFB6C1',
                borderRadius: 10,
                padding: 10,
                margin: 10,
                width: 300,
            }} 
                onPress={() => handlerSubmit()}
            >
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 10,
                }}>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>
                Bạn chưa có tài khoản 
            </Text>
            <TouchableOpacity 
             onPress={() => navigation.navigate("Singup")}
            >
            <Text style={{
                color: '#FFB6C1',
                fontWeight: 'bold',
                textAlign: 'center',
                margin: 10,
            }}>
                Đăng ký
            </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login;