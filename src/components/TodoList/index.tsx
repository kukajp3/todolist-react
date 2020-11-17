import React from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import { Container, Content, Subtitle } from './styles';

import { useTodos } from '../../hooks/todos';

const TodoList: React.FC = () => {
  const { todos, deleteTodo, doneTodo } = useTodos();

  if (todos !== undefined && todos.length > 0) {
    return (
      <>
        <Subtitle>O que temos pra hoje?</Subtitle>
        <Container>
          {todos.map((todo) => {
            return (
              <Content key={todo.id} completed={todo.completed}>
                <span>{todo.name}</span>
                <MdDone
                  onClick={() => doneTodo(todo.id)}
                  id="done"
                  color="04d361"
                  size={25}
                />
                <MdDelete
                  onClick={() => deleteTodo(todo.id)}
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
