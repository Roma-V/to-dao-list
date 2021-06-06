import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List } from 'semantic-ui-react'

import Filter from './Filter'
import ListItem from './ListItem'
import { selectAllTasks, remove, toggleActive } from '../store/taskReducer'

const filterFunctions = {
    all: () => true,
    active: todo => todo.active,
    done: todo => !todo.active,
};

const filterOptions = Object.keys(filterFunctions);

function TodoList() {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('all');
    const tasks = useSelector(selectAllTasks).filter(filterFunctions[filter]);

    function filterHandler(option) {
        setFilter(option);
    }

    return (
        <>
            <Filter 
                filter={filter} 
                onFilterChange={filterHandler} 
                options={filterOptions}
            />
            <List as='ul' size='large'>
                {
                    tasks.map(todo => (
                        <ListItem
                            key={todo.id}
                            description={todo.description}
                            active={todo.active}
                            onToggleActive={() => dispatch(toggleActive(todo.id))}
                            onDelete={() => dispatch(remove(todo.id))}
                        />
                    ))
                }
            </List>
        </>
    )
};

export default TodoList;