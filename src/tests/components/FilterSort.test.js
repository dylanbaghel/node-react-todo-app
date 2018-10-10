import React from 'react';
import { shallow } from 'enzyme';

import { FilterSort } from './../../components/FilterSort';

test('should render filter sort component correctly', () => {
    const setTextFilter = jest.fn();
    const sortByASC = jest.fn();
    const sortByDSC = jest.fn();

    const wrapper = shallow(<FilterSort setTextFilter={setTextFilter} sortByASC={sortByASC} sortByDSC={sortByDSC}/>);

    const value = 'rent';

    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
    expect(wrapper).toMatchSnapshot();
});