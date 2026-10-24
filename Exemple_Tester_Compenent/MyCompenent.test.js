import React from 'react';
import { shallow } from 'enzyme';
import MyCompenent from './MyCompenent';

describe('MyCompenent', () => {
  it('renders the title', () => {
    const wrapper = shallow(<MyCompenent />);
    const title = <h1>My Component</h1>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  it('increments the count when the button is clicked', () => {
    const wrapper = shallow(<MyCompenent />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.find('p').text()).toEqual('Count: 1');
  });
});
