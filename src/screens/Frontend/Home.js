import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {DataTable, ActivityIndicator} from 'react-native-paper';

export default function Home({navigation}) {
  const [user, setUser] = useState({});
  const [documents, setDocuments] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        console.log('No user Login!');
      }
    });
  }, []);

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        setUser({});
        navigation.replace('Auth');
      });
  };
  const readMessages = useCallback(async () => {
    setIsProcessing(true);
    firestore()
      .collection('messages')
      .get()
      .then(querySnapshot => {
        console.log('Total messages: ', querySnapshot.size);
        let array = [];

        querySnapshot.forEach(doc => {
          console.log('Message ID: ', doc.id, doc.data());
          array.push(doc.data());
        });
        setDocuments(array);
      })
      .catch(err => console.error(err))
      .finally(() => setIsProcessing(false));
  }, []);
  useEffect(() => {
    readMessages();
  }, [readMessages]);
  return (
    <>
      <View style={styles.main}>
        {user.uid ? (
          <View style={{width: '100%'}}>
            {!isProcessing ? (
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Sr#</DataTable.Title>
                  <DataTable.Title>Name</DataTable.Title>
                  <DataTable.Title>City</DataTable.Title>
                  <DataTable.Title>Email</DataTable.Title>
                </DataTable.Header>
                {documents.map((msg, i) => {
                  return (
                    <DataTable.Row key={i}>
                      <DataTable.Cell>{i + 1}</DataTable.Cell>
                      <DataTable.Cell>{msg.message}</DataTable.Cell>
                      <DataTable.Cell>{msg.city}</DataTable.Cell>
                      <DataTable.Cell>{msg.email}</DataTable.Cell>
                    </DataTable.Row>
                  );
                })}
              </DataTable>
            ) : (
              <ActivityIndicator />
            )}
            <Text>Email:{user.email}</Text>
            <Text>UID:{user.uid}</Text>
          </View>
        ) : (
          <Text>No user found</Text>
        )}
        <Text style={styles.text}>Home</Text>
        <Button
          title="Go To About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
      <View>
        <Button title="Logout" onPress={handleLogout} />
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
