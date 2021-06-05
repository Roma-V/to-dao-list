import { List } from 'semantic-ui-react'

import ListItem from './ListItem'

function TodoList({ todoList }) {
    function itemToggleActiveHandler(id) {
        return function(event) {
            console.log('toggle active for', event.target, id);
        }
    }

    function itemDeleteHandler(id) {
        return function(event) {
            console.log('delete', event.target, id);
        }
    }

    return (
        <List as='ul' size='large'>
            {
                todoList.map(todo => (
                    <ListItem
                        key={todo.id}
                        description={todo.description}
                        active={todo.active}
                        onToggleActive={itemToggleActiveHandler(todo.id)}
                        onDelete={itemDeleteHandler(todo.id)}
                    />
                ))
            }
      </List>
    )
};

export default TodoList;