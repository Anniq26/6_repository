import React, { Component } from 'react';
import './App.css';
import ClassTodo from './components/ClassTodo';
import styles from './components/styles.module.css'

function App() {
  return (
    <div className={styles.App}>
      <ClassTodo/>
    </div>
  );
}
export default App;