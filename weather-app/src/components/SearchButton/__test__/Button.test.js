import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';


it('renders a button with correct label', () => {
    render(<Button label={"Click me"} />);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
     
  });

  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(<Button func={handleClick} label={"Click me"}></Button>)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })