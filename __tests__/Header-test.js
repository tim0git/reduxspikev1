import 'react-native';
import React from 'react';
import 'jest-enzyme';
import 'react-native-mock-render/mock';
import {shallow} from 'enzyme';
// import toJson from 'enzyme-to-json';
import Header from '../components/Header';

describe('<Header >', () => {
  const header = <Header />;
  it('Text conatins redux spike', () => {
    const wrapper = shallow(header);
    expect(wrapper.find('Text').at(0).props().children).toBe('Redux Spike');
  });
});
