import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
  // Schedule is loaded synchronously from local JSON, so the app advances
  // straight to waiting on the weather request.
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});
