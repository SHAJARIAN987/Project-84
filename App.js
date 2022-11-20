import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from './screens/Profile.js';
import CreateStory from './screens/CreateStory.js';
import DrawerNavigator from './navigation/DrawerNavigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
