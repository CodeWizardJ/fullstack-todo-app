import { Todo } from '@prisma/client';
import { useEffect, useState } from 'react';
import { Todos } from './todos';

const fetchTodos = async (): Promise<Array<Todo>> => {
  const response = await fetch('/api/todos');
  const data = await response.json();
  return data;
};

type TodosContainerProps = {
  refreshTodoToken: string;
};

export const TodosContainer: React.FC<TodosContainerProps> = ({
  refreshTodoToken,
}) => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [completeTodoToken, setCompleteTodoToken] = useState('');

  useEffect(() => {
    fetchTodos().then((todos) => setTodos(todos));
  }, [refreshTodoToken, completeTodoToken]);

  const onTodoBlur = async (todoId: Todo['id'], newTitle: Todo['title']) => {
    fetch(`/api/todo/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: newTitle,
      }),
    });
  };

  const onTodoCompleteToggle = async (
    todoId: Todo['id'],
    isCompleted: Todo['isCompleted']
  ) => {
    fetch(`/api/todo/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        isCompleted,
      }),
    }).finally(() => setCompleteTodoToken(Math.random().toString()));
  };

  return (
    <Todos
      todos={todos}
      onTodoBlur={onTodoBlur}
      onTodoCompleteToggle={onTodoCompleteToggle}
    ></Todos>
  );
};
