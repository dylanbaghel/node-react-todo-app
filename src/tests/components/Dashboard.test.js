import React from 'react';
import { shallow } from 'enzyme';

import { Dashboard } from './../../components/Dashboard';
import todos from './../fixtures/seedData';

let startSetTodos;

beforeEach(() => {
    startSetTodos = jest.fn();
});

test('should render dashboard todo list page with no todos and no loading', () => {
    const wrapper = shallow(<Dashboard todos={[]} isLoading={false} startSetTodos={startSetTodos}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render dashboard todo list page with no todos and loading todos', () => {
    const wrapper = shallow(<Dashboard todos={[]} isLoading={true} startSetTodos={startSetTodos}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render dashboard todo list page with todos and no loading', () => {
    const wrapper = shallow(<Dashboard todos={todos} isLoading={false} startSetTodos={startSetTodos}/>);
    expect(wrapper).toMatchSnapshot();
});
