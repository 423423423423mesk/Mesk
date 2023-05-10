import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
    <View style={styles.imagesWrapper}>
    <Image source={require('./assets/image/logo.png')} style={styles.imageOne} />
  </View>
      <View style={styles.paragraphWrapper}>
        <Text style={styles.paragraph}>Make your self stronger than your excuses</Text>
      </View>
      <View style={styles.imagesWrapper}>
        <Image source={require('./assets/image/1@2x.jpg')} style={styles.imageTwo} />
      </View>
      <TouchableOpacity style={styles.orangeButton}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.grayButton}>
        <Text style={styles.buttonText}>Or login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageOne: {
    width: 160,
    height:160,
  },
  paragraphWrapper: {
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 32,
    textAlign: 'center',
  },
  imagesWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageTwo: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  orangeButton: {
    backgroundColor: 'orange',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 20,
  },
  grayButton: {
    backgroundColor: '#ccc',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;