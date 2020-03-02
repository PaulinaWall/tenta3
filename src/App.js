import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';
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
				report: {
					data
				}
			})
		})
		.catch(err => {
			console.error(err)
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
					/>

					{
						this.state.report
						? (
							<WeatherReport
								name={this.state.report}
							/>
						)
						: ''
					}
				</div>
			</div>
		)
	}
}

export default App;
