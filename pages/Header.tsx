import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.scss'

const Header :NextPage = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_title}>
                <Link href="/">
                    <a>HamachanのPortFolio</a>
                </Link>
            </div>
            <div className={styles.heder_right}>
                <Link href="/MovieClip">
                    <a>Myself</a>
                </Link>
                <Link href="/MovieClip">
                    <a>Chat</a>
                </Link>
                <Link href="/MovieClip">
                    <a>MovieClip</a>
                </Link>
            </div>
        </div>
    )
}

export default Header