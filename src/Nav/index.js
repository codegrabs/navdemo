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
import SplashScreen from '../views/SplashScreen';
import NewLogin from '../views/NewLogin/NewLogin';


const AuthStack = createStackNavigator();

const HomeStack = createStackNavigator();
const SplachStack = createStackNavigator();

const SplachStackNav = () => (
  <NavigationContainer>
  <SplachStack.Navigator screenOptions={{ headerShown:false }} >
    <SplachStack.Screen name="SplashScreen" component={SplashScreen} />
  </SplachStack.Navigator>
  </NavigationContainer>
);


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

const Nav = props => {
  
if(props.showSplash){
  return <SplachStackNav />
}
  return (
    <NavigationContainer>
      {!props.islogin ? <AuthStackNav /> : <HomeStackNav />}
    </NavigationContainer>
  );
};
const mapStateToProps = state => ({
  islogin: state.islogin,
  showSplash:state.showSplash
});

const mapDispatchToProps=(dispatch)=>({
  make_login:(value)=>dispatch({type:'make_login'}),
  make_logout:(value)=>dispatch({type:'make_logout',value:value}),
})

export default connect(mapStateToProps,mapDispatchToProps)(Nav);
