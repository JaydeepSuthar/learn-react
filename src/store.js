const reducer = (state, action) => {
	switch (action.type) {
		case 'conquer':
			const newState = [...state];
			const { planetName } = action;
			newState.find(planet => planetName === planet.name).occupied = action.occupied;
			return newState;
		default:
			return state;
	}
}

export default reducer;
