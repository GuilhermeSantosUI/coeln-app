import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
}

function Heading({ children }: HeadingProps) {
  return <h1>{children}</h1>;
}

export default Heading;
