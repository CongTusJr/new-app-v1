import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

 function Singup({navigation}) {

    const [email, setEmail] =useState("")
    const [password, setPassword] =useState("")
    const [Repassword, setRePassword] =useState("")



    //gửi request lên backend để đăng nhập
    const handlerSubmit = () => {
        fetch('http://192.168.0.104:4000/api/register', {
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
            if (responseJson.mes === 'Đăng ký thành công') {
                alert(responseJson.mes);
                navigation.navigate('Login');
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
            Đăng ký
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
            <Text >
               Nhập lại mật khẩu
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
            onChangeText={(e) => setRePassword(e)}
          
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
                    Đăng ký
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
            <Text style={{
                color: '#FFB6C1',
                fontWeight: 'bold',
                textAlign: 'center',
                margin: 10,
            }}>
                Đăng ký
            </Text>
        </View>
      </View>
    </View>
  )
}

export default Singup;