import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import markGreen from "./img/markGreen.png";
import markRed from "./img/markRed.png";
import camera from "./img/photo.png";
import findme from "./img/someicon.png";
import plus from "./img/plus.png";

export default class Letstraining extends React.Component {

    state={
        
    };



    render(){
        return(
       <div className="mainadvise">
            <div className="advice advice__firstAdvise">
              
              <div className="greenicon">
                <img className="ico" src={camera}/>
                <br/>
                <p className="num">9+</p>
              </div>
         
              <div className="adviceText">
                Иконка на карте указывает на наличие камеры ParkOn
                Зеленый цвет указывает на наличие свободных мест
              </div>
            
            </div>
              
              <div className="advice">

                  <div className="redicon">
                    <img className="ico" src={camera}/>
                    <br/>
                    <p className="num">0</p>
                  </div>

                  <div className="adviceText">
                      Красный же на их отсутствие. Цифрами указано кол-во свободных мест, нажав на иконку вы можете посмотреть трансляцию с камеры.
                  </div> 
               
               </div>

              <div className="advice">
                  
                  <div className="zoom">
                    <div className="circle circle__plus"></div>
                    <div className="circle circle__minus"></div>
                  </div>
                    
            
                  <div className="adviceText">
                    Иконки мастштабирования карты. Так же можно управлять масштабом
                    двумя пальцами, сужая и разводя их на экране смартфона.
                  </div>        
              </div> 

                          
                          

              <div className="advice">
                
                <div className="find">
                    
                    <img className="findIcon" src={findme}/>
                  </div> 
                    
                    <div className="adviceText">
                      Иконка определения Вашего местоположения на карте.
                      Нажимая на нее в первый раз, пожалуйста, предоставьте
                      разрешение приложению.               
                    
                </div>
 
              </div>
 
              <Link to="/Map" className="done">
                 Завершить
              </Link>
      </div>
      )
    }
  }