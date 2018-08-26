// Code React.js
//REACT
import React from 'react';
import Formulaire from "./Formulaire";
import Messages from "./Messages";


class App extends React.Component {

	state = {
		messages : {}
	}

	addMessage = (message, psudo) => {

		const messages = {...this.state.messages};

		const timestamp = Date.now();

		messages[`messages-${timestamp}`] = message;

		this.setState({messages})

	}
	render() {
		return (
				<div className="box">
				<div>
					<div className="messages">
						<Messages name={this.props.params.psudo} />
					</div>
					<Formulaire 
						addMessage={this.addMessage}
						name={this.props.params.psudo} 
					/>
				</div>

				</div>
			)
	}
}

export default App ;