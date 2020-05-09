import React, { Component } from 'react';
import { Text, View, Button, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';

class NewLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: '',
                password: ''
            },
            submitButton: true
        }
    }

    render() {
        return (
            <>
                <View>
                    <ImageBackground style={{ justifyContent: 'center', alignItems: 'stretch', height: 250 }}
                        source={require('../../assets/image/login-background.png')} >
                              <Image style={{ marginTop: '5%', marginLeft: 150 }}
                            source={require('../../assets/image/Logo.png')} />
                    </ImageBackground>
                </View>
                <View style={{paddingHorizontal:'5%' }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: "#5B5E66", fontSize: 34, fontWeight: "bold" }}>Login</Text>
                    </View>
                    <View>
                        <TextInput placeholder="Email" style={{ fontSize: 24, borderBottomColor: 'red', borderBottomWidth: 0.5 }}></TextInput>
                        <TextInput placeholder="Password" style={{ fontSize: 24 }}></TextInput>
                        <TouchableOpacity style={{ backgroundColor: '#9013FE', alignItems: "center", borderRadius: 20,marginTop:30,paddingVertical:12 }}>
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: "bold" }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row',marginTop:30  }}>
                        <View style={{
                            backgroundColor: '#A2A2A2',
                            height: 2,
                            width: 175,


                        }}>
                        </View>

                        <Text style={{
                            fontSize: 14,
                            paddingHorizontal: 3,
                            alignSelf: 'center',
                            color: '#A2A2A2',
                            top: -10
                        }}>OR</Text>
                        <View style={{
                            backgroundColor: '#A2A2A2',
                            height: 2,
                            width: 175
                        }}>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 35, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, color: "#858891" }}>Facebook</Text>
                        <Text style={{ fontSize: 16, color: "#858891" }} >Gmail</Text>
                        <Text style={{ fontSize: 16, color: "#858891" }}>Twitter</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 35, alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, color: "#858891" }}>Already onboard? </Text>
                        <Text style={{ fontSize: 16, color: "#3EC7E6", fontWeight: "bold" }}>Login</Text>
                    </View>
                </View>
            </>

        );
    }
}



export default NewLogin;


