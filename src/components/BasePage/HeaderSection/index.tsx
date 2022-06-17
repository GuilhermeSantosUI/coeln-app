import * as C from './styles';

interface HeaderSectionProps {
  title: string;
  subtitle: string;
}

function HeaderSection({ title, subtitle }: HeaderSectionProps) {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Subtitle>{subtitle}</C.Subtitle>
    </C.Container>
  );
}
export default HeaderSection;
