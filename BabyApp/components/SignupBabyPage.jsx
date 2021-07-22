import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import userIcon from '../assets/user_icon.png';
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
});

export default function SignupBabyPage({ navigation }) {
  const sessionUser = {
    name: 'Pauline',
    id: 22,
  };

  const [fullname, setFullname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [birthtime, setBirthtime] = useState('');
  const [birthplace, setBirthplace] = useState('');
  const [gender, setGender] = useState('');
  const [locality, setLocality] = useState('');
  const [doctor, setDoctor] = useState('');

  const inscription = async () => {
    try {
      axios
        .post(`http://192.168.1.63:3000/api/users/${sessionUser.id}/babies`, {
          full_name: fullname,
          birthday,
          time_of_birth: birthtime,
          place_of_birth: birthplace,
          gender,
          locality,
          doctor,
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Votre bébé</Text>
          <Text style={styles.introText}>Insérez les informations concernant Bébé</Text>
        </View>
        <View>
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
            label="Heure de naissance"
            value={birthtime}
            onChangeText={setBirthtime}
            left={<TextInput.Icon icon={birthdayIcon} />}
          />
          <TextInput
            mode="flat"
            theme={{ colors: { primary: '#F178B6' } }}
            style={styles.input}
            underlineColor="#F178B6"
            label="Lieu de naissance"
            value={birthplace}
            onChangeText={setBirthplace}
            left={<TextInput.Icon icon={localityIcon} />}
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
          <TextInput
            mode="flat"
            theme={{ colors: { primary: '#F178B6' } }}
            style={styles.input}
            underlineColor="#F178B6"
            label="Médecin traitant"
            value={doctor}
            onChangeText={setDoctor}
            left={<TextInput.Icon icon={userIcon} />}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            inscription();
            navigation.navigate('HomePage');
          }}
        >
          <LinearGradient
            colors={['#F178B6', '#EF5DA8']}
            style={styles.button}
          >
            <Text style={styles.buttonText}>enregistrer</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
