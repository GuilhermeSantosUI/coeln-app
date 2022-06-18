import styled, { css } from 'styled-components';

interface Props {
  unselected: boolean;
}

export const AccordionContainer = styled.div`
  width: 100%;
  background: #328827;
`;

export const HeaderSectionTitle = styled.p`
  font-size: 18px;
  line-height: 24px;

  color: #e6f3ef;
`;

export const SectionSubtitle = styled.p`
  width: 100%;
  font-size: 16px;
  line-height: 24px;

  color: #e6f3ef;
`;

export const AccordionHeaderSection = styled.header<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  user-select: none;
  padding: 25px;

  ${(props) =>
    props.unselected &&
    css`
      background: #e6f3ef;

      & > p {
        color: #328827;
      }
    `}
`;

export const ContentSection = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 15px;

  border-top: 1px solid #f2f2f2;

  padding: 15px;

  transition: all 0.6s;
  padding: 25px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  color: #e6f3ef;
`;
