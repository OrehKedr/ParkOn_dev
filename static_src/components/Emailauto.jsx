import React from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import Map from './Map';
import validationFaild from "./img/validationFaild.png";
import validationSuccess from "./img/validationSuccess.png";


export default class LoginEmail extends React.Component {

	state={
		input:' ',
		validate:' ',
		mailNotExist:' ',
		mailUsed:' ',
		generatedCode:' ',
		codeSended:' ',
		apiUrl:' ',
		passwordInput:' ',
	};

inputHandler = (event) =>{
setTimeout(()=>{
this.setState({input: event.target.value});
	this.validateFunction();
	this.handleValues(event);
	},100);
};

handleValues = () => {
  this.forceUpdate();
  if (this.state.input.length > 11) {
    this.setState({input:this.state.input})
  }else{

  setTimeout( () => {
      this.setState({mailString:true});
  },100)
  }
};

validateFunction=()=>{
  const regular = /\w+\@{1}\w+\.[a-z]{2,3}$/g;
  const result = regular.exec(this.state.input);
  console.log(result);
  if(result !== null){
  this.setState({validate:true})
  }else{
  this.setState({validate:false})
  }
};

  validationButtonHandler = () => {
  	const {codeSended,generatedCode,passwordInput,input,validate} = this.state;
  	if(codeSended != true && input.length > 5){
  		this.setState({codeSended:true});
  		this.generateCommonCode();
  	 }else if(this.state.codeSended === true && this.state.generatedCode != ' ' && passwordInput === generatedCode  && validate === true){
      window.location = "/Map";
  	}else {
  		alert("something went wrong");	
  	}
  };

  generateCommonCode=()=>{
		let code = Math.floor(Math.random()*100000)
		console.log(code);
			this.setState({generatedCode:code})
};


  passwordHandler = (value) => {
setTimeout(()=>{
this.setState({passwordInput:Number(value) });
},200);
};


render(){
	const {mailUsed,mailNotExist,codeSended,passwordInput,generatedCode,input,validate} = this.state;
	return (

	<div className="loginScreen">
<div className="regwrapper">
		<div className="registration">
			<h1>Авторизация</h1>
		</div>
	
		<div className="validationInputRow">
			
			
			<div className="inputRowComponent">
			<p>Электронная почта</p>
				<input onChange={()=> {this.inputHandler(event)}} 
						className="validationInputField"
						placeholder="ivanov.ivan@mail.ru"
				/>

<p className="validationErrorText" style={validate === false ? {display:'block'}:{display:'none'}
                 }>Адрес введён неправильно.<a href="/Emailauto">Попробуйте ещё раз</a></p>

<p className="validationErrorText" style={ mailNotExist === true ? {display:'block'} : {display:'none'} }>Указанный адрес не зарегистрирован</p>
							<p className="validationErrorText" style={ mailUsed === true ? {display:'block'} : {display:'none'} }>Указанный адрес уже используется.Нажмите <a href="/About">Войти</a></p>
							
				
				<img className="validationInputEmail"src={validationSuccess}
				style={input.length > 0 && validate != false && mailUsed !== true && mailNotExist !== true ? {display:'block'}:{display:'none'} }
				/>
				
				<img className="validationInputEmail"src={validationFaild}
				style={mailUsed === true || mailNotExist === true || validate === false ? {display:'block'}:{display:'none'} }
				/>


			
			</div>
			
			<div className="codeField" 
				 style={codeSended === true ? {display:'block'}:{display:'none'}}>
				
				<p>Введите код</p>	
				
				   <div className="inputRowComponent"> 
					<input 
						className="validationInputField" placeholder="• • • • •"
						maxLength="5"
						onChange={ ()=>{this.passwordHandler(event.target.value)}}
					/>
				 <img className="validationInputFieldIndication"src={validationSuccess}
        			  style={generatedCode === passwordInput ? {display:'block'}:{display:'none'} }
     			  />
     
     			<img className="validationInputFieldIndication"src={validationFaild}
        		style={generatedCode !== passwordInput ? {display:'block'}:{display:'none'} }
      			/>	
						
						<p className="validationErrorText" style={ codeSended === true && passwordInput !== generatedCode  ? {display:'block'} : {display:'none'} }>Мне не пришёл код.<a href="#">Отправить повторно</a></p>				
		
					</div>
			</div>
		</div>

				 <button className="passwordSendButton" style={validate === true && passwordInput === generatedCode  ? { opacity:1} : {opacity:0.5}
                                                           }
                onClick={ ()=>{this.validationButtonHandler(event)}}
        > 
             <p style={codeSended == false ? {display:'block'} : {display:'none'}}>Получить код</p>
             <p style={codeSended == true ? {display:'block'} : {display:'none'}}>Войти</p>
         </button>
				 </div>
		</div>
	);
  }
}