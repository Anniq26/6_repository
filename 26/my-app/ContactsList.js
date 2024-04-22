import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Row from './Row'


renderItem=({ item }) => <Row name={item.name} phone={item.phone}/>

const renderSectionHeader = (obj) => <Text>{obj.section.title}</Text>

const ContactsList = ({ contacts }) => {
    const contactsByLetters = contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase();
        return{
            ...obj,
            [firstLetter]: [...ContactsList(obj[firstLetter] || {}), contact],
        };
    }, {})
    
    if (!contacts) {
        return null;
      }

    const sections = Object.keys(contactsByLetters)
    .sort()
    .map((letter) => ({
        title: letter,
        data: contactsByLetters[letter],
    }))

  return (
  <FlatList 
  data={contacts} 
  renderItem={renderItem}
  showsVerticalScrollIndicator={true}
  />
)
}

export default ContactsList;

const styles = StyleSheet.create({})