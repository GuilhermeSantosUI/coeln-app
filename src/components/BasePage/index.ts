import styled from 'styled-components';

export const Separator = styled.div``;

export const MainContent = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;

  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const Section = styled.section`
  width: 60%;

  padding: 25px;

  border-left: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;

  @media only screen and (max-width: 900px) {
    border-left: 0;
  }

  @media only screen and (max-width: 570px) {
    width: 100%;
    border: 0;
  }
`;

export const Aside = styled.aside`
  width: 40%;
  padding: 25px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  @media only screen and (max-width: 570px) {
    display: none;
  }
`;

export const AsideTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  color: #232326;
`;
