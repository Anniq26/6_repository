import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search..."
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default SearchBar;
