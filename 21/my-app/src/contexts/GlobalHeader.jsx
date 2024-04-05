import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

const translations = {
  en: {
    header: 'Global Header',
    login: 'Login',
    logout: 'Logout',
  },
  ka: {
    header: 'გლობალური ჰედერი',
    login: 'შესვლა',
    logout: 'გამოსვლა',
  },
};

export const GlobalStateProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleLogin = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'ka' : 'en'));
  };

  return (
    <GlobalStateContext.Provider value={{ isLoggedIn, toggleLogin, language, toggleLanguage }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);

const GlobalHeader = () => {
  const { isLoggedIn, toggleLogin, language, toggleLanguage } = useGlobalState();
  const translate = key => translations[language][key];

  return (
    <header>
      <h1>{translate('header')}</h1>
      <button onClick={toggleLogin}>
        {isLoggedIn ? translate('logout') : translate('login')}
      </button>
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'ქართული' : 'English'}
      </button>
    </header>
  );
};

export default GlobalHeader;
