// controlling navigation
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Login/Login';
import Details from '../Details';
//import component screens
import Home from '../views/Home/index';
import Profile from '../views/Profile';
import Signup from '../views/Signup';
import {AsyncStorage,ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import Starter from '../views/Starter';


const AuthStack = createStackNavigator();

const HomeStack = createStackNavigator();

// const LoaderStack = createStackNavigator();

// const LoaderStackNav=()=(
 
// )

const HomeStackNav = () => (
  <HomeStack.Navigator screenOptions={{ headerShown:false }} >
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Profile" component={Profile} />
    <HomeStack.Screen name="Details" component={Details} />
  </HomeStack.Navigator>
);

const AuthStackNav = () => (
  <AuthStack.Navigator>
     <AuthStack.Screen name="Starter" component={Starter}
    options={{ headerShown:false }}
    />
    
    <AuthStack.Screen name="Login" component={Login}
    options={{ headerShown:false }}
    />
    <AuthStack.Screen name="Signup" component={Signup} />
  </AuthStack.Navigator>
);
let isLogin = false;

const Nav = props => {
  AsyncStorage.getItem('islogin')
    .then(v => {
      isLogin = true;
      // console.log('islogin: ', v);
      if (v == 1) {
        props.make_login();
        // console.log('check isLogin: ', isLogin);
      }else{
      // console.log('else islogin: ', v);
          props.make_logout(false);
      }

    })
    .catch(err => console.error('login err: ', err));
console.log('isLogin: ',isLogin);
if(!isLogin){
  return <ActivityIndicator size="large" color="red" />
}
  return (
    <NavigationContainer>
      {!props.islogin ? <AuthStackNav /> : <HomeStackNav />}
    </NavigationContainer>
  );
};
const mapStateToProps = state => ({
  islogin: state.islogin,
});

const mapDispatchToProps=(dispatch)=>({
  make_login:(value)=>dispatch({type:'make_login'}),
  make_logout:(value)=>dispatch({type:'make_logout',value:value}),
})

export default connect(mapStateToProps,mapDispatchToProps)(Nav);
