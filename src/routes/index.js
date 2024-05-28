import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from '../pages/welcome';
import Noticias from '../pages/Noticias';
import About from "../pages/About";
import Mapa from "../pages/Mapa";
import Tempo from '../pages/Tempo';
import Perfil from '../pages/Perfil';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Cadastro from '../pages/cadastro';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#ffb500',
          borderTopWidth: 0,
        }
      }}
    >
      <BottomTab.Screen
        name="Noticias"
        component={Noticias}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="menu" size={size} color={color} />
            }
            return <Ionicons name="menu-outline" size={size} color={color} />
          }
        }}
      />
      <BottomTab.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="code" size={size} color={color} />
            }
            return <Ionicons name="code-outline" size={size} color={color} />
          }
        }}
      />
      <BottomTab.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />
            }
            return <Ionicons name="home-outline" size={size} color={color} />
          }
        }}
      />
      <BottomTab.Screen
        name="Mapa"
        component={Mapa}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="map" size={size} color={color} />
            }
            return <Ionicons name="map-outline" size={size} color={color} />
          }
        }}
      />
      <BottomTab.Screen
        name="Tempo"
        component={Tempo}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="water" size={size} color={color} />
            }
            return <Ionicons name="water-outline" size={size} color={color} />
          }
        }}
      />
    </BottomTab.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainStack} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
};

export default Routes;
