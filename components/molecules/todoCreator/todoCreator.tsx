import { Flex, Heading, IconButton, Input } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import React from 'react';

type TodoCreatorProps = {
  onTodoCreated: () => void;
};

export const TodoCreator: React.FC<TodoCreatorProps> = ({ onTodoCreated }) => {
  const [title, setTitle] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

  const onCreate = () => {
    setLoading(true);

    fetch('/api/todo', {
      method: 'POST',
      body: JSON.stringify({
        title,
      }),
    })
      .then(() => {
        onTodoCreated();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Flex flexDirection={'column'} py="16px" mt="144px">
      <Heading size="md" mb="8px">
        Create Todo
      </Heading>
      <Flex>
        <Input
          placeholder="Something to do..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <IconButton
          aria-label="Create todo"
          icon={<AddIcon />}
          onClick={onCreate}
          ml="8px"
          variant={'solid'}
          colorScheme="blue"
          isLoading={isLoading}
        ></IconButton>
      </Flex>
    </Flex>
  );
};
