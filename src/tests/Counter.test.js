// import necessary react testing library helpers here
import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter/>)
})

test('renders counter message', () => {
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText('+'));
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('-'));
  expect(screen.getByTestId('count')).toHaveTextContent('-1');
});
