import React from "react";
import ReactDOM from "react-dom";
import MainScreen from './MainScreen';
import PropTypes from "prop-types";
import style from "./styles/style.css";
import {useMediaQuery} from 'react-responsive';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Map from "./Map";
import Welcome from './Welcome';
import PhoneValidation from './PhoneValidation';
import EmailValidation from './EmailValidation';
import logo from "./img/logo.png";
import Training from "./Training";
import Letstraining from "./Letstraining";




export default class App extends React.Component {

	state={
		loggedIn:'no',
	}

render(){
	return( 
		<Router>
	 		<div className='App'>
				<Switch>

					<Route path="/Welcome">
						<Welcome/>
					</Route>
					
					<Route path="/Map">
						<Map/>
					</Route>

					<Route path="/PhoneValidation">
						<PhoneValidation />
					</Route>					

					<Route path="/EmailValidation">
						<EmailValidation />
					</Route>					

					<Route path="/Training">
						<Training/>
					</Route>

					<Route path="/Letstraining">
						<Letstraining/>
					</Route>		
					
					<Route path="/">
						<MainScreen />
					</Route>

	
					
				</Switch>
			</div>
	 </Router>
	);	
  }
}
