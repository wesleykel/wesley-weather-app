import { render, screen } from '@testing-library/react';
import Heading from '../Heading';


it('renders title when passed as a prop', () => {
  render(<Heading title={"Weather App"}/>);
  const headingText = screen.getByText(/weather app/i);
  expect(headingText).toBeInTheDocument();
});