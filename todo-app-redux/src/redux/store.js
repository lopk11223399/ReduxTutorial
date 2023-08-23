// import { createStore } from 'redux'
// import rootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composedEnhancers)

// export default store

import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from '../components/Filters/FilterSlice'
import todoListSlide from '../components/TodoList/TodoSlice'

const store = configureStore({
	reducer: {
		filters: filtersSlice.reducer,
		todoList: todoListSlide.reducer,
	},
})

export default store
