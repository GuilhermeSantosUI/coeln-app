import { useState } from 'react';

function useModal() {
  const [isShown, setIsShown] = useState<boolean>(false);

  function handleSwitch() {
    setIsShown(!isShown);
  }

  return {
    isShown,
    handleSwitch,
  };
}

export default useModal;
