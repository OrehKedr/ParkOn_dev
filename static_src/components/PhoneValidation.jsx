import React from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import validationFaild from "./img/validationFaild.png";
import validationSuccess from "./img/validationSuccess.png";
import MapModule from './MapModule';
import AuthService from '../Services/AuthService';

export default class LoginPhone extends React.Component {

	state={
    input:' ',
    validate:' ',
    passwordInput:' ',
    isPassOk: false
  };

 

//---------------------Обработчик ввода-------------------------------------//

inputHandler=()=>{
const string = event.target.value;
console.log(string);


//-------------Маска подстановки символов в поле телефона------------------//


const newString = string.replace( /(^8|7)(\d{3})(\d{3})(\d{2})(\d{2})/g, '+7(' + string[1]+string[2]+string[3] + ")" + string[4]+string[5]+string[6]+'-'+string[7]+string[8]+'-'+string[9]+string[10]  );
console.log(newString);

//--Отрабатывает по группам захвата.Пробелы между ними сломают регулярку--//

event.target.value = newString;

this.setState( { input:event.target.value });
  setTimeout(()=>{
  this.handleValues();       //Вызов обработчика значений ввода
  },50);
};




handleValues = () => { //Обработчик введённого значения телефона
  
  const { input } = this.state;
    this.forceUpdate();
 if (input.length > 11) {
  this.validateFunction(); // Вызов функции валидации
  return(null); // Когда номер введён,перестаём изменять state при последующем вводе    
  };
};


validateFunction=()=>{   //Функция валидации
  
  //-----------Регулярное выражение для валидации-----------------//

  const regular = /\+[7]{1}[\(]{1}\d{3}[\)]{1}\d{3}[-]{1}\d{2}[-]{1}\d{2}/g;
  const result = regular.exec(this.state.input); //Вернёт массив с результатом либо null 
  console.log(result);
    if(result !== null){
      this.setState({validate:true})
    }else{
      this.setState({validate:false})

  }
};

validatePassword = (value) => {
  let isPassOk = false;

  if (value) {
    isPassOk = value.toString().trim().length > 3 ? true : false;
  }

  this.setState({isPassOk})
}


//----------Фенкция генерации одноразового кода------------------//

generateCommonCode=()=>{
  let code = Math.floor(Math.random()*100000) //Генерация от 4х до 5и знаков
  console.log(code);
    this.setState({generatedCode:code}) 
};


//------------------------Функция кнопки------------------------//

validationButtonHandler = (e) => { 
  const {input,passwordInput,validate,isPassOk} = this.state;//Объявляем значения из state
    
  if (input.length > 15 && validate === true && isPassOk) {
    Promise.resolve( AuthService.makeLogin({ email: input, password: passwordInput.toString() }))
    .then(() => window.location ="/MapModule");  
  } else if (!isPassOk) {
    alert("Вы ввели некорректный код");
  } else if (validate !== true || input.length < 15) {
    alert('Вы ввели неверный номер телефона');
  };
};

//--------------Обработчик ввода поля пароля---------------//

passwordHandler = (value) => {
setTimeout(()=>{
this.setState({passwordInput:Number(value) }); //Конвертируем строку ввода пароля в номер для сравнения с генерируемым кодом 
this.validatePassword(value);
},50);
}



render(){
const {input,validate, isPassOk} = this.state;

	return (
		<div className="loginScreen">

      <div className="registration">
      <h3>Авторизация</h3>
      </div>
      
    <div className="regwrapper">

    
      <div className="validationInputRow">
     
      <p>Номер телефона</p>
          <div className="inputRowComponent">
          
            <input onChange={this.inputHandler} 
                   className="validationInputField"
                   placeholder="+7(___)___-__-__"
                   maxLength="16"
                   
            />

<p className="validationErrorText" style={validate === false ? {display:'block'}:{display:'none'}
                 }>Номер введён неправильно.<a href="/PhoneValidation">Попробуйте ещё раз</a></p>
             
              <img className="validationInputFieldIndication"src={validationSuccess}
                   style={validate === true ? {display:'block'}:{display:'none'} }
              />
              <img className="validationInputFieldIndication"src={validationFaild}
              style={input.length > 3 && validate !== true ? {display:'block'}:{display:'none'} }
                />


          
        </div>
        
        <div className="codeField" 
             style={{display:'block'}}>
         
          <p>Введите код</p> 
            <div className="inputRowComponent"> 
          <input 
            className="validationInputField" 
            placeholder="• • • • •" 
            onChange={ ()=>{this.passwordHandler(event.target.value)}}
            maxLength="5"/>

          <img className="validationInputFieldIndication" src={validationSuccess}
            style={isPassOk ? {display:'block'}:{display:'none'} }
          />
     
          <img className="validationInputFieldIndication" src={validationFaild}
            style={!isPassOk ? {display:'block'}:{display:'none'} }
          />
    
        </div>
      </div>
    </div>

    <button 
      className="passwordSendButton" 
      style={(validate === true && isPassOk)? { opacity:1} : {opacity:0.5}}
      onClick={ ()=>{this.validationButtonHandler(event)}}
    > 
      <p>Войти</p>

    </button>
  </div>
</div>
		);
  }
}