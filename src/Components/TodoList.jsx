import { useState } from 'react'
import { List } from 'semantic-ui-react'

import Filter from './Filter'
import ListItem from './ListItem'

const filterFunctions = {
    all: () => true,
    active: todo => todo.active,
    done: todo => !todo.active,
};

const filterOptions = Object.keys(filterFunctions);

const filterCounts = {
    all: (sum, todo) => sum + 1,
    active: (sum, todo) => sum + (todo.active ? 1 : 0),
    done: (sum, todo) => sum + (!todo.active ? 1 : 0),
};

function TodoList({ todoList, onToggleAactive, onDelete }) {
    const [filter, setFilter] = useState('all');

    function filterHandler(option) {
        setFilter(option);
    }

    return (
        <>
            <Filter 
                filter={filter} 
                onFilterChange={filterHandler} 
                options={filterOptions} 
                counts={filterOptions.map(option => todoList.reduce(filterCounts[option], 0))}
            />
            <List as='ul' size='large'>
                {
                    todoList.filter(filterFunctions[filter])
                        .map(todo => (
                        <ListItem
                            key={todo.id}
                            description={todo.description}
                            active={todo.active}
                            onToggleActive={onToggleAactive(todo.id)}
                            onDelete={onDelete(todo.id)}
                        />
                    ))
                }
            </List>
        </>
    )
};

export default TodoList;