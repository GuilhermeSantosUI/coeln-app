import beggarImageOne from '../../assets/beggar-ilustration-one.png';
import beggarImageTwo from '../../assets/beggar-ilustration-two.png';
import beggarImageThree from '../../assets/beggar-ilustration-three.png';
import { StudentImage } from '../../pages/Requests/styles';

const packOfImages = [beggarImageOne, beggarImageTwo, beggarImageThree];

function handleRandomAvatar() {
  const customImage =
    packOfImages[Math.floor(Math.random() * packOfImages.length)];

  return <StudentImage src={customImage} alt="imagem-randomizada-de-aluno" />;
}

export default handleRandomAvatar;
