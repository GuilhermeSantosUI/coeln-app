import { ReactNode } from 'react';
import { Separator } from '..';
import * as C from './styles';

interface HeaderSectionProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

function HeaderSection({ title, subtitle, children }: HeaderSectionProps) {
  return (
    <C.Container>
      <Separator>
        <C.Title>{title}</C.Title>
        <C.Subtitle>{subtitle}</C.Subtitle>
      </Separator>

      {children}
    </C.Container>
  );
}
export default HeaderSection;
