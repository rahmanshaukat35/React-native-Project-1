import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import User from './User';

const Stack = createNativeStackNavigator();
export default function Index() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}
