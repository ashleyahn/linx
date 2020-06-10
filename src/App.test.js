import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import BackButton from './BackButton';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('back button renders', () => {
  let mockfn = jest.fn();
  const pathState = {path: "/home/cs394", setPath: mockfn}
  const { getByTestId } = render(<BackButton state = {pathState}/> );
  const backComp = getByTestId("backButton");
  fireEvent.click(backComp);
  expect(backComp).toBeInTheDocument();
}); 