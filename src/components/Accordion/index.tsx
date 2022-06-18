import { ButtonHTMLAttributes, useEffect, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import Button from '../Button';
import * as C from './styles';

interface AccordionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  data: Array<{
    id: string;
    question: string;
    answer: string;
    goTo?: string;
  }>;
  // eslint-disable-next-line no-unused-vars
  handleGoTo?(to: string): void;
  comesFrom?: string;
}

function Accordion({ data, handleGoTo, comesFrom, ...rest }: AccordionProps) {
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    if (comesFrom) {
      (function handleRenderComingFrom() {
        data.forEach((res) => {
          if (res.question === comesFrom) setSelected(res.id);
        });
      })();
      return;
    }

    setSelected(data[0].id);
  }, [data]);

  function handleToggle(id: string) {
    setSelected(id);
  }

  function handleSetSection(value: string) {
    handleGoTo?.(value);
  }

  return (
    <C.AccordionContainer>
      {data.map((item) => (
        <div key={item.id}>
          <C.AccordionHeaderSection
            onClick={() => handleToggle(item.id)}
            unselected={selected !== item.id}>
            <C.HeaderSectionTitle>{item.question}</C.HeaderSectionTitle>
            <span>
              {selected === item.id ? (
                <FiMinus size={24} color="#e6f3ef" />
              ) : (
                <FiPlus size={24} color="#328827" />
              )}
            </span>
          </C.AccordionHeaderSection>

          {selected === item.id ? (
            <C.ContentSection>
              <C.SectionSubtitle>{item.answer}</C.SectionSubtitle>

              {item.goTo && (
                <Button
                  loading={false}
                  colorStyle="tined"
                  size="small"
                  onClick={() => handleSetSection(item.question)}
                  {...rest}>
                  Ir para {item.question.toLowerCase().split(' ')[0]}
                </Button>
              )}
            </C.ContentSection>
          ) : null}
        </div>
      ))}
    </C.AccordionContainer>
  );
}

export default Accordion;
