import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';
import Error from './components/Error';
import axios from 'axios';

class App extends React.Component {
	state = {
		errorMessage: false,
		city: '',
		report: null,
	}

	getAPI() {
		axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=a9f6719e37f20890ebff5d91724dec1f&units=metric`)
		.then(response => {
			const data = response.data
			this.setState({
				city: '',
				report: {
					data
				},
				errorMessage: false,
			})
		})
		.catch(err => {
			this.setState({
				errorMessage: true,
				report: ''
			})
		})
	}

	handleChange = (e) => {
		this.setState({
			city: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.getAPI()
	}

	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>

					<SearchCity
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
						city={this.state.city}
					/>

					{
						this.state.report
						? (
							<WeatherReport
								data={this.state.report}
							/>
						)
						: ''
					}
					{
						this.state.errorMessage
						? (
							<Error />
						)
						: ''
					}
				</div>
			</div>
		)
	}
}

export default App;
