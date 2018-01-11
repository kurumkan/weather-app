import Header from '../index.js';
import React from 'react';
import { mount } from 'enzyme';

describe('Header', () => {
  let mockCallback;

  beforeEach(() => {
    mockCallback = jest.fn();
  });

  it('renders links for unauth user', () => {
    const wrapper = mount(
      <Header
        authenticated={false}
        username=""
        signoutUser={mockCallback}
      />
    );
    const links = wrapper.find('a');
    expect(links.length).toBe(2);
    expect(links.at(0).text()).toBe('Signin');
    expect(links.at(1).text()).toBe('Signup');
  });

  it('renders links for auth user', () => {
    const wrapper = mount(
      <Header
        authenticated={true}
        username="john doe"
        signoutUser={mockCallback}
      />
    );
    const links = wrapper.find('a');
    expect(links.length).toBe(3);
    expect(links.at(0).text()).toBe('Home');
    expect(links.at(1).text()).toBe('Profile Edit');
    expect(links.at(2).text()).toBe('Signout');
  });
});