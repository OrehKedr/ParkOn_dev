import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";




export default class Training extends React.Component {

    state={
        
    };

    


    render(){
        return <div className="training">
          <h1 className="trainingWelcome">Вы успешно авторизовались</h1>
                <div className="letsBegin">
                          <p>Давайте начнем</p>
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