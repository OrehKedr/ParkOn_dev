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
                        Регистрация завершена.
                        <br/>
                        <span style={ {color:'gray'} }>Хотите пройти обучение?</span>
                      </p>
                </div>
      
      <div className="loginLinksRow">
                     <Link to="/LetsTraining" className="LetsTrainingLink" >
                        Перейти к обучению
                    </Link>
              
                  <Link to="/Map" className="skip">
                      Пропустить 
                  </Link>
              </div>
          </div>
      
        }
      }