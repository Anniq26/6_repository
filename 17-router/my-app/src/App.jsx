import React from "react";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import router from "./router";
import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.App}>
      <RouterProvider router = {createBrowserRouter(router)} />
    </div>
  )
}

export default App;