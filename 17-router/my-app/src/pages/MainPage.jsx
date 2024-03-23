import React from "react";
import theWitcher from '../style/3.webp'; 
import styles from '../styles.module.css';


const  MainPage = () => {
    return (
        <div className={styles.mainpagediv}>
            <h1 className={styles.mainpageh1}>THE WITCHER</h1>
            <img className={styles.mainpageimg} src={theWitcher} alt="The Witcher" />
            <div className={styles.mainpageimgoverlay}></div>
        </div>
    )
}

export default MainPage