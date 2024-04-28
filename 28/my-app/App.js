import React, { useState } from 'react';
import { Button, SafeAreaView } from 'react-native';
import ContactsList from './ContactsList';
import SearchBar from './SearchBar';
import contacts, { compareNames } from './contacts';

const App = () => {
  const [showContacts, setShowContacts] = useState(false);
  const [sortedContacts, setSortedContacts] = useState(contacts);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleContacts = () => {
    setShowContacts((prev) => !prev);
  };

  const sort = () => {
    setSortedContacts((prev) => [...prev.sort(compareNames)]);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(text.toLowerCase())
    );
    setSortedContacts(filteredContacts);
  };

  return (
    <SafeAreaView>
      <Button title="Toggle contacts" onPress={toggleContacts} />
      <Button title="Sort" onPress={sort} />
      {showContacts && (
        <>
          <SearchBar onChangeText={handleSearch} />
          <ContactsList contacts={sortedContacts} />
        </>
      )}
    </SafeAreaView>
  );
};

export default App;
