import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import logo from "./img/logo.png";
import background from "./img/backgroundMain.png";
import {Link} from "react-router-dom";


export default class MainScreen extends React.Component{

state={
user:'User',
loggedIn:'no',
};


searchHandle = (e) => { 
alert('test');
};



render(){
	return (
	<div className='mainScreen' style={{backgroundImage:`url(${background})`} }>
			 <p>loged in: {this.state.loggedIn}</p>
			 <Link to='/About' className='aboutLink'>Экраны входа</Link>
		<img src={logo} className="logo"/>
			 <Link to='/Map/' className="searchButton"
			 >Найти место
			 </Link>
		</div>
	);
  }
}