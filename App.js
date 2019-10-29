import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';

export default function navinext() {
  return (
    <NavigationNativeContainer>
      <StatusBar barStyle="light-content" />
      <Routes />
    </NavigationNativeContainer>
  );
}
