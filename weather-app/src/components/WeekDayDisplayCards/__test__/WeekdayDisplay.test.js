import { render, screen } from '@testing-library/react';
import WeekDayDisplayCard from '../WeekDayDisplay';


it('renders day description correctly when passed as a prop', () => {
    render(<WeekDayDisplayCard day={"Monday"} />);
    const description = screen.getByText("Monday");
    expect(description).toBeInTheDocument();
  
    })


it('renders high description correctly when passed as a prop', () => {
    render(<WeekDayDisplayCard high={55} />);
    const description = screen.getByText(55);
    expect(description).toBeInTheDocument();
  
    })


    it('renders low description correctly when passed as a prop', () => {
        render(<WeekDayDisplayCard low={5} />);
        const description = screen.getByText(5);
        expect(description).toBeInTheDocument();
      
        })
    
