// Code React.js
//REACT
import React from 'react';



class Connexion extends React.Component {

	

	 gotToChat = event => {

	 		event.preventDefault();
			const psudo = this.psudoInput.value ;

			this.context.router.transitionTo(`/psudo/${psudo}`);

		};
	render() {


		return (
				<div className="connexionBox" onSubmit={(e) => this.gotToChat(e)}>
						<form  className="connexion">
							<input 
									type="text" 
									placeholder="Psudo" 
									required
									ref ={input => this.psudoInput = input}
							/>
							<button type="submit">GO</button>
						</form>

				</div>
			)
	}

	static contextTypes = {
		router : React.PropTypes.object
	}
}

export default Connexion ;