import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

function Dashboard() {
  const navigate = useNavigate();

  async function handleSignOut() {
    localStorage.removeItem('user');
    navigate('/login');
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <Button
        loading={false}
        size="larger"
        colorStyle="filled"
        onClick={handleSignOut}>
        Entrar na plataforma
      </Button>
    </div>
  );
}

export default Dashboard;
