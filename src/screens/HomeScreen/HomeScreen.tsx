import * as React from 'react';
import { Text, View, Button } from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Edit Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Text>Home!</Text>
    </View>
  );
}

export default HomeScreen;
