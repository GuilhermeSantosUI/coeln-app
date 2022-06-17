import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hooks';
import Routes from './routes';
import Global from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
        <Global />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
