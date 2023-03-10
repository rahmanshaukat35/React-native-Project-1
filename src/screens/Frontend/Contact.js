import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

export default function Contact({navigation}) {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Contact</Text>
      <Button title="Go To Home" onPress={() => navigation.popToTop()} />
    </View>
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
