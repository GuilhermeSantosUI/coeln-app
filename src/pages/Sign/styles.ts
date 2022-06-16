import styled, { keyframes } from 'styled-components';

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;

  animation: ${appearFromTop} 1s;
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

export const ContentForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const FloatingFooter = styled.div`
  display: flex;
  flex-direction: row;

  position: absolute;
  left: 50%;
  bottom: 35px;
  transform: translate(-50%, 0%);

  padding: 10px;
  gap: 25px;

  background: #f2f2f2;
  border-radius: 50px;
`;
