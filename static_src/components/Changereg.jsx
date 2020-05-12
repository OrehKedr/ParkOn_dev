import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";



export default class Changereg extends React.Component {

state={
};


render(){
	return <div className="welcomeScreen">
		<p className="choosereg">Выберите удобный 
		<br/>
		способ регистрации
		</p>
			    <div className="loginLinksRow">
				 	    <Link to="/Phonereg" className="loginLink" >
				  			  Номер телефона
				  		</Link>
				
						<Link to="/Emailregistration" className="loginLink">
							  Электронная почта 
						</Link>
				</div>
			  </div>
	}
}