
import React from 'react';
import styles from '../styles.module.css';
import { FooterItem } from './types';

const FooterItems: FooterItem[] = [
    { id: 1, title: '2024 Witcher' },
    { id: 2, title: '497 Evergreen Rd. Roseville, CA 95673' }
];

const FooterList: React.FC = () => (
    <div className={styles.footer}>
        {FooterItems.map(item => (
            <p key={item.id} className={styles.footeritems}>{item.title}</p>
        ))}
    </div>
);

export default FooterList;
