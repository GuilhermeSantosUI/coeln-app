import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AppHistory from '.';

describe('AppHistory plugin list', () => {
  it('should render history app list component', () => {
    const { getByText } = render(<AppHistory />);
    expect(getByText('Listagem de Histórico')).toBeInTheDocument();
  });
});
