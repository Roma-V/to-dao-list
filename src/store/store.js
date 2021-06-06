import { configureStore } from '@reduxjs/toolkit'

import taskReducer from './taskReducer'

export default configureStore({
    reducer: {
        tasks: taskReducer,
    }
})