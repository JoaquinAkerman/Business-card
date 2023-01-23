import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the linkedIn button', () => {
  render(<App />);
  const linkedInButton = screen.getByText('LinkedIn');
  expect(linkedInButton).toBeInTheDocument();
});
