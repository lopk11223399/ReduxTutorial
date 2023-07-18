const initState = {
	sreach: '',
	status: 'All',
	priorities: [],
}

const filtersReducer = (state = initState, action) => {
	switch (action.type) {
		case 'filters/searchFilterChange':
			return {
				...state,
				sreach: action.payload,
			}
		case 'filters/statusFilterChange':
			return {
				...state,
				status: action.payload,
			}
		case 'filters/prioritiesFilterChange':
			return {
				...state,
				priorities: action.payload,
			}
		default:
			return state
	}
}

export default filtersReducer
