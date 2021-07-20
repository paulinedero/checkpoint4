/* eslint-disable global-require */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
  },
  baby: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  titleBox: {
    padding: 10,
  },
  title: {
    alignSelf: 'center',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#434343',
  },
  introText: {
    alignSelf: 'center',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#666666',
  },
  button: {
    height: 50,
    width: 250,
    borderRadius: 25,
    marginTop: 30,
    marginBottom: 30,

  },
  buttonText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default function WelcomePage() {
  return (
    <View style={styles.body}>
      <Image
        style={styles.baby}
        source={require('../assets/background.png')}
      />
      <View style={styles.titleBox}>
        <Text style={styles.title}>Le carnet de santé de Bébé</Text>
        <Text style={styles.title}>à portée de main</Text>
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.introText}>Suivez l&apos;évolution de votre bébé</Text>
        <Text style={styles.introText}>depuis son premier jour</Text>
      </View>
      <LinearGradient
        colors={['#F178B6', '#EF5DA8']}
        style={styles.button}
      >
        <Text style={styles.buttonText}>se connecter</Text>
      </LinearGradient>
    </View>
  );
}
