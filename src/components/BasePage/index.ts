import { shade } from 'polished';
import styled, { css, keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Separator = styled.div``;

export const MainContent = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  overflow-y: hidden;

  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;

    &:nth-child(2) > div {
      overflow-y: auto;
    }
  }
`;

interface SwitchProps {
  toggle?: boolean;
}

export const Section = styled.section<SwitchProps>`
  width: 60%;

  padding: 25px;

  overflow-y: auto;

  border-left: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;

  @media only screen and (max-width: 1000px) {
    border-left: 0;
  }

  @media only screen and (max-width: 570px) {
    width: 100%;
    padding: 15px;
    border: 0;
  }

  ${(props) =>
    props.toggle &&
    css`
      @media only screen and (max-width: 570px) {
        display: none;
      }
    `}
`;

export const Aside = styled.aside<SwitchProps>`
  width: 40%;
  padding: 25px;

  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 570px) {
    width: 100%;
    padding: 15px;

    animation: ${appearFromLeft} 1s;
  }

  ${(props) =>
    !props.toggle &&
    css`
      @media only screen and (max-width: 570px) {
        display: none;
      }
    `}
`;

export const AsideTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  color: #232326;
`;

export const DropDownMenuContainer = styled.div`
  position: relative;
`;

interface DropDownItemsProps {
  show: boolean;
}

export const DropDownItems = styled.div<DropDownItemsProps>`
  position: absolute;
  top: 50px;
  right: 0;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;

  opacity: 0;
  visibility: hidden;

  background: #fece0c;
  padding: 10px;

  transition: all ease-in 0.2s;

  ${(props) =>
    props.show &&
    css`
      visibility: visible;
      opacity: 1;

      animation: ${appearFromTop} 0.5s;
    `}
`;

export const DropDownButton = styled.button`
  width: 100%;
  height: 36px;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 8px;
  background: #fece0c;

  &:hover {
    background: ${shade(0.1, '#fece0c')};
  }
`;

export const DropDownTitle = styled.p`
  color: #000000;
`;

export const SearchBar = styled.input`
  padding: 11px 16px;
  gap: 10px;

  font-size: 14px;

  border: 1px solid #dadada;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;
