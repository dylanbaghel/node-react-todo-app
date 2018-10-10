import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './../../components/Header';

test('should render header correctly with no authentication showing public links', () => {
    const wrapper = shallow(<Header isAuthenticated={false} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render header with authentication showing private links and logout', () => {
    const logoutUserSpy = jest.fn();
    const wrapper = shallow(<Header isAuthenticated={true} logoutUser={logoutUserSpy}/>);
    expect(wrapper).toMatchSnapshot();
});