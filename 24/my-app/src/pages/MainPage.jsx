import React from "react";
import theWitcher from '../style/3.webp'; 
import styles from '../styles.module.css';

const MainPage: React.FC = () => {
    return (
        <div className={styles.mainpagediv}>
            <h1 className={styles.mainpageh1}>THE WITCHER</h1>
            <img className={styles.mainpageimg} src={theWitcher} alt="The Witcher" />
        </div>
    );
}

export default MainPage;
