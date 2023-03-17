import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  max-width: 350px;

  padding: 16px 20px;
  gap: 10px;

  background: #f2f2f2;

  border: 2px solid #dadada;
  border-radius: 14px;

  &:focus {
    border-color: #328827;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;
