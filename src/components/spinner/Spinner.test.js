// eslint-disable-next-line no-unused-vars
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  test('display spinner', () => {
    const { getByTestId } = render(<Spinner/>);
    const elem = getByTestId('spinner');
    expect(elem).toBeInTheDocument();
  });
  test('spinner contains 3 elements', () => {
    const { getByTestId } = render(<Spinner/>);
    const elemment = getByTestId('spinner');
    expect(elemment.children.length).toBe(4);
  });
});
