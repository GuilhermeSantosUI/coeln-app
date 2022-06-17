import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

interface SideProviderProps {
  children: ReactNode;
}

interface SideContextData {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;

  openSide: boolean;
  setOpenSide: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideContext = createContext<SideContextData>({} as SideContextData);

export function SideProvider({ children }: SideProviderProps) {
  const [toggle, setToggle] = useState(false);
  const [openSide, setOpenSide] = useState(false);

  const handleToggle = useMemo(
    () => ({ toggle, setToggle, openSide, setOpenSide }),
    [toggle, setToggle, openSide, setOpenSide],
  );

  return (
    <SideContext.Provider value={handleToggle}>{children}</SideContext.Provider>
  );
}

export function useToggle() {
  const context = useContext(SideContext);

  if (!context) {
    throw new Error('useToggle must be used within a SideContext');
  }

  return context;
}
