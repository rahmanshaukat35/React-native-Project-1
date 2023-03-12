import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ImageBackground, Text, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import bg from '../../assets/images/bg.jpg';
import auth from '@react-native-firebase/auth';

const initialState = {
  username: '',
  email: '',
  password: '',
};

export default function Login({navigation}) {
  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);
  const handleChange = (name, value) => {
    setState(s => ({...s, [name]: value}));
  };
  const handleLogin = () => {
    let {email, password, username} = state;
    if (!username) {
      return alert('Please enter your Name');
    }
    if (!email) {
      return alert('Please enter your email');
    }
    if (password.length < 6) {
      return alert('Please enter Password correctly');
    }
    setIsProcessing(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.replace('Frontend');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      })
      .finally(() => setIsProcessing(false));
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
          Register
        </Text>
        <TextInput
          mode="outlined"
          label="UserName"
          placeholder="Enter your FullName"
          style={{backgroundColor: 'transparent'}}
          placeholderTextColor="black"
          onChangeText={value => handleChange('username', value)}
        />
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
        onPress={handleLogin}
        loading={isProcessing}
        disabled={isProcessing}>
        Create Account
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
