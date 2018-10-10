import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NotFound from './../../components/NotFound';

test('should render Header Component correctly', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<NotFound />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});