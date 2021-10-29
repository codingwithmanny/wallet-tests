// Imports
// ========================================================
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Mocks
// const windowSpy = jest.sp
const windowSpy = jest.spyOn(window, 'window', 'get');

// To Test
import App from '../App';

// Tests
// ========================================================
it('Should load the website', () => {
  // await window.ethereum.request({ method: 'eth_requestAccounts' });
  // SETUP
  windowSpy.mockImplementation(() => ({
    ethereum: {
      request: async (...data: any) => {
        console.log('hello');
      }
    }
  })) 
  // PRE

  // INIT

  // POST

  render(<App />);
  const button = screen.getByRole('button', {
    name: /Let me see your wallet!/
  });

  fireEvent.click(button);

  expect(button).toBeInTheDocument();
});