import React from "react";
import theWitcher from '../style/3.webp'; 
import styles from '../styles.module.css';
import { Link, NavLink } from "react-router-dom";


const  MainPage = () => {
    return (
        <div className={styles.mainpagediv}>

            <h1 className={styles.mainpageh1}>THE WITCHER</h1>
            <img className={styles.mainpageimg} src={theWitcher} alt="The Witcher" />
        </div>
    )
}

export default MainPage