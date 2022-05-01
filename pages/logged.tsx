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
    <Container py="64px">
      <Center>
        <Flex flexDirection={'column'}>
          <Text mb="24px"> Welcome back {session?.user?.name}! 🖐️</Text>
          <Button onClick={() => signOut()}>Logout</Button>
          <TodoCreator
            onTodoCreated={() => setRefreshTodoToken(Math.random().toString())}
          />
          <TodosContainer refreshTodoToken={refreshTodoToken} />
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
