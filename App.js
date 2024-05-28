import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export default function App() {
  
  return (
  
  <NavigationContainer>
<StatusBar backgroundColor="#fbdc51" barStyle="light-content" />
      <Routes/>

    </NavigationContainer>
    
  );
}


