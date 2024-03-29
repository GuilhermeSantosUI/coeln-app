import styled from 'styled-components';

export const ListContainer = styled.div`
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

export const AvatarContainer = styled.div`
  width: 100%;
  max-width: 340px;

  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  color: #232326;
`;

export const Subtitle = styled.div`
  font-size: 12px;
  line-height: 14px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  margin-bottom: 6px;

  color: #8c8c8c;
`;

export const RightSeparator = styled.div`
  width: 100%;
  max-width: 280px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  @media only screen and (max-width: 1200px) {
    justify-content: flex-end;

    &:nth-child(2) > button:nth-child(3),
    svg:nth-child(2) {
      display: none;
    }
  }
`;
