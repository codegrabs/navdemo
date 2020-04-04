import React, { Component } from 'react';
import { View, Text, SafeAreaView,StyleSheet, Button } from 'react-native';
import Swiper from 'react-native-swiper'
import LottieView from 'lottie-react-native';
export default class Starter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
        {/* <LottieView
        autoPlay
        source={require('../../assets/lottie/loader.json')}
      /> */}
          <Text style={styles.text}>welcome</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Please login</Text>
          <Button title="Login" onPress={()=>{
              this.props.navigation.navigate('Login');
          }} />
        </View>
      </Swiper>
    );
  }
}


const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })
  