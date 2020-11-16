import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  errored: boolean;
  filled: boolean;
  focused: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #e9e9f0;
  color: #272e38;
  border-radius: 4px;
  border: 2px solid #e9e9f0;
  padding: 8px;
  width: 100%;
  display: flex;
  align-items: center;

  ${(props) =>
    props.errored &&
    css`
      border-color: #d43f3f;
    `}

  ${(props) =>
    props.focused &&
    css`
      border-color: #fc4777;
    `}

  ${(props) =>
    props.filled &&
    css`
      border-color: #e9e9f0;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #272e38;
    font-size: 18px;
    font-weight: 500;
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #d43f3f;
    color: #fff;

    &::before {
      border-color: #d43f3f transparent;
    }
  }
`;
