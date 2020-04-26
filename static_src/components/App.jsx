import React from "react";
import ReactDOM from "react-dom";
import MainScreen from './MainScreen';
import PropTypes from "prop-types";
import style from "./styles/style.css";
import {useMediaQuery} from 'react-responsive';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Info from "./Info";
import Map from "./Map";
import About from './About';
import PhoneValidation from './PhoneValidation';
import EmailValidation from './EmailValidation';
import logo from "./img/logo.png";



export default class App extends React.Component {

	state={
		loggedIn:'no',
	}

render(){
	return( 
		<Router>
	 		<div className='App'>
				<Switch>

					<Route path="/About">
						<About/>
					</Route>

					<Route path="/Info">
						<Info/>
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
					
					<Route path="/">
						<MainScreen />
					</Route>
					
				</Switch>
			</div>
	 </Router>
	);	
  }
}