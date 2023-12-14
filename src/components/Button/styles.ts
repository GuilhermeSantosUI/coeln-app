import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { spin } from '../BasePage';

interface ContainerProps {
  size?: 'larger' | 'medium' | 'small';
  colorStyle?: 'plain' | 'gray' | 'tined' | 'filled';
}

const buttonStyleVariations = {
  plain: css`
    background: transparent;
    color: #328827;
  `,
  gray: css`
    background: #f2f2f2;
    color: #328827;
  `,
  tined: css`
    background: #e6f3ef;
    color: #328827;
  `,
  filled: css`
    background: #328827;
    color: #ffffff;

    &:hover {
      background: ${shade(0.2, '#328827')};
    }
  `,
};

const buttonSizeVariations = {
  larger: css`
    width: 100%;
    max-width: 350px;

    padding: 16px 32px;
    border-radius: 14px;

    font-weight: 500;
    font-size: 18px;
    margin-top: 10px;
  `,
  medium: css`
    padding: 10px 22px;
    border-radius: 20px;
  `,
  small: css`
    padding: 6px 16px;
    border-radius: 30px;

    white-space: nowrap;
  `,
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  transition: background 0.2s;

  ${(props) => buttonSizeVariations[props.size || 'small']}
  ${(props) => buttonStyleVariations[props.colorStyle || 'filled']}
`;

export const Loader = styled.div`
  width: 18px;
  height: 18px;
  border: 0.12em solid rgba(0, 0, 0, 0.1);
  border-top: 0.12em solid var(--gray-100);
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;
