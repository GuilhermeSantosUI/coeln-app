import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  appearFromBottom,
  appearFromLeft,
  appearFromRight,
  fadeIn,
} from '../../components/BasePage';

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

export const AdminSidebarContainer = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  overflow: hidden;
  animation: ${fadeIn} 0.6s;

  position: absolute;
  background: rgba(217, 217, 217, 0.3);
`;

export const AdminSidebar = styled.div`
  position: absolute;

  right: 0;

  display: flex;
  flex-flow: column;

  animation: ${appearFromRight} 1s;

  background-color: #ffffff;
  border-left: 1px solid #dadada;

  padding: 25px;

  z-index: 2;

  height: 100vh;
  width: 470px;

  @media only screen and (max-width: 570px) {
    width: 100%;
    height: 90%;

    border-radius: 14px 14px 0 0;
    animation: ${appearFromBottom} 1s;

    bottom: 0;
  }
`;

export const AdminHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 15px;
`;

export const AdminTitle = styled.p`
  font-size: 18px;
  line-height: 24px;

  color: #232326;
`;

export const AdminListContent = styled.div`
  width: 100%;

  flex-grow: 1;
  margin-bottom: 15px;
`;

export const AdminSidebarFooter = styled.div`
  font-size: 14px;
  line-height: 18px;

  color: #8c8c8c;
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
