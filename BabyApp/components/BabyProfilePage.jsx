import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import axios from 'axios';
import moment from 'moment';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import userIcon from '../assets/user_icon.png';
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

export default function BabyProfilePage() {
  const sessionUser = {
    name: 'Pauline',
    id: 22,
    baby: 22,
  };

  const [fullname, setFullname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [birthtime, setBirthtime] = useState('');
  const [birthplace, setBirthplace] = useState('');
  const [gender, setGender] = useState('');
  const [locality, setLocality] = useState('');
  const [doctor, setDoctor] = useState('');
  const [enableNameInput, setEnableNameInput] = useState(true);
  const [enableBirthdayInput, setEnableBirthdayInput] = useState(true);
  const [enableBirthtimeInput, setEnableBirthtimeInput] = useState(true);
  const [enableBirthplaceInput, setEnableBirthplaceInput] = useState(true);
  const [enableGenderInput, setEnableGenderInput] = useState(true);
  const [enableLocalityInput, setEnableLocalityInput] = useState(true);
  const [enableDoctorInput, setEnableDoctorInput] = useState(true);

  useEffect(() => {
    axios
      .get(`http://192.168.1.63:3000/api/users/${sessionUser.id}/babies/${sessionUser.baby}`)
      .then((res) => res.data)
      .then((data) => {
        setFullname(data[0].full_name);
        setBirthday(moment(data[0].birthday).format('DD/MM/YYYY'));
        setBirthtime(data[0].time_of_birth);
        setBirthplace(data[0].place_of_birth);
        setGender(data[0].gender);
        setLocality(data[0].locality);
        setDoctor(data[0].doctor);
      });
  }, []);

  const modifyData = async () => {
    try {
      axios
        .put(`http://192.168.1.63:3000/api/users/${sessionUser.id}/babies/${sessionUser.baby}`, {
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
  const deleteBabyProfile = async () => {
    try {
      axios
        .delete(`http://192.168.1.63:3000/api/users/${sessionUser.id}/babies/${sessionUser.baby}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.titleBox}>
          <Text style={styles.title}> Mon Bébé</Text>
          <Text style={styles.introText}>Modifiez ici les données de votre bébé</Text>
        </View>
        <View>

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
              label="Heure de naissance"
              value={birthtime}
              onChangeText={setBirthtime}
              left={<TextInput.Icon icon={birthdayIcon} />}
              disabled={enableBirthtimeInput}
            />
            <TouchableOpacity onPress={() => setEnableBirthtimeInput(!enableBirthtimeInput)}>
              <Image source={pencilIcon} style={styles.pencilIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputBlock}>
            <TextInput
              mode="flat"
              theme={{ colors: { primary: '#F178B6' } }}
              style={styles.input}
              underlineColor="#F178B6"
              label="Lieu de naissance"
              value={birthplace}
              onChangeText={setBirthplace}
              left={<TextInput.Icon icon={localityIcon} />}
              disabled={enableBirthplaceInput}
            />
            <TouchableOpacity onPress={() => setEnableBirthplaceInput(!enableBirthplaceInput)}>
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
          <View style={styles.inputBlock}>
            <TextInput
              mode="flat"
              theme={{ colors: { primary: '#F178B6' } }}
              style={styles.input}
              underlineColor="#F178B6"
              label="Médecin traitant"
              value={doctor}
              onChangeText={setDoctor}
              left={<TextInput.Icon icon={userIcon} />}
              disabled={enableDoctorInput}
            />
            <TouchableOpacity onPress={() => setEnableDoctorInput(!enableDoctorInput)}>
              <Image source={pencilIcon} style={styles.pencilIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => modifyData()}
        >
          <LinearGradient
            colors={['#F178B6', '#EF5DA8']}
            style={styles.button}
          >
            <Text style={styles.buttonText}>confirmer les modifications</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteBabyProfile()}
        >
          <LinearGradient
            colors={['#F178B6', '#EF5DA8']}
            style={styles.button}
          >
            <Text style={styles.buttonText}>supprimer ce profil</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
