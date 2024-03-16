import React, { Component } from 'react';
import './App.css';
import HeaderList from './components/HeaderList';
import FooterList from './components/FooterList';
import { SectionFirst } from './components/SectionsList';


class App extends Component {
  render(){
    return (
      <>
      <HeaderList/>
      <SectionFirst/>
      <FooterList/>
      </>
    )
  }
}

export default App;