import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-flow: column;
`;

export const BeggarContainer = styled.div`
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
  font-weight: 500;
  font-size: 24px;
  line-height: 25px;

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

export const PeriodContainer = styled.div`
  background: #328827;
`;

export const PeriodHeader = styled.div`
  padding: 25px;
  background: #328827;

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

  background: #e6f3ef;
`;

export const DateTitle = styled.p`
  font-weight: 500;
  font-size: 14px;

  color: #232326;
`;
