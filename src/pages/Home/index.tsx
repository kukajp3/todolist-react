import { FormHandles } from '@unform/core';
import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Input';
import TodoList from '../../components/TodoList';
import Button from '../../components/Button';

import ValidationErrors from '../../utils/ValidationErrors';

import { useTodos } from '../../hooks/todos';

import { Container } from './styles';

const Home: React.FC = () => {
  const { addTodo } = useTodos();

  const [inputText, setInputText] = useState('');

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          todo: Yup.string().min(5, 'Mínimo 5 dígitos'),
        });

        await schema.validate(data, { abortEarly: false });

        addTodo({ id: Math.random(), name: data.todo, completed: false });

        setInputText('');
      } catch (err) {
        const errors = ValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [addTodo],
  );

  const handleChange = useCallback((data) => {
    setInputText(data.target.value);
  }, []);

  return (
    <Container>
      <h1>📝 TodoList 📝</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="todo"
          value={inputText}
          onChange={handleChange}
          placeholder="Informe o Todo"
        />
        <Button type="submit">Adicionar</Button>

        <TodoList />
      </Form>
    </Container>
  );
};

export default Home;
