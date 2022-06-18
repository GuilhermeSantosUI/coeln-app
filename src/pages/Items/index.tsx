import { FiCpu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import HeaderSection from '../../components/BasePage/HeaderSection';
import OptionButton from '../../components/OptionButton';
import * as C from '../MainPage/styles';

function Items() {
  const navigate = useNavigate();

  return (
    <C.SectionContainer>
      <HeaderSection title="Items" subtitle="Coordenadoria de eletrônica">
        <OptionButton onClick={() => navigate('/components')}>
          <FiCpu size={20} color="#8C8C8C" />
        </OptionButton>
      </HeaderSection>
    </C.SectionContainer>
  );
}

export default Items;
