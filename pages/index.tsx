import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Hero } from '../components/molecules/hero/hero';
import { TopBar } from '../components/organisms/topBar/topBar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SuperApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />

      <Flex>
        <Hero />
      </Flex>
    </div>
  );
};

export default Home;
