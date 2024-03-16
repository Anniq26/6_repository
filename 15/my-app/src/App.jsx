import React, { Component } from 'react';
import './App.css';
import HeaderList from './components/HeaderList';
import FooterList from './components/FooterList';
import { SectionFirst } from './components/SectionsList';
import ToggleBtn from './hooks/useToggleTheme';


class App extends Component {
  render(){
    return (
      <>
      <HeaderList/>
      <ToggleBtn/>
      <SectionFirst/>
      <FooterList/>
      </>
    )
  }
}

export default App;