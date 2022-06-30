import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Administrators from '.';

describe('Administrators plugin list', () => {
  it('should render admin list component', () => {
    const { getByText } = render(<Administrators />);
    expect(getByText('Listagem de Adimnistradores')).toBeInTheDocument();
  });
});
