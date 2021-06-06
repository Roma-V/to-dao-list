import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: 1, description: 'Wake up', active: true },
    { id: 2, description: 'Eat breakfast', active: true },
    { id: 3, description: 'Do some work', active: true },
  ]

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action) => state.concat(action.payload),
    remove: (state, action) => state.filter(task => task.id !== action.payload),
    toggleActive: (state, action) => state.map(todo => todo.id === action.payload ? { ...todo, active: !todo.active } : todo)
  }
})

export const { add, remove, toggleActive } = taskSlice.actions

export const selectAllTasks = state => state.tasks;

export const countAllTasks = state => state.tasks.reduce((sum) => sum + 1, 0);
export const countActiveTasks = state => state.tasks.reduce(
    (sum, todo) => sum + (todo.active ? 1 : 0)
    , 0);
export const countCompleteTasks = state => state.tasks.reduce(
    (sum, todo) => sum + (!todo.active ? 1 : 0)
    , 0);

export default taskSlice.reducer