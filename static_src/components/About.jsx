import React from 'react';
import ReactDOM from 'react-dom';
import Image4 from "./img/image4.png";
import {Link} from "react-router-dom";
import PhoneValidation from "./PhoneValidation";
import EmailValidation from "./EmailValidation";


export default class About extends React.Component {

state={
	images:[Image4],
};

currentSlide = () =>{
	console.log('1');
}


render(){
	return <div className="aboutScreen">
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