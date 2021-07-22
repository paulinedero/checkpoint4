import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { TextInput, RadioButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import emailIcon from '../assets/email_icon.png';
import userIcon from '../assets/user_icon.png';
import lockIcon from '../assets/lock_icon.png';
import birthdayIcon from '../assets/birthday_icon.png';
import genderIcon from '../assets/gender_icon.png';
import localityIcon from '../assets/locality_icon.png';

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
  radioButton: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 250,
  },
  radioButtonIcon: {
    width: 35,
    height: 35,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#434343',
  },
  radioButtonText: {
    marginLeft: 20,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#434343',
  },
  moreOptionText: {
    fontSize: 14,
    color: '#434343',
    marginBottom: 50,
  },
  moreOptionButton: {
    fontSize: 14,
  },
});

export default function SignupPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [fullname, setFullname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [locality, setLocality] = useState('');
  const [checked, setChecked] = useState('unchecked');

  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>S&apos;enregistrer</Text>
          <Text style={styles.introText}>Créez votre compte personnel</Text>
        </View>
        <View>
          <TextInput
            mode="flat"
            theme={{ colors: { primary: '#F178B6' } }}
            style={styles.input}
            underlineColor="#F178B6"
            label="Email"
            value={email}
            onChangeText={setEmail}
            left={<TextInput.Icon icon={emailIcon} />}
          />
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
          <TextInput
            mode="flat"
            theme={{ colors: { primary: '#F178B6' } }}
            style={styles.input}
            underlineColor="#F178B6"
            label="Nom et prénom"
            value={fullname}
            onChangeText={setFullname}
            left={<TextInput.Icon icon={userIcon} />}
          />
          <TextInput
            mode="flat"
            theme={{ colors: { primary: '#F178B6' } }}
            style={styles.input}
            underlineColor="#F178B6"
            label="Date de naissance"
            value={birthday}
            onChangeText={setBirthday}
            left={<TextInput.Icon icon={birthdayIcon} />}
          />
          <TextInput
            mode="flat"
            theme={{ colors: { primary: '#F178B6' } }}
            style={styles.input}
            underlineColor="#F178B6"
            label="Sexe"
            value={gender}
            onChangeText={setGender}
            left={<TextInput.Icon icon={genderIcon} />}
          />
          <TextInput
            mode="flat"
            theme={{ colors: { primary: '#F178B6' } }}
            style={styles.input}
            underlineColor="#F178B6"
            label="Localité"
            value={locality}
            onChangeText={setLocality}
            left={<TextInput.Icon icon={localityIcon} />}
          />
          <View style={styles.radioButton}>
            <View style={styles.radioButtonIcon}>
              <RadioButton
                value="first"
                color="#F178B6"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
            </View>
            <Text
              style={styles.radioButtonText}
            >
              En créant votre compte, vous déclarez votre accord avec nos Termes et Conditions.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignupBabyPage')}
        >
          <LinearGradient
            colors={['#F178B6', '#EF5DA8']}
            style={styles.button}
          >
            <Text style={styles.buttonText}>s&apos;enregistrer</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.moreOptionButton}
          onPress={() => navigation.navigate('SigninPage')}
        >
          <Text style={styles.moreOptionText}> Déjà un compte ? Connectez-vous</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
