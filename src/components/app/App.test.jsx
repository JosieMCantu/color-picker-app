import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe.skip('App component', () => {
  afterEach(() => cleanup());
  it.skip('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
