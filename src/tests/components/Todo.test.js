import React from 'react';
import { shallow } from 'enzyme';

import { Todo } from './../../components/Todo';
import todos from './../fixtures/seedData';

test('should render todo with todo data', () => {
    const wrapper = shallow(<Todo todo={todos[0]} />);
    expect(wrapper).toMatchSnapshot();
});