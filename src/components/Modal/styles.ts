import styled from 'styled-components';
import { appearFromTop } from '../BasePage';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(217, 217, 217, 0.3);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;

  animation: ${appearFromTop} 1s;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 10px;
  right: 10px;

  padding: 0.3rem;
`;

export const HeaderText = styled.div`
  color: #fff;
  align-self: center;
  color: lightgray;
`;

export const Content = styled.div`
  padding: 25px;
  max-height: 30rem;

  overflow-x: hidden;
  overflow-y: auto;

  text-align: center;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

export const ConfirmationButtons = styled.div`
  width: 100%;
  padding-top: 15px;

  border-top: 1px solid #f2f2f2;

  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const AppIcon = styled.img``;

export const TitleMessage = styled.p`
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;

  color: #232326;
`;

export const Message = styled.p`
  width: 320px;

  margin-bottom: 10px;
  line-height: 20px;

  color: #8c8c8c;
`;
