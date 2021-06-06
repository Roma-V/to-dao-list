import { useState } from 'react'
import { Header } from 'semantic-ui-react'
import { v4 as uuid } from 'uuid';

import AddItemForm from './Components/AddItemForm'
import TodoList from './Components/TodoList'

let todosInitial = [
  { id: 1, description: 'Wake up', active: true },
  { id: 2, description: 'Eat breakfast', active: true },
  { id: 3, description: 'Do some work', active: true },
]

function App() {
  const [todos, setTodos] = useState(todosInitial);

  function addTodoItemHandler(description)  {
    setTodos(todos.concat({
      id: uuid(),
      description,
      active: true,
    }))
  }

  function itemToggleActiveHandler(id) {
    return function(event) {
      setTodos(todos.map(todo => todo.id === id ? { ...todo, active: !todo.active } : todo));
    }
  }

  function itemDeleteHandler(id) {
    return function(event) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  }

  return (
    <>
      <header>
        <Header as='h1'>Manage your daily tasks</Header>
      </header>
      <main>
        <AddItemForm onSubmit={addTodoItemHandler} />
        <TodoList
          todoList={todos}
          onToggleAactive={itemToggleActiveHandler}
          onDelete={itemDeleteHandler} />
      </main>
      <footer>
        Created by Roman Vasilyev
      </footer>
    </>
  );
}

export default App;
