import { DeleteIcon } from '@chakra-ui/icons';
import { Checkbox, Flex, Heading, IconButton, Input } from '@chakra-ui/react';
import { Todo } from '@prisma/client';
import React from 'react';

type TodosProps = {
  todos: Array<Todo>;
  onTodoBlur: (todoId: Todo['id'], newTitle: Todo['title']) => Promise<void>;
  onTodoCompleteToggle: (
    todoId: Todo['id'],
    isCompleted: Todo['isCompleted']
  ) => Promise<void>;
  onTodoDelete: (todoId: Todo['id']) => Promise<void>;
};

export const Todos = ({
  todos,
  onTodoBlur,
  onTodoCompleteToggle,
  onTodoDelete,
}: TodosProps) => {
  return (
    <>
      <Heading size="md" mb="16px" mt="24px">
        Todos
      </Heading>
      {todos.map((todo) => {
        return (
          <Flex key={todo.id} my="4px" role={'group'}>
            <Input
              defaultValue={todo.title}
              variant={'unstyled'}
              readOnly={todo.isCompleted}
              my="4px"
              textDecoration={todo.isCompleted ? 'line-through' : 'none'}
              color={todo.isCompleted ? 'gray.500' : 'gray.800'}
              onBlur={(event) => {
                if (todo.title === event.target.value) {
                  return;
                }
                onTodoBlur(todo.id, event.target.value);
              }}
            />
            <Checkbox
              type="checkbox"
              isChecked={todo.isCompleted}
              onChange={(event) =>
                onTodoCompleteToggle(todo.id, event.target.checked)
              }
            />
            <IconButton
              aria-label="Delete Todo"
              icon={<DeleteIcon />}
              variant={'ghost'}
              size={'sm'}
              colorScheme={'red'}
              ml="8px"
              onClick={() => onTodoDelete(todo.id)}
              opacity={0}
              _groupHover={{ opacity: 1 }}
            />
          </Flex>
        );
      })}
    </>
  );
};
