import { Flex, Heading } from '@chakra-ui/react';
import { Todo } from '@prisma/client';
import React from 'react';

type TodosProps = {
  todos: Array<Todo>;
};

export const Todos = ({ todos }: TodosProps) => {
  return (
    <>
      <Heading size="md" mb="16px" mt="24px">
        Todos
      </Heading>
      {todos.map((todo) => {
        return <Flex key={todo.id}>{todo.title}</Flex>;
      })}
    </>
  );
};
