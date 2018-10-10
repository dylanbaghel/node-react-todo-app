import React from 'react';
import { shallow } from 'enzyme';

import { Login } from './../../components/Login';

let loginUser;

beforeEach(() => {
    loginUser = jest.fn();
});

test('should render login component with errors alert', () => {
    const wrapper = shallow(<Login hasErrors={true} loginUser={loginUser}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render login with no error alert', () => {
    const wrapper = shallow(<Login hasErrors={false} loginUser={loginUser} />);
    expect(wrapper).toMatchSnapshot();
});