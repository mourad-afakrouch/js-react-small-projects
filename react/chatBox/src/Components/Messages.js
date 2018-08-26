// Code React.js
//REACT
import React from 'react';


class Messages extends React.Component {
	render() {
		return (
				<p className="user-message">

					{this.props.name} : hello
				</p>
			)
	}
}

export default Messages ;