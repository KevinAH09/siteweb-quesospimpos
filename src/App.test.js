import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site brand', () => {
  render(<App />);
  const brand = screen.getByText('Quesos Pimpos', { selector: '.brand' });
  expect(brand).toBeInTheDocument();
});
