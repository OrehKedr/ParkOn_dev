import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import logo from "./img/logo.png"


export default class Feedback extends React.Component {

    state={
        
    };

    render(){
        return <div className="feedback">
        
        <div className="feedback_header">
            <div className="feedback_logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="close"></div>
        </div>
            <p className="feedbackText">Обращение</p>
            

            
            <textarea name="FeedbackArea"  cols="30" rows="10" style={{resize:"none"}}
             placeholder="Вы можете оставить отзыв, сообщить о неполадке или просто пообщаться с нами;) "></textarea> 
            




<div className="send_it">
            <Link to="/Map" className="send" >
                              Отправить
                                
                        </Link>                       
                          </div>
                
    

            </div>
      
        }
      }