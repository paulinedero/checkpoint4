import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import emailIcon from '../assets/email_icon.png';
import userIcon from '../assets/user_icon.png';
import lockIcon from '../assets/lock_icon.png';
import birthdayIcon from '../assets/birthday_icon.png';
import genderIcon from '../assets/gender_icon.png';
import localityIcon from '../assets/locality_icon.png';
import pencilIcon from '../assets/pencil_icon.png';

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
  inputBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 60,
    backgroundColor: '#f6f6f6',
    margin: 15,
  },
  pencilIcon: {
    width: 15,
    height: 15,
    marginRight: 15,
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
});

export default function MyProfilePage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [fullname, setFullname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [locality, setLocality] = useState('');
  const [enableEmailInput, setEnableEmailInput] = useState(true);
  const [enableUsernameInput, setEnableUsernameInput] = useState(true);
  const [enablePasswordInput, setEnablePasswordInput] = useState(true);
  const [enableNameInput, setEnableNameInput] = useState(true);
  const [enableBirthdayInput, setEnableBirthdayInput] = useState(true);
  const [enableGenderInput, setEnableGenderInput] = useState(true);
  const [enableLocalityInput, setEnableLocalityInput] = useState(true);

  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.titleBox}>
          <Text style={styles.title}> Mon profil</Text>
          <Text style={styles.introText}>Modifiez ici vos données personnelles</Text>
        </View>
        <View>
          <View style={styles.inputBlock}>
            <TextInput
              mode="flat"
              theme={{ colors: { primary: '#F178B6' } }}
              style={styles.input}
              underlineColor="#F178B6"
              label="Email"
              value={email}
              onChangeText={setEmail}
              left={<TextInput.Icon icon={emailIcon} />}
              disabled={enableEmailInput}
            />
            <TouchableOpacity onPress={() => setEnableEmailInput(!enableEmailInput)}>
              <Image source={pencilIcon} style={styles.pencilIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputBlock}>
            <TextInput
              mode="flat"
              theme={{ colors: { primary: '#F178B6' } }}
              style={styles.input}
              underlineColor="#F178B6"
              label="Nom d'utilisateur"
              value={username}
              onChangeText={setUsername}
              left={<TextInput.Icon icon={userIcon} />}
              disabled={enableUsernameInput}
            />
            <TouchableOpacity onPress={() => setEnableUsernameInput(!enableUsernameInput)}>
              <Image source={pencilIcon} style={styles.pencilIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputBlock}>
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
              disabled={enablePasswordInput}
            />
            <TouchableOpacity onPress={() => setEnablePasswordInput(!enablePasswordInput)}>
              <Image source={pencilIcon} style={styles.pencilIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputBlock}>
            <TextInput
              mode="flat"
              theme={{ colors: { primary: '#F178B6' } }}
              style={styles.input}
              underlineColor="#F178B6"
              label="Nom et prénom"
              value={fullname}
              onChangeText={setFullname}
              left={<TextInput.Icon icon={userIcon} />}
              disabled={enableNameInput}
            />
            <TouchableOpacity onPress={() => setEnableNameInput(!enableNameInput)}>
              <Image source={pencilIcon} style={styles.pencilIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputBlock}>
            <TextInput
              mode="flat"
              theme={{ colors: { primary: '#F178B6' } }}
              style={styles.input}
              underlineColor="#F178B6"
              label="Date de naissance"
              value={birthday}
              onChangeText={setBirthday}
              left={<TextInput.Icon icon={birthdayIcon} />}
              disabled={enableBirthdayInput}
            />
            <TouchableOpacity onPress={() => setEnableBirthdayInput(!enableBirthdayInput)}>
              <Image source={pencilIcon} style={styles.pencilIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputBlock}>
            <TextInput
              mode="flat"
              theme={{ colors: { primary: '#F178B6' } }}
              style={styles.input}
              underlineColor="#F178B6"
              label="Sexe"
              value={gender}
              onChangeText={setGender}
              left={<TextInput.Icon icon={genderIcon} />}
              disabled={enableGenderInput}
            />
            <TouchableOpacity onPress={() => setEnableGenderInput(!enableGenderInput)}>
              <Image source={pencilIcon} style={styles.pencilIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputBlock}>
            <TextInput
              mode="flat"
              theme={{ colors: { primary: '#F178B6' } }}
              style={styles.input}
              underlineColor="#F178B6"
              label="Localité"
              value={locality}
              onChangeText={setLocality}
              left={<TextInput.Icon icon={localityIcon} />}
              disabled={enableLocalityInput}
            />
            <TouchableOpacity onPress={() => setEnableLocalityInput(!enableLocalityInput)}>
              <Image source={pencilIcon} style={styles.pencilIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text>Mes enfants</Text>
        </View>
        <TouchableOpacity>
          <LinearGradient
            colors={['#F178B6', '#EF5DA8']}
            style={styles.button}
          >
            <Text style={styles.buttonText}>supprimer mon compte</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
