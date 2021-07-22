import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
// import axios from 'axios';
// import Env from './constants/Env';
import WelcomePage from './components/WelcomePage';
import SigninPage from './components/SigninPage';
import SignupPage from './components/SignupPage';
import SignupBabyPage from './components/SignupBabyPage';
import MyProfilePage from './components/MyProfilePage';
import BabyProfilePage from './components/BabyProfilePage';
import HomePage from './components/HomePage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={styles.container}>
        {/*<WelcomePage />*/}
        {/*<SigninPage />*/}
        {/*<SignupPage />*/}
        {/*<SignupBabyPage />*/}
        {/*<MyProfilePage />*/}
        {/*<BabyProfilePage />*/}
        <HomePage />
      </View>
    </SafeAreaView>
  );
}
