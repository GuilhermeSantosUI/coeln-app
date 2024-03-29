import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 27px;
`;

export const Subtitle = styled.p`
  font-size: 15px;
  line-height: 15px;

  margin-top: 6px;
  color: #8c8c8c;
`;

export const HeaderSeparator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
