import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('<Header />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Header />);
    const header = getByTestId('Header');

    expect(header).toBeInTheDocument();
  });

  it('Menu links `.l-header__menu-item`s length to be more than 0', () => {
    const { getByTestId } = render(<Header />);
    const menu = getByTestId('Menu');

    const menuLinksLength = menu.getElementsByClassName('l-header__menu-link').length
    expect(menuLinksLength).toBeGreaterThan(0);
  });
});