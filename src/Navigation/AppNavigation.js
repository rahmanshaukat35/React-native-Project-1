import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Frontend from '../screens/Frontend';
import Dashboard from '../screens/Dashboard';
import Auth from '../screens/Auth';
const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Frontend" component={Frontend} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
