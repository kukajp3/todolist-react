import React, { createContext, useCallback, useState, useContext } from 'react';

interface TodoProps {
  id: number;
  name: string;
  completed: boolean;
}

interface TodosContextProps {
  todos: TodoProps[];
  addTodo(todo: TodoProps): void;
  deleteTodo(id: number): void;
  doneTodo(id: number): void;
}

const TodosContext = createContext<TodosContextProps>({} as TodosContextProps);

export const TodosProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<TodoProps[]>(() => {
    const todosStorage = localStorage.getItem('todos');

    if (todosStorage) {
      return JSON.parse(todosStorage);
    }

    return [];
  });

  const addTodo = useCallback(
    (todo: TodoProps) => {
      const todosUpdated = [
        ...todos,
        {
          id: todo.id,
          name: todo.name,
          completed: todo.completed,
        },
      ];

      localStorage.setItem('todos', JSON.stringify(todosUpdated));

      setTodos(todosUpdated);
    },
    [setTodos, todos],
  );

  const deleteTodo = useCallback(
    (id: number) => {
      const todosUpdated = [...todos].filter((el) => el.id !== id);

      localStorage.setItem('todos', JSON.stringify(todosUpdated));

      setTodos(todosUpdated);
    },
    [setTodos, todos],
  );

  const doneTodo = useCallback(
    (id: number) => {
      const completedTodo = [...todos].map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });

      localStorage.setItem('todos', JSON.stringify(completedTodo));

      setTodos(completedTodo);
    },
    [setTodos, todos],
  );

  return (
    <TodosContext.Provider value={{ todos, addTodo, deleteTodo, doneTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export function useTodos(): TodosContextProps {
  const context = useContext(TodosContext);

  return context;
}
