import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import News from '../screens/News';
import { Navigator } from './Navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import Exchanges from '../screens/Exchanges';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen 
        name="Navigator" 
        component={Navigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="News" 
        component={News}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="newspaper-outline" color={color} size={size} />
          )
        }} 
      />
      <Tab.Screen 
        name="Exchanges" 
        component={Exchanges}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="wallet-outline" color={color} size={size} />
          )
        }} 
      />
    </Tab.Navigator>
  );
}