import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

export default function About({navigation}) {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>About</Text>
      <Button
        title="Go To Contact"
        onPress={() => navigation.navigate('Contact')}
      />
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
