import React from 'react';

const WeatherReport = props => {
	return (
		<div id="WeatherReport">
			<div className="card bg-dark text-white">
				<div className="card-body text-center">
					<h5 className="card-title">The temperature in {props.name.data.name} is {Math.floor(props.name.data.main.temp)} &deg; C right now, with a humidity of {props.name.data.main.humidity} %.</h5>
				</div>
			</div>
		</div>
	)
}

export default WeatherReport;
