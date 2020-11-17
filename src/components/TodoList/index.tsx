import React, { useCallback, useContext } from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import { Container, Content, Subtitle } from './styles';

import TodosContext from '../../hooks/TodosContext';

const TodoList: React.FC = () => {
  const { todos, setTodos } = useContext(TodosContext);

  const handleDone = useCallback(
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

  const handleDelete = useCallback(
    (id: number) => {
      const todosUpdated = [...todos].filter((el) => el.id !== id);

      localStorage.setItem('todos', JSON.stringify(todosUpdated));

      setTodos(todosUpdated);
    },
    [setTodos, todos],
  );

  if (todos.length > 0) {
    return (
      <>
        <Subtitle>O que temos pra hoje?</Subtitle>
        <Container>
          {todos.map((todo) => {
            return (
              <Content key={todo.id} completed={todo.completed}>
                <span>{todo.name}</span>
                <MdDone
                  onClick={() => handleDone(todo.id)}
                  id="done"
                  color="04d361"
                  size={25}
                />
                <MdDelete
                  onClick={() => handleDelete(todo.id)}
                  color="d43f3f"
                  size={25}
                />
              </Content>
            );
          })}
        </Container>
      </>
    );
  }

  return null;
};

export default TodoList;
