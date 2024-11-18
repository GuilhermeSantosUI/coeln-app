import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { appearFromLeft } from '../../components/BasePage';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-flow: column;
`;

export const FlowSection = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const SectionContainer = styled.div`
  animation: ${appearFromLeft} 1s;
`;

export const ExpiredRequest = styled(Link)`
  width: 100%;

  cursor: pointer;

  padding: 15px 25px;

  background: #f2f2f2;
  border-top: 1px solid #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 570px) {
    padding: 15px 10px;
  }
`;

export const ForgotDays = styled.div`
  background: #c91f28;
  color: #ffffff;

  padding: 6px 16px;
  border-radius: 30px;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* after 3 line show ... */
  -webkit-box-orient: vertical;

  color: #232326;
`;

export const Subtitle = styled.p`
  font-size: 12px;
  line-height: 12px;

  margin-bottom: 6px;

  color: #8c8c8c;
`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-flow: column;
`;
