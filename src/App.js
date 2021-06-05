import { useState } from 'react'
import { Header } from 'semantic-ui-react'

import AddItemForm from './Components/AddItemForm'
import TodoList from './Components/TodoList'

let todosInitial = [
  { id: 1, description: 'Wake up', active: true },
  { id: 2, description: 'Eat breakfast', active: true },
  { id: 3, description: 'Do some work', active: true },
]

function App() {
  const [todos, setTodos] = useState(todosInitial);

  function addTodoItemHandler(event)  {
    event.preventDefault();
    const description = event.target[0].value;
    console.log('added in item:', description);


    setTodos(todos.concat({
      id: Math.floor(1000 * Math.random()),
      description,
      active: true,
    }))
  }
  return (
    <>
      <header>
        <Header as='h1'>Manage your daily tasks</Header>
      </header>
      <main>
        <AddItemForm onSubmit={addTodoItemHandler} />
        <TodoList todoList={todos} />
      </main>
      <footer>
        Created by Roman Vasilyev
      </footer>
    </>
  );
}

export default App;
