import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import logo from "./img/logo.png";
import {Link} from "react-router-dom";


export default class MainScreen extends React.Component{

state={
user:'User',
loggedIn:'no',
};


loaddingRedirect = () => {
setTimeout( ()=>{
window.location="/Welcome";
},3000) 
};

dataFetch = () => {
/*
//здесь будет выполняться проверка авторизации 
//пользователя(server/cookies на наше усмотрение)
*/	
}



render(){
	this.loaddingRedirect();
	return (
	<div className='mainScreen' >
		<img src={logo} className="logo"/>
		</div>
	);
  }
}