import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import Heading from '.';

it('should render Heading with text COELN APP', () => {
  render(<Heading>COELN APP</Heading>);
  const heading = screen.getByRole('heading', { name: /COELN APP/ });
  expect(heading).toBeInTheDocument();
});
