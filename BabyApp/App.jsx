import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import axios from 'axios';
// import Env from './constants/Env';

import WelcomePage from './components/WelcomePage';
import SigninPage from './components/SigninPage';
import SignupPage from './components/SignupPage';
import SignupBabyPage from './components/SignupBabyPage';
import MyProfilePage from './components/MyProfilePage';
import BabyProfilePage from './components/BabyProfilePage';
import HomePage from './components/HomePage';
import BabyRecordsPage from './components/BabyRecordsPage';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar />
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
        <Stack.Screen name="SigninPage" component={SigninPage} options={{ headerShown: false }} />
        <Stack.Screen name="SignupPage" component={SignupPage} options={{ headerShown: false }} />
        <Stack.Screen name="SignupBabyPage" component={SignupBabyPage} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="MyProfilePage" component={MyProfilePage} options={{ headerShown: false }} />
        <Stack.Screen name="BabyProfilePage" component={BabyProfilePage} options={{ headerShown: false }} />
        <Stack.Screen name="BabyRecordsPage" component={BabyRecordsPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
