import React from 'react';
import { shallow } from 'enzyme';

import { Error } from './../../components/Error';

test('should render error component with error value', () => {
    const error = {
        error_text: 'Error Occured'
    };
    const wrapper = shallow(<Error error={error} />);
    expect(wrapper).toMatchSnapshot();
});