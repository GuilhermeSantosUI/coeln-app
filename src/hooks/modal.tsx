import { useState } from 'react';

function useModal() {
  const [isShown, setIsShown] = useState<boolean>(false);

  function handleToggle() {
    setIsShown(!isShown);
  }

  return {
    isShown,
    handleToggle,
  };
}

export default useModal;
