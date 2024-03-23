import React from 'react';
import styles from '../styles.module.css';

const FooterItems = [
    {id:1, title:'2024 Witcher'},
    {id:2, title:'497 Evergreen Rd. Roseville, CA 95673'}
]

const FooterList = () => (

    <div className={styles.footer} > 
        {FooterItems.map(item => (
            <p key={item.id} className={styles.footeritems}>{item.title}</p>
        ))}
    </div>
)

export default FooterList