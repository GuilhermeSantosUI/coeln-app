import styled from 'styled-components';
import {
  appearFromBottom,
  appearFromRight,
  fadeIn,
} from '../../../components/BasePage';

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
