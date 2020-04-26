import React from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import validationFaild from "./img/validationFaild.png";
import validationSuccess from "./img/validationSuccess.png";



export default class LoginPhone extends React.Component {

	state={
    input:' ',
    passwordInput:' ',
    generatedCode:null,
	  serverRequest:`http:\//localhost:3000/`,
    codeSended:false,
    apiUrl:'`https:\//sms.ru/sms/send?api_id=EDC6C1CA-CEE9-8205-1640-134DAFB6127E&to=79998458541,74993221627&msg=${this.state.generatedCode}&json=1`',
  };


inputHandler=()=>{
this.setState({input: event.target.value });
  setTimeout(()=>{
  this.handleValues();
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

generateCommonCode=()=>{
let code = Math.floor(Math.random()*100000)
console.log(code);
this.setState({generatedCode:code})
};



validationButtonHandler = (e) => {
  const {codeSended,input,generatedCode,passwordInput} = this.state;
    
    if(codeSended != true && input.length > 15/*  ==================  */){
      const generated = this.generateCommonCode();
        this.setState({codeSended:true});
    }else if(codeSended === true && generatedCode != ' ' && passwordInput === generatedCode){
      window.location = "/Map";
    }else{
      alert("Вы ввели некорректный код");
    };

      



     /* fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )*/


};

passwordHandler = (value) => {
setTimeout(()=>{
this.setState({passwordInput:Number(value) });
},200);
}



render(){
const {codeSended,generatedCode,passwordInput,input} = this.state;
	return (
		<div className="loginScreen">
    
      <div className="validationInputRow">
     
        <p>Введите номер телефона</p>
          <div className="inputRowComponent">
            <input onChange={this.inputHandler} 
                   className="validationInputField"
                   placeholder="+7(___)___-__-__"
                   maxLength="16"
                   
            />
             
              <img className="validationInputFieldIndication"src={validationSuccess}
        style={codeSended  === true ? {display:'block'}:{display:'none'} }
        />
        
        </div>
        
        <div className="codeField" 
             style={this.state.codeSended === true ? {display:'block'}:{display:'none'}}>
         
          <p>Введите код</p> 
            <div className="inputRowComponent"> 
          <input 
              className="validationInputField" 
              placeholder="• • • • •" 
              onChange={ ()=>{this.passwordHandler(event.target.value)}}
              maxLength="5"/>
     
     <img className="validationInputFieldIndication"src={validationSuccess}
        style={generatedCode === passwordInput ? {display:'block'}:{display:'none'} }
     />
     
     <img className="validationInputFieldIndication"src={validationFaild}
        style={generatedCode !== passwordInput ? {display:'block'}:{display:'none'} }
      />
                <p className="validationErrorText" style={codeSended === true ? {display:'block'}:{display:'none'}, 
                {color:"gray"} }>Мне не пришёл код.<a href="#">Отправить повторно</a></p>
        </div>
     
      </div>
  </div>
        <button className="passwordSendButton" style={input.length > 15 || passwordInput.length > 4  ? { opacity:1} : {opacity:0.5}
                                                           }
                onClick={ ()=>{this.validationButtonHandler(event)}}
        > 
             <p style={codeSended == false ? {display:'block'} : {display:'none'}}>Получить код</p>
             <p style={codeSended == true ? {display:'block'} : {display:'none'}}>Войти</p>
         </button>
</div>
		);
  }
}