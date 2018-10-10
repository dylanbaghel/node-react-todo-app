import React from 'react';
import { shallow } from 'enzyme';

import AuthForm from './../../components/AuthForm';

test('should render auth form component correctly', () => {
    const wrapper = shallow(<AuthForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid data', () => {
    const wrapper = shallow(<AuthForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('errors').email).toBeDefined();
    expect(wrapper).toMatchSnapshot();
});

test('should set email on change', () => {
    const value = 'a@gmail.com';
    const wrapper = shallow(<AuthForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('email')).toBe(value);
});

test('should set password on change', () => {
    const value = 'abhishek';
    const wrapper = shallow(<AuthForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('password')).toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<AuthForm onSubmit={onSubmitSpy}/>);
    wrapper.setState(() => ({
        email: 'a@gmail.com',
        password: 'abhishek'
    }));
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('errors')).toEqual({});
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        email: 'a@gmail.com',
        password: 'abhishek'
    });
});