import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const SkeletonItem = styled.div`
  background: #f2f2f2;
  background-image: linear-gradient(
    90deg,
    #e0e0e0 25%,
    #f0f0f0 50%,
    #e0e0e0 75%
  );

  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;

  ${({ width, height }: { width: string; height: string }) => `
    width: ${width || '100%'};
    height: ${height || '20px'};
  `}
`;
