import { render, screen } from '@testing-library/react';
import Heading from '../Heading';


test('renders learn react link', () => {
  render(<Heading title={"Weather App"}/>);
  const linkElement = screen.getByText(/weather app/i);
  expect(linkElement).toBeInTheDocument();
});