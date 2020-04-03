import React, { Component } from 'react';
import {View,Text,Button, AsyncStorage, SafeAreaView} from 'react-native';
import { connect } from 'react-redux';


class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      counter:0
    }
  }
  componentDidMount(){
      console.log('componentDidMount');

       this.unsubscribeDidFocus = this.props.navigation.addListener('focus',this.didFocus);

       this.unsubscribeDidBlur = this.props.navigation.addListener('blur',this.didBlur);
  }
didFocus=() => {
  console.log('didFocus');
  this.setState({counter:this.state.counter+1});
  // Screen was focused
  // Do something
}
didBlur=() => {
  console.log('didBlur ');
  // this.setState({counter:this.state.counter+1});
  // Screen was focused
  // Do something
}

componentWillUnmount(){
  console.log('componentWillUnmount distroy');
  this.unsubscribeDidFocus();
}

   makeOut=async()=>{
    await AsyncStorage.clear();
    this.props.make_logout(0);
}

render(){
  return (
    <SafeAreaView>
    <View>
  <Text style={{fontSize:30}}>Home {this.state.counter}</Text>
      <Button
        title="Go to Profile"
        onPress={() => {
          this.props.navigation.navigate('Profile');
        }}
      />
      <Button
        title="Logout"
        onPress={this.makeOut}
      />
    </View>
    </SafeAreaView>
  )};
}
 
  const mapDispatchToProps=(dispatch)=>({
    make_logout:(value)=>dispatch({type:'make_logout',value:value}),
  })

export default connect(null,mapDispatchToProps)(Home);