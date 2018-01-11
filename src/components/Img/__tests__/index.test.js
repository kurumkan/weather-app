import Img from '../index.js';
import React from 'react';
import renderer from 'react-test-renderer';
import ImgPlaceholder from 'images/image-placeholder.jpg';
import ImgToLoad from 'images/image-to-load.jpg';

describe('Img', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Img
        imageUrl={ImgToLoad}
        width="100%"
        placeholder={ImgPlaceholder}
      />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});