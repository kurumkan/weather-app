import Profile from '../index.js';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import ProfileImg from 'images/profile.jpg';

describe('Alert', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Profile
        params={{username: 'johndoe'}}
        activeUsers={['johndoe', 'joomrise']}
        firstName="John"
        gettingAUser={false}
        imageUrl={ProfileImg}
        lastName="Doe"
        username="johndoe"
        getUser={()=>{}}
      />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('should render loader', () => {
    const wrapper = mount(
      <Profile
        params={{username: 'johndoe'}}
        activeUsers={['johndoe', 'joomrise']}
        firstName="John"
        gettingAUser={true}
        imageUrl={ProfileImg}
        lastName="Doe"
        username="johndoe"
        getUser={()=>{}}
      />
    );
    expect(wrapper.find('.loader-wrapper').length).toBe(1);
  });

  it('should call getUser', () => {
    const getUser = jest.fn();
    const wrapper = mount(
      <Profile
        params={{username: 'johndoe'}}
        activeUsers={['johndoe', 'joomrise']}
        firstName="John"
        gettingAUser={true}
        imageUrl={ProfileImg}
        lastName="Doe"
        username="johndoe"
        getUser={getUser}
      />
    );
    expect(getUser).toHaveBeenCalled();
  });

  it('should render loader', () => {
    const wrapper = mount(
      <Profile
        params={{username: 'johndoe'}}
        activeUsers={['johndoe', 'joomrise']}
        firstName="John"
        gettingAUser={true}
        imageUrl={ProfileImg}
        lastName="Doe"
        username="johndoe"
        getUser={()=>{}}
      />
    );
    expect(wrapper.find('.loader-wrapper').length).toBe(1);
  });

  it('should render online status', () => {
    const wrapper = mount(
      <Profile
        params={{username: 'johndoe'}}
        activeUsers={['johndoe', 'joomrise']}
        firstName="John"
        gettingAUser={false}
        imageUrl={ProfileImg}
        lastName="Doe"
        username="johndoe"
        getUser={()=>{}}
      />
    );
    expect(wrapper.find('.status').text()).toBe('online');
  });

  it('should render offline status', () => {
    const wrapper = mount(
      <Profile
        params={{username: 'johndoe'}}
        activeUsers={['joomrise']}
        firstName="John"
        gettingAUser={false}
        imageUrl={ProfileImg}
        lastName="Doe"
        username="johndoe"
        getUser={()=>{}}
      />
    );
    expect(wrapper.find('.status').text()).toBe('offline');
  });
});