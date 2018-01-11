import Alert from '../index.js';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Alert', () => {
  it('renders with error message', () => {
    const rendered = renderer.create(
      <Alert message="error message" />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('does not render', () => {
    const rendered = renderer.create(
      <Alert />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});