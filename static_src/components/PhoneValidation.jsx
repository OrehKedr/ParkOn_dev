import React from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import validationFaild from "./img/validationFaild.png";
import validationSuccess from "./img/validationSuccess.png";



export default class LoginPhone extends React.Component {

	state={
    input:' ',
    validate:' ',
    passwordInput:' ',
    generatedCode:null,
    codeSended:false,
    apiUrl:'`https:\//sms.ru/sms/send?api_id=EDC6C1CA-CEE9-8205-1640-134DAFB6127E&to=79998458541,74993221627&msg=${this.state.generatedCode}&json=1`',
    
  };


inputHandler=()=>{
const number = Number(event.target.value);
this.setState( { input:event.target.value });
  setTimeout(()=>{
    this.validateFunction();
  this.handleValues();
  },100);
};




handleValues = () => {
  
  const { input } = this.state;
    this.forceUpdate();
 if (input.length > 11) {
  this.validateFunction();
  return(null);
  }else{
    
  }
};


validateFunction=()=>{
  const regular = /\+[7]{1}[\(]{1}\d{3}[\)]{1}\d{3}[-]{1}\d{2}[-]{1}\d{2}/g;
  const result = regular.exec(this.state.input);
  console.log(result);
    if(result !== null){
      this.setState({validate:true})
    }else{
      this.setState({validate:false})
  }
};


generateCommonCode=()=>{
  let code = Math.floor(Math.random()*100000)
  console.log(code);
    this.setState({generatedCode:code})
};



validationButtonHandler = (e) => {
  const {codeSended,input,generatedCode,passwordInput,validate} = this.state;
    
    if(codeSended != true && input.length > 15 && validate === true){
      const generated = this.generateCommonCode();
        this.setState({codeSended:true});
    
    }else if(codeSended === true && generatedCode != ' ' && passwordInput === generatedCode && validate === true) {
      window.location = "/Map";
    
    }else if(validate === true && codeSended === true && generatedCode === passwordInput){
      alert("Вы ввели некорректный код");
    }else{
      alert('Вы ввели неверный номер телефона');
    };

    if (input.length === 16) {
fetch(`http:\//localhost:3000/?phone=${input}&password=${passwordInput}`,{mode:'no-cors'})
  .then(response => { 
    console.log(response);
    return response.text();
  })
  .then((result) => {
    console.log(result)
  })
}


      /*fetch( this.state.apiUrl ,{
        method: 'GET',
        mode:'no-cors',
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
          console.log(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
*/

};

passwordHandler = (value) => {
setTimeout(()=>{
this.setState({passwordInput:Number(value) });
},200);
}



render(){
const {codeSended,generatedCode,passwordInput,input,validate} = this.state;
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
                   style={validate === true ? {display:'block'}:{display:'none'} }
              />
              <img className="validationInputFieldIndication"src={validationFaild}
              style={input.length > 3 && validate !== true ? {display:'block'}:{display:'none'} }
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