import { useState } from 'react';
import Button from '../../components/Button';
import Forgot from './Forgot';
import In from './In';

import * as C from './styles';

function SignIn() {
  const [value, setValue] = useState(true);

  return (
    <C.Container>
      {value ? <In /> : <Forgot />}

      <C.FloatingFooter>
        <Button
          loading={false}
          size="medium"
          colorStyle="filled"
          onClick={() => setValue(true)}>
          Logar no App
        </Button>

        <Button
          loading={false}
          size="medium"
          colorStyle="tined"
          onClick={() => setValue(false)}>
          Recuperar senha
        </Button>
      </C.FloatingFooter>
    </C.Container>
  );
}

export default SignIn;
