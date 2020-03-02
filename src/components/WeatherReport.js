import React from 'react';
import WeatherConditions from './WeatherConditions'

const WeatherReport = props => {
	const {main, name} = props.data.data
	return (
		<div id="WeatherReport">
			<div className="card bg-dark text-white">
				<div className="card-body text-center">
					<h5 className="card-title">The temperature in {name} is {Math.floor(main.temp)} &deg; C right now, with a humidity of {main.humidity} %.</h5>
				</div>
				<WeatherConditions
					data={props.data}
				/>
			</div>
		</div>
	)
}

export default WeatherReport;
