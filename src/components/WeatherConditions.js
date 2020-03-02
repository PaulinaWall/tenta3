import React from 'react'

const WeatherConditions = (props) => {
	const mappedWeatherArray = props.data.data.weather.map(item => {
		return <p key={item.id}>{item.description}</p>
	})

	return(
		<div className="text-center">
			Current Weather is:
			{mappedWeatherArray}
		</div>
	)
}

export default WeatherConditions
