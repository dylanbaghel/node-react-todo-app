import React from 'react';
import { shallow } from 'enzyme';

import TodoForm from './../../components/TodoForm';

test('should render todo form correctly', () => {
    const wrapper = shallow(<TodoForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error with no input', () => {
    const wrapper = shallow(<TodoForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('errors').text).toBeDefined();
    expect(wrapper).toMatchSnapshot();
});

test('should set text state on change', () => {
    const value = 'My New Todo';
    const wrapper = shallow(<TodoForm />);
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('text')).toBe(value);
});

test('should call onFormSubmit Prop on Valid Data', () => {
    const text = 'My New Todo'
    const onFormSubmitSpy = jest.fn();
    const wrapper = shallow(<TodoForm onFormSubmit={onFormSubmitSpy} />);
    wrapper.setState(() => ({
        text
    }));
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state()).toEqual({
        text: '',
        errors: {}
    });
    expect(onFormSubmitSpy).toHaveBeenLastCalledWith({
        text
    });
});