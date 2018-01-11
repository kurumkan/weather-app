import Loader from './index.js';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Loader', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Loader />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});