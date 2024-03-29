import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-flow: column;
`;

export const BeggarContainer = styled(Link)`
  width: 100%;

  padding: 25px;
  border: 1px solid #f2f2f2;

  position: relative;
`;

export const BeggarTitle = styled.p`
  font-size: 18px;
  line-height: 24px;

  margin-bottom: 35px;

  color: #328827;
`;

export const SpanName = styled.p`
  font-size: 12px;
  line-height: 12px;

  margin-bottom: 5px;

  color: #8c8c8c;
`;

export const BeggarName = styled.p`
  width: 250px;
  font-weight: 500;
  font-size: 24px;
  line-height: 25px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* after 3 line show ... */
  -webkit-box-orient: vertical;

  margin-bottom: 10px;

  color: #232326;
`;

export const Registration = styled.p`
  font-size: 16px;
  line-height: 16px;

  color: #232326;
`;

export const BeggarImage = styled.img`
  position: absolute;

  top: 25px;
  right: 25px;
`;

interface PeriodContainerProps {
  isExpired?: boolean;
}

export const PeriodContainer = styled.div<PeriodContainerProps>`
  background: #328827;

  ${(props) =>
    props.isExpired &&
    css`
      background: #c91f28;
    `}
`;

export const PeriodHeader = styled.div`
  padding: 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #f2f2f2;
`;

export const PeriodTitle = styled.p`
  font-size: 18px;
  line-height: 24px;

  color: #e6f3ef;
`;

export const PeriodDates = styled.div`
  width: 100%;
  padding: 25px;

  display: flex;

  gap: 25px;
`;

export const DateContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #e6f3ef;
`;

export const DateTitle = styled.p`
  font-weight: 500;
  font-size: 14px;

  color: #232326;
`;

export const StudentImage = styled.img`
  width: 50px;
`;

export const DateSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media only screen and (max-width: 1200px) {
    &:nth-child(2) > button:nth-child(3),
    svg:nth-child(2) {
      display: none;
    }
  }
`;

export const Date = styled.p`
  font-size: 24px;
  font-weight: 500;

  color: #232326;
`;

export const UnityComponent = styled.div`
  width: 100%;
  max-width: 250px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
