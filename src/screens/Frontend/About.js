import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {TextInput} from 'react-native-paper';

export default function About({navigation}) {
  const [messages, setMessages] = useState({});
  const handleChange = (name, value) => {
    setMessages(s => ({...s, [name]: value}));
  };
  const createMessage = async () => {
    await firestore()
      .collection('messages')
      .doc(messages.messageId)
      .set(messages);
  };
  console.log(createMessage);
  // useEffect(() => {
  //   createMessage();
  // }, []);
  return (
    <View style={styles.main}>
      <Text style={styles.text}>New Message</Text>
      <TextInput
        mode="outlined"
        label="Message"
        placeholder="Enter your message"
        onChangeText={value => handleChange('message', value)}
      />
      <Button title="Go To Contact" onPress={createMessage} />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 50,
  },
});
