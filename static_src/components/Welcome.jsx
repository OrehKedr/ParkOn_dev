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
				 	    <Link to="/Changeauto" className="loginLink" >
				  			  Войти
				  		</Link>
				
						<Link to="/Changereg" className="loginLink">
							  Зарегистрироваться 
						</Link>
				</div>
			  </div>
	}
}