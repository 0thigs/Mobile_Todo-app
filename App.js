import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style={"light"} backgroundColor={"transparent"}/>
      <Routes />
    </NavigationContainer>
  );
};
