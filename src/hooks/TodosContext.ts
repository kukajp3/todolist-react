import React, { createContext } from 'react';

interface TodoProps {
  id: number;
  name: string;
  completed: boolean;
}

interface TodosProps {
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

const TodosContext = createContext<TodosProps>({} as TodosProps);

export default TodosContext;
