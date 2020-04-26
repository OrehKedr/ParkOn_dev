import React from "react";
import ReactDOM from "react-dom";



export default class Login extends React.Component {

	state={
		loginType:'phone',
		randomCode:'',
	};


render(){
	return <div className="loginScreen">
			<p>Loged in by </p>
			</div>
  }
}