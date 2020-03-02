import React from 'react'

const WeatherConditions = (props) => {
	const {weather} = props.data.data
	const mappedWeatherArray = weather.map(item => {
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
