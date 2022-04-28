import { Button, Center, Container, Flex, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { getSession, signOut } from 'next-auth/react';
import React from 'react';

//TODO figure out deconstructed type for session
export const LoggedPage = ({ session }: any) => {
  return (
    <Container py="64px">
      <Center>
        <Flex flexDirection={'column'}>
          <Text mb="24px"> Welcome back {session.user.name}! 🖐️</Text>
          <Button onClick={() => signOut()}>Logout</Button>
        </Flex>
      </Center>
    </Container>
  );
};

export default LoggedPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
