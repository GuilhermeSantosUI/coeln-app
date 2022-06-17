import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import Button from '../Button';
import { Data } from './Data';
import * as C from './styles';

function Accordion() {
  const [selected, setSelected] = useState<any>();

  function handleToggle(i: number) {
    if (selected === i) {
      setSelected(null);
    }

    setSelected(i);
  }

  return (
    <C.Container>
      {Data.map((item, index) => (
        <div key={item.id}>
          <C.AccordionHeaderSection
            onClick={() => handleToggle(index)}
            unselected={selected !== index}>
            <C.HeaderSectionTitle>{item.question}</C.HeaderSectionTitle>
            <span>
              {selected === index ? (
                <FiMinus size={24} color="#e6f3ef" />
              ) : (
                <FiPlus size={24} color="#328827" />
              )}
            </span>
          </C.AccordionHeaderSection>

          {selected === index ? (
            <C.ContentSection>
              <C.SectionSubtitle>{item.answer}</C.SectionSubtitle>

              <Button loading={false} colorStyle="tined" size="small">
                Ir para {item.question.toLowerCase()}
              </Button>
            </C.ContentSection>
          ) : null}
        </div>
      ))}
    </C.Container>
  );
}

export default Accordion;
