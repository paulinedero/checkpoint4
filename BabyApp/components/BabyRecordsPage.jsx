import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { LineChart } from 'react-native-chart-kit';
import { TextInput } from 'react-native-paper';
import heightIcon from '../assets/height_icon.png';
import weightIcon from '../assets/weight_icon.png';

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
  icon: {
    marginTop: 5,
    height: 50,
    width: 50,
    marginRight: 15,
  },
  inputBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  input: {
    width: 150,
    height: 45,
    backgroundColor: '#f6f6f6',
    margin: 15,
  },
  button: {
    height: 45,
    width: 150,
    borderRadius: 24,
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

export default function BabyRecordsPage() {
  const [height, setHeight] = useState(' ');
  const [weight, setWeight] = useState(' ');
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            Taille et poids
          </Text>
        </View>
        <View>
          <LineChart
            data={{
              labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={screenWidth}
            height={250}
            yAxisLabel=""
            yAxisSuffix="cm"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#FCDDEC',
              backgroundGradientFrom: '#FCDDEC',
              backgroundGradientTo: '#FFFFFF',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(239, 93, 168, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(67, 67, 67, ${opacity})`,
              style: {
                borderRadius: 0,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#FCDDEC',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
        <View style={styles.inputBlock}>
          <TextInput
            mode="flat"
            theme={{ colors: { primary: '#F178B6' } }}
            style={styles.input}
            underlineColor="#F178B6"
            label="Taille"
            value={height}
            onChangeText={setHeight}
            left={<TextInput.Icon icon={heightIcon} />}
          />
          <LinearGradient
            colors={['#F178B6', '#EF5DA8']}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Ajouter</Text>
          </LinearGradient>
        </View>
        <View>
          <LineChart
            data={{
              labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={screenWidth}
            height={250}
            yAxisLabel=""
            yAxisSuffix="kg"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#FCDDEC',
              backgroundGradientFrom: '#FCDDEC',
              backgroundGradientTo: '#FFFFFF',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(239, 93, 168, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(67, 67, 67, ${opacity})`,
              style: {
                borderRadius: 0,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#FCDDEC',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
        <View style={styles.inputBlock}>
          <TextInput
            mode="flat"
            theme={{ colors: { primary: '#F178B6' } }}
            style={styles.input}
            underlineColor="#F178B6"
            label="Poids"
            value={weight}
            onChangeText={setWeight}
            left={<TextInput.Icon icon={weightIcon} />}
          />
          <LinearGradient
            colors={['#F178B6', '#EF5DA8']}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Ajouter</Text>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
}
