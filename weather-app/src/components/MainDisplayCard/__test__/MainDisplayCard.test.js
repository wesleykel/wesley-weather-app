import { render, screen } from '@testing-library/react';
import MainDisplayCard from '../MainDisplayCard';


it('renders Main Display Card', () => {
    render(<MainDisplayCard />);
    const currentTemp = screen.getByTestId("displayCard");
    expect(currentTemp).toBeInTheDocument();
     
  });

/*
it('renders currentTemp correctly when passed as a prop', () => {
  render(<MainDisplayCard currentTemp={20} />);
  const currentTemp = screen.getByText(/20/i);
  expect(currentTemp).toBeInTheDocument();
  
  
});

it('renders high temp correctly when passed as a prop', () => {
  render(<MainDisplayCard high={30} />);
  const highTemp = screen.getByText(/30/i);
  expect(highTemp).toBeInTheDocument();

  })


  it('renders low temp correctly when passed as a prop', () => {
    render(<MainDisplayCard low={30} />);
    const lowTemp = screen.getByText(/30/i);
    expect(lowTemp).toBeInTheDocument();
  
    })

    it('renders  description correctly when passed as a prop', () => {
        render(<MainDisplayCard description={"Really Cold"} />);
        const description = screen.getByText(/really cold/i);
        expect(description).toBeInTheDocument();
      
        })*/
