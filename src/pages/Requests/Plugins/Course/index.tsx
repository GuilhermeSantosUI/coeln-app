import { useEffect, useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import { Separator } from '../../../../components/BasePage';
import HeaderSection from '../../../../components/BasePage/HeaderSection';
import {
  AvatarContainer,
  ListContainer,
  Subtitle,
  Title,
} from '../../../../components/BasePage/ListComponents';
import OptionButton from '../../../../components/OptionButton';
import handleRandomAvatar from '../../../../components/RandomImage';
import api from '../../../../services/api';
import * as C from '../styles';

function Course() {
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    (async function handleGet() {
      const { data } = await api.get('/cursos');
      setCourses(data);
    })();
  }, []);

  return (
    <C.SectionContainer>
      <HeaderSection title="Cursos" subtitle="Coordenadoria de eletrônica" />

      {courses.map((course: any) => (
        <ListContainer key={course.id}>
          <AvatarContainer>
            {handleRandomAvatar()}

            <Separator>
              <Subtitle>Nome: </Subtitle>
              <Title>{course?.nome}</Title>
            </Separator>
          </AvatarContainer>

          <Separator>
            <OptionButton>
              <FiEdit3 size={20} color="#8c8c8c" />
            </OptionButton>

            <OptionButton>
              <FiTrash size={20} color="#8c8c8c" />
            </OptionButton>
          </Separator>
        </ListContainer>
      ))}
    </C.SectionContainer>
  );
}

export default Course;
