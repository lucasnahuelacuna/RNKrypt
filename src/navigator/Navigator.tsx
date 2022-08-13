import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../screens/Details';
import Home from '../screens/Home';
import News from '../screens/News';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
  );
}