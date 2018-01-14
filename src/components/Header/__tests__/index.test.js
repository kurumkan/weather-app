import Header from '../index.js';
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme';

describe('Header', () => {
  let mockCallback;

  beforeEach(() => {
    mockCallback = jest.fn();
  });

  it('renders links for unauth user', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Header
          authenticated={false}
          username=""
          signoutUser={mockCallback}
        />
      </MemoryRouter>
    );
    const links = wrapper.find('a');
    expect(links.length).toBe(2);
    expect(links.at(0).text()).toBe('Signin');
    expect(links.at(1).text()).toBe('Signup');
  });

  it('renders links for auth user', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Header
          authenticated={true}
          username="john doe"
          signoutUser={mockCallback}
        />
      </MemoryRouter>
    );
    const links = wrapper.find('a');
    expect(links.length).toBe(3);
    expect(links.at(0).text()).toBe('Home');
    expect(links.at(1).text()).toBe('Profile Edit');
    expect(links.at(2).text()).toBe('Signout');
  });

  it('calls action on signout click', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Header
          authenticated={true}
          username="john doe"
          signoutUser={mockCallback}
        />
      </MemoryRouter>
    );
    wrapper.find('.signout').find('a').simulate('click')
    expect(mockCallback).toHaveBeenCalled();
  });
});