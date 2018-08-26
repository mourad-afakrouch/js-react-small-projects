import React from 'react';

class Weather extends React.Component {
	render(){
		return (

			

			<div className = "weather__info">

				{ 
					this.props.temperature && 
					<h1 className="weather__key">Temperature is : 
					<span className="weather__value">{ this.props.temperature}</span>
					</h1> 
				}
				{ 
					this.props.city && 
					<h1 className="weather__key">City  : 
					<span className="weather__value">{ this.props.city }</span>
					</h1> 
				}
				{ 
					this.props.country && 
					<h1 className="weather__key">Country  : 
					<span className="weather__value">{ this.props.country } </span>
					</h1> 
				}
				{ 
					this.props.humidity && 
					<h1 className="weather__key">Humidity  : 
					<span className="weather__value">{ this.props.humidity }</span>
					</h1> 
				}
				{ 
					this.props.description && 
					<h1 className="weather__key">Info :
					 <span className="weather__value">{ this.props.description } </span>
					 </h1> 
				}
				{ 
					this.props.error &&
					 <h1 className="weather__error"> error : 
					 <span>{ this.props.error } </span>
					 </h1> 
				}
				
		
			</div>



			);
	}

}

export default Weather ;