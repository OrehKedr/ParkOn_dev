import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";



export default class Changeauto extends React.Component {

state={
};


render(){
	return <div className="welcomeScreen">
		<p className="choosereg">Выберите удобный 
		<br/>
		способ авторизации
		</p>
			    <div className="loginLinksRow">
				 	    <Link to="/PhoneValidation" className="loginLink" >
				  			  Номер телефона
				  		</Link>
				
						<Link to="/Emailauto" className="loginLink">
							  Электронная почта 
						</Link>
				</div>
			  </div>
	}
}