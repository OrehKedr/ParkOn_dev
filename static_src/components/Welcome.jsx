import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import PhoneValidation from "./PhoneValidation";
import EmailValidation from "./EmailValidation";


export default class About extends React.Component {

state={
};

currentSlide = () =>{
	console.log('1');
}


render(){
	return <div className="welcomeScreen">
		<p className="welcomeText">Добро пожаловать 
		<br/>
		в ParkOn
		</p>
			    <div className="loginLinksRow">
				 	    <Link to="/PhoneValidation" className="loginLink" >
				  			  Войти по номеру телефона
				  		</Link>
				
						<Link to="/EmailValidation" className="loginLink loginLink_email">
							  Войти по адресу эл. почты 
						</Link>
				</div>
			  </div>
	}
}