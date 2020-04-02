
import React from 'react';
import { Text, View , Button } from 'react-native';

const Profile = props => (
    <View>
      <Text>
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

  export default Profile;