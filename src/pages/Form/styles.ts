import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;

  position: relative;
`;

export const WallPaper = styled.div`
  width: 100%;
  height: 40%;

  padding: 0 15%;

  background: #328827;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;

  color: #ffffff;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  line-height: 20px;

  color: #f2f2f2;
`;

export const FormContainer = styled.form`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  border-radius: 14px;

  background-color: #ffffff;
  padding: 25px;

  border: 1px solid #f2f2f2;

  position: relative;
  right: 0;
  top: 80px;

  & > * {
    width: 400px;
  }
`;
