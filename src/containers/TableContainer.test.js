import { render, screen, fireEvent } from '@testing-library/react';

import TableContainer from "./TableContainer";

test("check if there is a label to search for", () => {
  render(<TableContainer />);
  const searchLabel = screen.getByLabelText('Search:');
  expect(searchLabel).toBeInTheDocument();
})

test("make sure that input returns the entered value", () => {
  const utils = render(<TableContainer />);
  const input = utils.getByLabelText('search-bar');
  fireEvent.change(input, { target: { value: 'Darth' } })
  expect(input.value).toBe('Darth')
})