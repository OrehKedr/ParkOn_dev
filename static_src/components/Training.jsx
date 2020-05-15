import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import MapModule from './MapModule';




export default class Training extends React.Component {

    state={
        
    };

    


    render(){
        return <div className="training">
                      <h3>
                        Регистрация
                        <br/>
                        прошла успешно
                      </h3>
      
      <div className="loginLinksRow">
                     <Link to="/LetsTraining" className="loginLink" >
                        Краткое обучение
                    </Link>
              
                  <Link to="/MapModule" className="loginLink">
                      Пропустить 
                  </Link>
              </div>
          </div>
      
        }
      }