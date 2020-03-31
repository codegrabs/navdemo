/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/Login/Login';
import { Provider } from 'react-redux';
import store from './src/store';
import Details from './src/Details';

const AuthStack = createStackNavigator();

const HomeStack = createStackNavigator();

const Home = props => (
  <View>
    <Text>Home</Text>
    <Button
      title="Go to Profile"
      onPress={() => {
        props.navigation.navigate('Profile');
      }}
    />
  </View>
);

const Profile = props => (
  <View>
    <Text>
      {undefined.name}
      {props.route.params
        ? props.route.params.name == 'Recommended'
          ? 'Recommended'
          : 'Profile'
        : 'profile'}
    </Text>
    <Button
      title="Go to Profile with navigate"
      onPress={() => {
        props.navigation.navigate('Profile', {name: 'codegrabs'});
      }}
    />
    <Button
      title="Go to Profile with push"
      onPress={() => {
        props.navigation.push('Profile', {name: 'Recommended'});
      }}
    />
  </View>
);


const Signup = () => (
  <View>
    <Text>Signup</Text>
  </View>
);

const App: () => React$Node = () => {
  let isLogin = false;
  return (
    <Provider store={store}>
          <NavigationContainer>
      {!isLogin ? (
        <AuthStack.Navigator>
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="Signup" component={Signup} />
          <AuthStack.Screen name="Details" component={Details} />
        </AuthStack.Navigator>
      ) : (
        <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={Home} />
          <HomeStack.Screen name="Profile" component={Profile} />
        </HomeStack.Navigator>
      )}
    </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
