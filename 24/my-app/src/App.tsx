import React from "react";
import { RouterProvider, createBrowserRouter, BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for createBrowserRouter
import router from "./router";
import styles from './styles.module.css';

const App: React.FC = () => { // Specify the type of App as a functional component using React.FC
  return (
    <div className={styles.App}>
      <RouterProvider router={createBrowserRouter(router)}>
        <BrowserRouter />
      </RouterProvider>
    </div>
  );
}

export default App;
