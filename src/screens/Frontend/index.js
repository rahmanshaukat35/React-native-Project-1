import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Stack = createNativeStackNavigator();
export default function Index() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}
