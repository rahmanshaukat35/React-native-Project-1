import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Register() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Register</Text>
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
