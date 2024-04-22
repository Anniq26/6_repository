import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const LandingPage = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Instagram</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Image */}
        <Image
          source={{ uri: 'https://source.unsplash.com/random' }}
          style={styles.image}
        />

        {/* Action Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3897f0',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LandingPage;
