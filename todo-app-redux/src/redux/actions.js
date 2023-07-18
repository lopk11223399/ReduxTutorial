// export const addTodoAction = {
// 	type: 'todoList/addTodo',
// 	payload: {
// 		id: 5,
// 		name: 'Learn Football',
// 		completed: false,
// 		priority: 'High',
// 	},
// }

// action creators => function
export const addTodo = data => {
	return {
		type: 'todoList/addTodo',
		payload: data,
	}
}

export const toggleTodoStatus = todoId => {
	return {
		type: 'todoList/toggleTodoStatus',
		payload: todoId,
	}
}

export const searchFilterChange = text => {
	return {
		type: 'filters/searchFilterChange',
		payload: text,
	}
}

export const statusFilterChange = status => {
	return {
		type: 'filters/statusFilterChange',
		payload: status,
	}
}

export const prioritiesFilterChange = priorities => {
	return {
		type: 'filters/prioritiesFilterChange',
		payload: priorities,
	}
}
