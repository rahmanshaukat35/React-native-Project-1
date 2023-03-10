import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
    <>
      <View style={styles.main}>
        <Text style={styles.text}>Home</Text>
        <Button
          title="Go To About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
      <View>
        <Button title="Logout" onPress={() => navigation.navigate('Auth')} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 50,
  },
});
