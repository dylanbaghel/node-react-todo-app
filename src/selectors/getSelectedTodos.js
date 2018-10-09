export const getSelectedTodos = (todos, filters) => {
    return todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.text.toLowerCase());
    }).sort((a, b) => {
        if (filters.sortBy === 'asc') {
            return a.text.toLowerCase().localeCompare(b.text.toLowerCase());
        } else if (filters.sortBy === 'dsc') {
            return b.text.toLowerCase().localeCompare(a.text.toLowerCase());
        }
    });
};