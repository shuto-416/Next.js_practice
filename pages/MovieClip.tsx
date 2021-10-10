import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles  from '../styles/Movie.module.scss' 

const MovieClip :NextPage = () => {
    return(
        <div className={styles.movie_body}>
            <div className={styles.movie_title}>
                <h1>Movies are really good, aren't you?</h1>
            </div>
        </div>
    )
}

export default MovieClip