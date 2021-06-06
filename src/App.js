import { Header } from 'semantic-ui-react'

import AddItemForm from './Components/AddItemForm'
import TodoList from './Components/TodoList'

function App() {

  return (
    <>
      <header>
        <Header as='h1'>Manage your daily tasks</Header>
      </header>
      <main>
        <AddItemForm />
        <TodoList />
      </main>
      <footer>
        Created by Roman Vasilyev
      </footer>
    </>
  );
}

export default App;
