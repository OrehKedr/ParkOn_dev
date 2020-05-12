import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";




export default class Training extends React.Component {

    state={
        
    };

    


    render(){
        return <div className="training">
                <div className="letsBegin">
                      <p>
                        Регистрация
                        <br/>
                        прошла успешноs
                      </p>
                </div>
      
      <div className="loginLinksRow">
                     <Link to="/LetsTraining" className="loginLink" >
                        Краткое обучение
                    </Link>
              
                  <Link to="/Map" className="loginLink">
                      Пропустить 
                  </Link>
              </div>
          </div>
      
        }
      }