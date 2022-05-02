import { Flex, Heading, Input } from '@chakra-ui/react';
import { Todo } from '@prisma/client';
import React from 'react';

type TodosProps = {
  todos: Array<Todo>;
  onTodoBlur: (todoId: Todo['id'], newTitle: Todo['title']) => void;
};

export const Todos = ({ todos, onTodoBlur }: TodosProps) => {
  return (
    <>
      <Heading size="md" mb="16px" mt="24px">
        Todos
      </Heading>
      {todos.map((todo) => {
        return (
          <Flex key={todo.id}>
            <Input
              defaultValue={todo.title}
              variant={'unstyled'}
              my="4px"
              onBlur={(event) => {
                if (todo.title === event.target.value) {
                  return;
                }
                onTodoBlur(todo.id, event.target.value);
              }}
            ></Input>
          </Flex>
        );
      })}
    </>
  );
};
