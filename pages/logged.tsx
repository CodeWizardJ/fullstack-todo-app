import { Button, Center, Container, Flex, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { getSession, signOut } from 'next-auth/react';
import React from 'react';
import { TodoCreator } from '../components/molecules/todoCreator/todoCreator';
import { TodosContainer } from '../components/organisms/todos/todosContainer';
import { UserSession } from './api/auth/[...nextauth]';

export const LoggedPage = ({ session }: { session: UserSession }) => {
  const [refreshTodoToken, setRefreshTodoToken] = React.useState('');

  return (
    <Flex background="linear-gradient(93.73deg, #FEAC5E 2.17%, #C779D0 47.86%, #4BC0C8 98.58%)">
      <Container py="64px" h="100vh" background="white">
        <Center>
          <Flex flexDirection={'column'}>
            <Text mb="24px"> Welcome back {session?.user?.name}! 🖐️</Text>
            <Button onClick={() => signOut()}>Logout</Button>
            <TodoCreator
              onTodoCreated={() =>
                setRefreshTodoToken(Math.random().toString())
              }
            />
            <TodosContainer refreshTodoToken={refreshTodoToken} />
          </Flex>
        </Center>
      </Container>
    </Flex>
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
