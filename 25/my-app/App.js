import React from 'react';
import { View, StyleSheet } from 'react-native';
import LandingPage from './LandingPage'; // Import the LandingPage component

const App = () => {
  return (
    <View style={styles.container}>
      {/* Render the LandingPage component */}
      <LandingPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
