import React from 'react';
import { shallow } from 'enzyme';

import { SignUp } from './../../components/SignUp';

let registerUser;

beforeEach(() => {
    registerUser = jest.fn();
});

test('should render signup component with errors alert', () => {
    const wrapper = shallow(<SignUp hasErrors={true} registerUser={registerUser}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render signup with no error alert', () => {
    const wrapper = shallow(<SignUp hasErrors={false} registerUser={registerUser} />);
    expect(wrapper).toMatchSnapshot();
});