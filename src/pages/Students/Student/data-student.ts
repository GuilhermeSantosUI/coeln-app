import { v4 as uuid } from 'uuid';

const dataStudent = [
  {
    id: uuid(),
    question: 'Pedidos ativos',
    answer: 'Não há pedidos pendentes',
    goTo: '/main-page',
  },
];

export default dataStudent;
