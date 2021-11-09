import React from 'react';
import Link from 'next/link';
import styles from './navigation.module.css'

export default function navigation() {
    return (
        <nav>
            <Link href="/">
                <a className={styles.link}>Homepage</a>
            </Link>

            <Link href="/aboutme">
                <a style={{color: 'yellow'}}>About me</a>
            </Link>
        </nav>
    )
};
