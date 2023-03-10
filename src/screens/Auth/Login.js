import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ImageBackground, Text, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import bg from '../../assets/images/bg.jpg';

const initialState = {
  email: '',
  password: '',
};

export default function Login({navigation}) {
  const [state, setState] = useState(initialState);
  const handleChange = (name, value) => {
    setState(s => ({...s, [name]: value}));
  };
  const handleLogin = () => {
    let {email, password} = state;
    if (!email) {
      return alert('Please enter your email');
    }
    if (password.length < 6) {
      return alert('Please enter Password correctly');
    }
    console.log(state);
  };
  return (
    <ImageBackground source={bg} style={styles.main}>
      <View style={{width: '100%'}}>
        <Text
          style={{
            textAlign: 'center',
            marginBottom: 24,
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Login
        </Text>
        <TextInput
          mode="outlined"
          label="Email"
          placeholder="Enter your Email"
          style={{backgroundColor: 'transparent'}}
          placeholderTextColor="black"
          keyboardType="email-address"
          onChangeText={value => handleChange('email', value)}
        />
        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry
          placeholder="Type your Password"
          right={<TextInput.Icon icon="eye" />}
          style={{backgroundColor: 'transparent', marginVertical: 8}}
          placeholderTextColor="black"
          onChangeText={value => handleChange('password', value)}
        />
      </View>
      <Button
        mode="contained"
        style={{borderRadius: 4, width: '100%'}}
        onPress={handleLogin}>
        Login
      </Button>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  text: {
    fontSize: 30,
    marginBottom: 50,
  },
});
