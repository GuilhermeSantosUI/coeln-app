import { v4 as uuid } from 'uuid';

const dataRequestPlugin = [
  {
    id: uuid(),
    question: 'Cursos',
    answer:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    goTo: '/request/plugins',
  },
  {
    id: uuid(),
    question: 'Turmas',
    answer:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    goTo: '/request/plugins',
  },
];

export default dataRequestPlugin;
