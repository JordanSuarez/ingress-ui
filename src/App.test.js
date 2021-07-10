import { render, screen } from '@testing-library/react';
import Missions from './pages/Missions/Missions';

test('renders learn react link', () => {
  render(<Missions />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
