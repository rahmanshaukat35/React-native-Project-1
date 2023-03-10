import React from 'react';
import AppNavigation from './src/Navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import AuthContextProvider from './src/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <AppNavigation />
      </AuthContextProvider>
    </NavigationContainer>
  );
}
