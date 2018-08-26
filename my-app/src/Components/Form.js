import React from 'react';

class Form extends React.Component {


	render(){
		return (


			<div>
				<form onSubmit={this.props.getWeather}>
					<input name="city" placeholder="City..." type="text"></input>
					<input name="country" placeholder="Country..." type="text"></input>
					<button type="submit" > Search
					</button>
				</form>
			</div>



			);
	}

}
 
export default Form;