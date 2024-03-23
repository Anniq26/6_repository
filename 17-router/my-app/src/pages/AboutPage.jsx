import React from "react"
import styles from '../styles.module.css';
import imgGeralt from '../style/4.webp';
import { Link, NavLink, Route, Router } from "react-router-dom";

const AboutPage = () => {
    return (    
        <div className={styles.aboutpagediv}>
            <h1 className={styles.abouth1}>The Witcher</h1>
            <div className={styles.aboutmaincontent}>
                <img className={styles.aboutimg} src={imgGeralt} alt="img Geralt" />
                <h5 className={styles.abouth5}>The Witcher is a fantasy drama television series
                    created by Lauren Schmidt Hissrich for Netflix. 
                    It is based on the book series of the same name 
                    by Polish writer Andrzej Sapkowski. Set on a fictional, 
                    medieval-inspired landmass known as the Continent, 
                    The Witcher explores the legend of Geralt of Rivia, 
                    Yennefer of Vengerberg and Princess Ciri. 
                    It stars Henry Cavill, Anya Chalotra, and Freya Allan.
                    The story begins with Geralt of Rivia, Crown Princess 
                    Cirilla of Cintra, and the quarter-elf sorceress Yennefer
                     of Vengerberg at different points in time, exploring 
                     formative events that shape their characters throughout 
                     the first season, before eventually merging into a single 
                     timeline.</h5>
            </div>
            
        </div>
        
    )
}

export default AboutPage