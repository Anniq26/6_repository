
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from '../styles.module.css';
import FooterList from '../components/FooterList';

const LinkLayout: React.FC = () => {
    return (
        <div>
            <div className={styles.linksstyle}>
                <Link className={styles.link} to={'/main'}>Home</Link>
                <Link className={styles.link} to={'/about'}>About</Link>
                <Link className={styles.link} to={'/facts'}>Facts</Link>
            </div>
            <Outlet />
            <FooterList />
        </div>
    );
};

export default LinkLayout;
