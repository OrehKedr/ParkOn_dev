import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import about_icon from "./img/about_icon.png";
import learn_icon from "./img/learn_icon.png";
import sup_icon from "./img/sup_icon.png";

export default class Personal extends React.Component {

    state={
        
    };

    


    render(){
        return (
        <div className="personal">
            <div className="example">
                <b>ivanovivan@example.com</b>
            </div>

            <div className="menu_list">
            <Link to="/Welcome" className="menu_list" >
				  			  Меню
				  		</Link>      
            </div>

            <div className="linkpersonal">

                    <div className="personal_link">
                        <Link to="/About" >
				  			  О приложении
				  		</Link>                       
                                <img className="personal_icons" src={about_icon}/>
                    </div>

				    <div className="personal_link">    
						<Link to="/Training" >
							  Обучение
						</Link>
                              <img className="personal_icons" src={learn_icon}/>
                    </div>          
        
                        <hr className="line"/>
                        
                    <div className="personal_link">
                          <Link to="/Feedback" >
							     Обратная связь
						  </Link>
                              <img className="personal_icons" src={sup_icon}/>
                    </div>

            </div>
        </div>
        );
    }
 }