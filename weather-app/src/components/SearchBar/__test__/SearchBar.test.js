import { render, screen } from '@testing-library/react';
import SearchBar from "../SearchBar";

it('renders searchBar with correct place holder', () => {
    render(<SearchBar/>);
    const currentTemp = screen.getByPlaceholderText(/enter a city/i);
    expect(currentTemp).toBeInTheDocument();
    
    
  });