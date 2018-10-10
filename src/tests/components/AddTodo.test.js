import React from 'react';
import { shallow } from 'enzyme';

import { AddTodo } from './../../components/AddTodo';
import todos from './../fixtures/seedData';

let startAddTodoSpy,wrapper;

beforeEach(() => {
    startAddTodoSpy = jest.fn();
    wrapper = shallow(<AddTodo startAddTodo={startAddTodoSpy} />)
});

test('should render add todo page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startAddTodo', () => {
    wrapper.find('TodoForm').prop('onFormSubmit')(todos[0]);
    expect(startAddTodoSpy).toHaveBeenLastCalledWith(todos[0].text);
});