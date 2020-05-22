import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import logo from "./img/logo.png";
import {Link} from "react-router-dom"
import axios from "axios";
import AuthService from "../Services/AuthService";

export default class MainScreen extends React.Component{

	loaddingRedirect = (path) => {
		setTimeout( () => {
			window.location = path;
		}, 3000) 
	};

	render() {
		let path = '/Welcome';
		if (!AuthService.isAccesTokenExpired()) {
			path ='/MapModule';
		}
		this.loaddingRedirect(path);

		return (
			<div className='mainScreen' >
				<img src={logo} className="logo"/>
			</div>
		);
	}
}