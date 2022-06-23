import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #f2f2f2;

  padding: 25px;
`;

export const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: 570px) {
    & > :nth-child(2) {
      display: none;
    }
  }
`;

export const HeaderRightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const TouchArea = styled.button`
  padding: 4px;
  background-color: transparent;
  cursor: auto;

  display: flex;
  align-items: center;

  @media screen and (max-width: 570px) {
    cursor: pointer;
  }
`;

export const Logo = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;

  color: #232326;
`;

export const Subtitle = styled.p`
  font-size: 15px;
  line-height: 15px;

  color: #8c8c8c;
`;

export const Username = styled.p`
  font-weight: 500;
  font-size: 16px;

  margin-top: 6px;

  color: #232326;
`;
