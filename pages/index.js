import Head from 'next/head';
import Header from '../components/Header';
import Projetos from '../components/Projetos';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fabiana Cortez | UX/UI Designer</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Header />
      <Projetos />
    </div>
  )
}
