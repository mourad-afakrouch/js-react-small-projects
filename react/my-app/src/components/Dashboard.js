import React from 'react';
import nl2br from 'react-newline-to-break';


class Dashboard extends React.Component {
	render(){
		return (

			<div>
				<h1>Login ...</h1>
				<form>
					<label>
						<input type="text" placeholder="Enter your E-mail" name="email" />
						{nl2br("")}
					</label>
					<label>
						<input type="text" placeholder="Enter your password" name="password" />
						{nl2br("")}
					</label>
					<input type="submit" />
				</form>

			</div>

			);
	}
}

export default Dashboard ;