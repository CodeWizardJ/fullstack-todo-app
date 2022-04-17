import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Hero } from '../components/molecules/hero/hero';
import { MenuItem } from '../components/molecules/menuItem/menuItem';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SuperApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex w="100%" flexDirection="row" alignContent="center" p="6px 0">
        <Text
          fontSize="36px"
          fontWeight="bold"
          lineHeight="42px"
          color="#1F79ba"
          flexGrow={1}
        >
          Todo App
        </Text>
        <HStack spacing="16px" alignContent="center">
          <MenuItem>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/product">
              <a>Product</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
          </MenuItem>
        </HStack>
        <Flex marginLeft="82px">
          <Button variant="solid" colorScheme="blue">
            Get Started
          </Button>
        </Flex>
      </Flex>

      <Flex>
        <Hero />
      </Flex>
    </div>
  );
};

export default Home;
