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

  openRecord: boolean;
  setOpenRecord: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideContext = createContext<SideContextData>({} as SideContextData);

export function SideProvider({ children }: SideProviderProps) {
  const [toggle, setToggle] = useState(false);
  const [openSide, setOpenSide] = useState(false);
  const [openRecord, setOpenRecord] = useState(false);

  const handleToggle = useMemo(
    () => ({
      toggle,
      setToggle,
      openSide,
      setOpenSide,
      openRecord,
      setOpenRecord,
    }),
    [toggle, setToggle, openSide, setOpenSide, openRecord, setOpenRecord],
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
