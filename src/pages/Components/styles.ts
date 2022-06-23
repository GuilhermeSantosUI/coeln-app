import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-flow: column;
`;

export const WallpaperContainer = styled.div`
  width: 100%;
  height: 250px;

  padding: 25px;

  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  position: relative;

  background-color: #328827;
  color: #e6f3ef;
`;

export const WallpaperSubtitle = styled.p`
  font-size: 14px;
  line-height: 14px;

  margin-bottom: 10px;
`;

export const WallpaperTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
`;

export const ComponentName = styled.p`
  font-weight: 500;
  font-size: 26px;
  line-height: 27px;

  margin-top: 25px;

  color: #232326;
`;

export const ComponentAbout = styled.p`
  font-size: 15px;
  line-height: 15px;

  margin-top: 6px;

  color: #8c8c8c;
`;

export const AsideHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NoteContainer = styled.div`
  width: 100%;
  padding: 15px;

  & > div:nth-child(1) {
    color: #e6f3ef;
  }

  & > div:nth-child(2) {
    color: #ffffff;
  }
`;
