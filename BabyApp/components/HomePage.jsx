import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import healthBookIcon from '../assets/health_book_icon.png';

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
  babyInfoBox: {
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
    width: 350,
    backgroundColor: '#FCDDEC',
    borderRadius: 5,
    padding: 15,
    marginTop: 20,
  },
  subTitle: {
    paddingBottom: 15,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#434343',
  },
  icon: {
    marginTop: 5,
    height: 50,
    width: 50,
    marginRight: 15,
  },
  miniButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
    padding: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    height: 'auto',
    width: 100,
  },
  miniButtonText: {
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  recordsBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
    marginTop: 20,
  },
  heightBox: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    width: 165,
    backgroundColor: '#EEE6FF',
    borderRadius: 5,
    padding: 15,
  },
  heightWeightBoxText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
  },
  weightBox: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    width: 165,
    backgroundColor: '#FFFACA',
    borderRadius: 5,
    padding: 15,
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

export default function HomePage({ navigation }) {
  const sessionUser = {
    name: 'Pauline',
    id: 1,
  };

  const baby = {
    height: 86,
    weight: 9.5,
  };

  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            Bienvenue
            {' '}
            {sessionUser.name}
          </Text>
        </View>
        <View style={styles.babyInfoBox}>
          <View>
            <Image source={healthBookIcon} style={styles.icon} />
          </View>
          <View>
            <Text style={styles.subTitle}>Données de Bébé</Text>
            <Text>Indiquez ici les principales informations</Text>
            <Text>concernant votre Bébé comme son lieu</Text>
            <Text>et sa date de naissance ainsi que son</Text>
            <Text>médecin traitant.</Text>
            <TouchableOpacity
              style={styles.miniButton}
              onPress={() => navigation.navigate('BabyProfilePage')}
            >
              <Text style={styles.miniButtonText}>Ajouter</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.recordsBox}>
          <View style={styles.heightBox}>
            <Text style={styles.subTitle}>Taille</Text>
            <Text style={styles.heightWeightBoxText}>
              {baby.height}
              {' '}
              cm
            </Text>
            <TouchableOpacity
              style={styles.miniButton}
              onPress={() => navigation.navigate('BabyRecordsPage')}
            >
              <Text style={styles.miniButtonText}>Ajouter</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.weightBox}>
            <Text style={styles.subTitle}>Poids</Text>
            <Text style={styles.heightWeightBoxText}>
              {baby.weight}
              {' '}
              kg
            </Text>
            <TouchableOpacity
              style={styles.miniButton}
              onPress={() => navigation.navigate('BabyRecordsPage')}
            >
              <Text style={styles.miniButtonText}>Ajouter</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('MyProfilePage')}
        >
          <LinearGradient
            colors={['#F178B6', '#EF5DA8']}
            style={styles.button}
          >
            <Text style={styles.buttonText}>modifier mes données</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
