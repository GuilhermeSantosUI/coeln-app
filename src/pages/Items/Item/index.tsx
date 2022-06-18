import { useEffect, useState } from 'react';
import { FiEdit3, FiSettings, FiTrash } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import {
  Aside,
  AsideTitle,
  DropDownButton,
  DropDownItems,
  DropDownMenuContainer,
  DropDownTitle,
  MainContent,
  Section,
} from '../../../components/BasePage';
import Header from '../../../components/Header';
import OptionButton from '../../../components/OptionButton';
import Goback from '../../../components/Sidebar/Goback';
import api from '../../../services/api';
import { FlowSection } from '../../MainPage/styles';
import * as C from '../styles';

function Item() {
  const { id } = useParams();

  const [item, setItem] = useState<any>();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    (async function handleGet() {
      const { data } = await api.get(`/itens/${id}`);
      setItem(data);
    })();
  }, [id]);

  return (
    <C.Container>
      <Header />

      <MainContent>
        <Goback />

        <FlowSection>
          <Section>
            <C.WallpaperContainer>
              <C.WallpaperSubtitle>Tipo:</C.WallpaperSubtitle>
              <C.WallpaperTitle>{item?.componente.tipo.nome}</C.WallpaperTitle>
            </C.WallpaperContainer>

            <C.ComponentName>{item?.componente.nome}</C.ComponentName>
            <C.ComponentAbout>
              {item?.componente.descricao !== '--'
                ? item?.componente.descricao
                : 'Sem descricao'}
            </C.ComponentAbout>
          </Section>

          <Aside>
            <C.AsideHeader>
              <AsideTitle>
                Mais informações <br />
                sobre o item:
              </AsideTitle>

              <DropDownMenuContainer>
                <OptionButton onClick={() => setToggle(!toggle)}>
                  <FiSettings size={20} color="#8C8C8C" />
                </OptionButton>

                <DropDownItems show={toggle}>
                  <DropDownButton>
                    <FiEdit3 size={20} color="#000000" />
                    <DropDownTitle>Editar</DropDownTitle>
                  </DropDownButton>

                  <DropDownButton>
                    <FiTrash size={20} color="#000000" />
                    <DropDownTitle>Deletar</DropDownTitle>
                  </DropDownButton>
                </DropDownItems>
              </DropDownMenuContainer>
            </C.AsideHeader>
          </Aside>
        </FlowSection>
      </MainContent>
    </C.Container>
  );
}

export default Item;
