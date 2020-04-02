import React from 'react';
import {View,Text,Button, AsyncStorage} from 'react-native';
import { connect } from 'react-redux';


const Home = props =>{
  const makeOut=async()=>{
    await AsyncStorage.clear();
    props.make_logout(0);
}
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Profile"
        onPress={() => {
          props.navigation.navigate('Profile');
        }}
      />
      <Button
        title="Logout"
        onPress={makeOut}
      />
    </View>
  )};

  const mapDispatchToProps=(dispatch)=>({
    make_logout:(value)=>dispatch({type:'make_logout',value:value}),
  })

export default connect(null,mapDispatchToProps)(Home);