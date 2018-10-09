import { getSelectedTodos } from './../../selectors/getSelectedTodos';
import { SET_TEXT_FILTER, SORT_BY_ASC, SORT_BY_DSC } from './../../actions/types';
import todos from './../fixtures/seedData';

describe('Filtered Todos Selector Test', () => {
    test('should filter by text value', () => {
        const filters = {
            text: 'rent',
            sortBy: 'asc'
        };

        const result = getSelectedTodos(todos, filters);
        expect(result).toEqual([todos[0]]);
    });

    test('should sort by ascending alphabet', () => {
        const filters = {
            text: '',
            sortBy: 'asc'
        };

        const result = getSelectedTodos(todos, filters);
        expect(result).toEqual([todos[2], todos[0], todos[1]]);
    });

    test('should sort by descending alphabet', () => {
        const filters = {
            text: '',
            sortBy: 'dsc'
        };

        const result = getSelectedTodos(todos, filters);
        expect(result).toEqual([todos[1], todos[0], todos[2]]);
    });
});