import React from 'react';

class SearchCity extends React.Component {



	render() {
		return (
			<div id="SearchCity" className="mb-5">
				<form onSubmit={this.props.handleSubmit}>
					<div className="input-group">
						<input
							placeholder="Enter a city"
							type="text"
							className="form-control form-control-lg"
							id="city"
							onChange={this.props.handleChange}
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
