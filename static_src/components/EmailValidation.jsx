import React from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import Map from './Map';
import validationFaild from "./img/validationFaild.png";
import validationSuccess from "./img/validationSuccess.png";


export default class LoginEmail extends React.Component {

	state={
		input:' ',
		mailNotExist:' ',
		mailUsed:' ',
		verificationCode:' ',
		codeSended:' ',
		codeCorrect:' ',
	};

inputHandler = (event) =>{
setTimeout(()=>{
this.setState({input: event.target.value});
	this.handleValues(event);
	},100);
};

handleValues = () => {
	this.forceUpdate();
	setTimeout( () => {
			this.setState({mailString:true});
	},100)
  };

  validationButtonHandler = () => {
  	if(this.state.codeSended != true && this.state.input.length > 5){
  		this.setState({codeSended:true});
  	}else{
  	alert("something went wrong");	
  	}
  }

render(){
	const {mailUsed,mailNotExist,codeSended,input} = this.state;
	return (

	<div className="loginScreen">
	
		<div className="validationInputRow">
			
			<p>Введите адрес эл.почты</p>
			<div className="inputRowComponent">
				<input onChange={()=> {this.inputHandler(event)}} 
				className="validationInputField"
				placeholder="ivanov.ivan@mail.ru"
				/>
				<img className="validationInputFieldIndication"src={validationSuccess}
				style={mailUsed === false && mailNotExist === false && input.length >= 5 ? {display:'block'}:{display:'none'} }
				/>
				<img className="validationInputFieldIndication"src={validationFaild}
				style={mailUsed === true || mailNotExist === true ? {display:'block'}:{display:'none'} }
				/>
			</div>
			<div className="codeField" 
				style={codeSended === true ? {display:'block'}:{display:'none'}}>
				<p>Введите код</p>	
				<input className="validationInputField" placeholder="• • • • •"/>
			</div>
			
				<p className="validationErrorText" style={mailNotExist === true ? {display:'block'}:{display:'none'} }>Указанный адрес не существует</p>
				<p className="validationErrorText" style={mailUsed === true ? {display:'block'}:{display:'none'} }>Указанный адрес уже используется.Нажмите <a href="/About">Войти</a></p>
				<p className="validationErrorText" style={codeSended === true ? {display:'block'}:{display:'none'} }>Не получили код?Нажмите <a href="#">Выслать ещё раз</a></p>
		
		</div>
		
				<button className="passwordSendButton" 
				
							style={input.length < 5 || mailUsed === true || mailNotExist === true ? {opacity:0.5} : { opacity:1}}
							       								   
				
																	
						onClick={ ()=>{this.validationButtonHandler}}> 

					<p style={codeSended == false ? {display:'block'} : {display:'none'}}>Выслать код</p>
					<p style={codeSended == true ? {display:'block'} : {display:'none'}}>Войти</p>
				 
				 </button>
	</div>
	);
  }
}