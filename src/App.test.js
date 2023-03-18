import { render, screen } from '@testing-library/react';
import AppTwo from './advReactComponents/Test';
import App from './App';

test('renders learn react link', () => {
  render(<AppTwo />);
  const linkElement = screen.getByText("Little Lemon Restaurant");
  expect(linkElement).toBeInTheDocument();
});
