import React from 'react';
import './App.css';

import planetReducer from './store';

const PlanetContext = React.createContext();

const App = () => {
	const planets = [
		{
			name: 'earth',
			occupied: false,
		},
		{
			name: 'mars',
			occupied: false,
		},
		{
			name: 'neptune',
			occupied: true,
		}
	];

	const [planetState, dispatch] = React.useReducer(planetReducer, planets)

	return (
		<PlanetContext.Provider value={{ planets: planetState, dispatch }}>
			<Universe />
		</PlanetContext.Provider>
	);
}

const Universe = () => {
	return <Galaxy />
}

const Galaxy = () => {
	return <SolarSystem />
}

const SolarSystem = () => {
	const { planets, dispatch } = React.useContext(PlanetContext);

	return planets.map(planet => (
		<p>
			Planet { planet.name } is occupied: { planet.occupied ? 'yes' : 'no' } 
			<input type="checkbox" checked={ planet.occupied } 
				onChange={() => dispatch({ type: 'conquer', planetName: planet.name, occupied: !planet.occupied })}
			/>
		</p>

	));
}

export default App;
