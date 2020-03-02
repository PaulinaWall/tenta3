import React from 'react';

class SearchCity extends React.Component {



	render() {
		return (
			<div id="SearchCity" className="mb-5">
				<form onSubmit={this.props.handleSubmit}>
					<div className="input-group">
						<input
							className="form-control form-control-lg"
							onChange={this.props.handleChange}
							id="city"
							placeholder="Enter a city"
							type="text"
							value={this.props.city}
						/>

						<div className="input-group-append">
							<button
								className="btn btn-success btn-lg"
							>Search
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchCity;
