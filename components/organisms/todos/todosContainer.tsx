import { Todo } from '@prisma/client';
import { useEffect, useState } from 'react';
import { Todos } from './todos';

const fetchTodos = async (): Promise<Array<Todo>> => {
  const response = await fetch('/api/todos');
  const data = await response.json();
  return data;
};

export const TodosContainer = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  useEffect(() => {
    fetchTodos().then((todos) => setTodos(todos));
  }, []);

  return <Todos todos={todos}></Todos>;
};
