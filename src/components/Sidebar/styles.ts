import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  min-width: 80px;
  max-width: 80px;

  padding: 25px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 38px;

  @media only screen and (max-width: 900px) {
    max-width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    border-top: 1px solid #f2f2f2;
  }
`;

export const NavButton = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`;

export const NavIconContainer = styled.div`
  padding: 3px 16px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  background: #e6f3ef;
  border-radius: 30px;
`;

export const NavTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;

  color: #232326;
`;
