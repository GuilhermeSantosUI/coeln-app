import { Form } from '@unform/web';
import styled from 'styled-components';
import { appearFromTop } from '../../components/BasePage';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;

  animation: ${appearFromTop} 1s;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    gap: 4rem;

    text-align: center;
    overflow: hidden;

    padding: 0 16px;
  }
`;

export const ContentSection = styled.section``;

export const ContentTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
`;

export const ContentSubtitle = styled.p`
  margin-top: 10px;

  line-height: 20px;
  color: #8c8c8c;
`;

export const ContentForm = styled(Form)`
  width: 350px;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 10px;

  @media only screen and (max-width: 570px) {
    width: 100%;
    max-width: 350px;
  }
`;

export const FloatingFooter = styled.div`
  display: flex;
  flex-direction: row;

  position: absolute;
  bottom: 25px;

  padding: 10px;
  gap: 25px;

  background: #f2f2f2;
  border-radius: 50px;

  @media only screen and (max-width: 570px) {
    bottom: 0px;

    width: 100%;

    border-radius: 0;
  }
`;
