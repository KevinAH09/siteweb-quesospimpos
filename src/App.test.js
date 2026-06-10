import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site brand', () => {
  render(<App />);
  const logos = screen.getAllByAltText('Quesos Pimpos');
  expect(logos.length).toBeGreaterThan(0);
  expect(logos[0]).toHaveClass('brand-logo');
});
