import Loader from './index.js';
import React from 'react';
import { mount } from 'enzyme';

describe('Loader', () => {
  it('renders', () => {
    const wrapper = mount(
      <Loader />
    );
    expect(wrapper.find('.loader-wrapper').exists()).toEqual(true);
  });
});