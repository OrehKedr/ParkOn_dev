import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import logo from "./img/logo.png";
import axios from 'axios';


export default class Feedback extends React.Component {

    state={
        textareaInput:' ',
        feedbackSended:false,
    };


    textareaInput = (event)=>{
        const value = event.target.value;
        console.log(value);
        setTimeout(()=>{
        this.setState({textareaInput:value});
        },100)
    };




    feedbackSend = () => {
        console.log("click");
        const feedbackText = this.state.textareaInput;
        this.setState({feedbackSended:true})
        


        const url = 'https:\//example.com/profile';
const data = { text: this.state.textareaInput };

try {
    const response = fetch(url, {
            mode:'no-cors',
          method: 'POST', // или 'PUT'
          body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
          headers: {
          'Content-Type': 'application/json'
          }
  });
    
    const json = response.json();
                console.log('Успех:', JSON.stringify(json));
        } catch (error) {
                console.error('Ошибка:', error);
        };
        
}



    render(){
        return <div className="feedback">
        
        <div className="feedback_header">
            <div className="feedback_logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="close"></div>
        </div>
            <p className="feedbackText">Обращение</p>
            

            
            <textarea  name="FeedbackArea"  cols="30" rows="10" style={ {resize:"none"} }
             placeholder="Вы можете оставить отзыв, сообщить о неполадке или просто пообщаться с нами;) "
             onChange={ ()=>{this.textareaInput(event)} }
             ></textarea> 
            

            <button className="send send_it"
            onClick={()=>{this.feedbackSend()}} 
            style={{backgroundColor:'none'}}>
                         Отправить 
            </button>                                             
        </div>
      
        }
      }