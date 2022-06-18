import { v4 as uuid } from 'uuid';

const dataItemPlugin = [
  {
    id: uuid(),
    question: 'Observações',
    answer:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    goTo: '/item/plugins',
  },
  {
    id: uuid(),
    question: 'Tipos',
    answer:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    goTo: '/item/plugins',
  },
  {
    id: uuid(),
    question: 'Organizadores',
    answer:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    goTo: '/item/plugins',
  },
];

export default dataItemPlugin;
