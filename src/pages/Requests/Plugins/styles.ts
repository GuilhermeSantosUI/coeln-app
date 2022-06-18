import styled from 'styled-components';
import { appearFromLeft } from '../../../components/BasePage';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-flow: column;
`;

export const SectionContainer = styled.div`
  animation: ${appearFromLeft} 1s;
`;
