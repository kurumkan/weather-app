import Profile from '../index.js';
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileImg from 'images/profile.jpg';

describe('Alert', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Profile
        activeUsers={['johndoe', 'joomrise']}
        firstName="John"
        gettingAUser={false}
        imageUrl={ProfileImg}
        lastName="Doe"
        username="johndoe"
      />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});