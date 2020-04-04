import React, { Component } from 'react';
import { View, Text, SafeAreaView,AsyncStorage } from 'react-native';
import LottieView from 'lottie-react-native';
import { connect } from 'react-redux';

 class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
componentDidMount(){
    AsyncStorage.getItem('islogin')
    .then(v => {
    //   isLogin = true;
      // console.log('islogin: ', v);
      if (v == 1) {
        this.props.make_login();
        // console.log('check isLogin: ', isLogin);
      }else{
      // console.log('else islogin: ', v);
          this.props.make_logout(false);
        // this.props.off_splash();

      }
      setTimeout(() => {
        this.props.off_splash();
    }, 1000);

    })
    .catch(err => console.error('login err: ', err));

    
}
  render() {
    return (
      <SafeAreaView>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <LottieView
        source={require('../../assets/lottie/loader.json')}
        style={{width:400,height:400}}
        autoPlay
        // ref={animation => {
        //     this.animation = animation;
        //   }}
      />
          </View>
     
      </SafeAreaView>
    );
  }
}
const mapDispatchToProps=(dispatch)=>({
    make_login:(value)=>dispatch({type:'make_login'}),
    make_logout:(value)=>dispatch({type:'make_logout',value:value}),
    off_splash:(value)=>dispatch({type:'off_splash'}),
  })

export default connect(null,mapDispatchToProps)(SplashScreen);