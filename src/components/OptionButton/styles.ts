import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  width: 36px;
  height: 36px;

  padding: 8px;

  background: transparent;

  transition: background 0.2s;

  &:hover {
    background: ${shade(0.1, '#FFFFFF')};
  }
`;
