import styled, { css } from 'styled-components';

interface ContentProps {
  completed: boolean;
}

export const Subtitle = styled.h2`
  margin-top: 20px;
  text-align: center;
  font-size: 35px;
`;

export const Container = styled.div`
  margin: 30px 0;
  padding: 10px;
  flex-direction: column;
  display: flex;
  border-radius: 4px;
  height: 55vh;
  background: #0d1024;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  color: #0d1024;
  font-size: 18px;
  font-weight: 500;
  padding: 4px;
  margin: 4px 0;
  border: solid 2px #e9e9f0;
  border-radius: 4px;
  background: #e9e9f0;

  ${(props) =>
    props.completed &&
    css`
      text-decoration: line-through;
      color: #797980;
      opacity: 0.5;

      #done {
        display: none;
      }
    `}

  span {
    flex: 1;
    overflow-x: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  svg {
    cursor: pointer;
  }
`;
