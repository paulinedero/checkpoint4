import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import userIcon from '../assets/user_icon.png';
import lockIcon from '../assets/lock_icon.png';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
  },
  titleBox: {
    alignSelf: 'flex-start',
    padding: 10,
  },
  title: {
    marginTop: 30,
    alignSelf: 'flex-start',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#434343',
  },
  introText: {
    marginTop: 20,
    alignSelf: 'flex-start',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#434343',
  },
  input: {
    width: 300,
    height: 60,
    backgroundColor: '#f6f6f6',
    margin: 15,
  },
  button: {
    height: 50,
    width: 300,
    borderRadius: 25,
    marginTop: 30,
    marginBottom: 15,

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
  moreOptionText: {
    fontSize: 14,
    color: '#434343',
  },
  moreOptionButton: {
    fontSize: 14,
  },
});

export default function SigninPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  return (
    <View style={styles.body}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Se connecter</Text>
        <Text style={styles.introText}>Enregistrez dés maintenant les infos de Bébé</Text>
      </View>
      <View>
        <TextInput
          mode="flat"
          theme={{ colors: { primary: '#F178B6' } }}
          style={styles.input}
          underlineColor="#F178B6"
          label="Nom d'utilisateur"
          value={username}
          onChangeText={setUsername}
          left={<TextInput.Icon icon={userIcon} />}
        />
        <TextInput
          mode="flat"
          theme={{ colors: { primary: '#F178B6' } }}
          style={styles.input}
          underlineColor="#F178B6"
          label="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={seePassword}
          left={<TextInput.Icon icon={lockIcon} />}
          right={<TextInput.Icon name="eye" onPress={() => setSeePassword(!seePassword)} />}
        />
      </View>
      <LinearGradient
        colors={['#F178B6', '#EF5DA8']}
        style={styles.button}
      >
        <Text style={styles.buttonText}>se connecter</Text>
      </LinearGradient>
      <TouchableOpacity style={styles.moreOptionButton}>
        <Text style={styles.moreOptionText}> Pas encore de compte ? Créez-en un</Text>
      </TouchableOpacity>

    </View>
  );
}
