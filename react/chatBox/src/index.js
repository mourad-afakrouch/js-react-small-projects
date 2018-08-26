// Code React.js
//REACT
import React from 'react';
import { render } from 'react-dom';
//Router

import { BrowserRouter, Match, Miss } from 'react-router';

//Components

import Connexion from "./Components/Connexion";
import App from "./Components/App";
import NotFound from "./Components/NotFound";
//CSS
import "./index.css" ;

const Rout = () => {

	return (

			<BrowserRouter>
				<div>
					<Match exactly pattern="/" component={Connexion} />
					<Match pattern="/psudo/:psudo" component={App} />
					<Miss component={NotFound} />
				</div>
			</BrowserRouter>
		)
}



render( 
	<Rout />,

	document.getElementById("root")
)