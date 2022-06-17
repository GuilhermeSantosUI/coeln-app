import { ReactNode } from 'react';
import { SideProvider } from './sideToggle';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return <SideProvider>{children}</SideProvider>;
}

export default AppProvider;
