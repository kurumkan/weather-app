import NotFound from '../index.js';
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';

describe('NotFound', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});