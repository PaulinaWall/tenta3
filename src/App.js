import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';
import axios from 'axios';

class App extends React.Component {
	state = {
		errorMessage: false,
		report: null,
	}

	getAPI() {
		axios.get('http://api.openweathermap.org/data/2.5/weather?q=Lund&appid=a9f6719e37f20890ebff5d91724dec1f')
		.then(response => {
			console.log(response.data)
		})
		.catch(err => {
			console.error(err)
		})
	}

	componentDidMount() {
		this.getAPI()
	}

	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>

					<SearchCity />

					{
						this.state.report
						? (
							<WeatherReport />
						)
						: ''
					}
				</div>
			</div>
		)
	}
}

export default App;
