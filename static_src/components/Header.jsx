import React from "react";
import ReactDOM from "react-dom";
import MainScreen from './MainScreen';
import PropTypes from "prop-types";
import style from "./styles/style.css";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Info from "./info";
import Map from "./map";



export default class App extends React.Component {

	state={

	}

render(){
	return( 
			<Router>
				<div className='App'>
				<div className="linksList"> 
				<ul >
				<li>
			 <Link to='/Info' className="headerLink">Info</Link>
				</li>
				<li>
			 <Link to='/Map' className="headerLink">Map</Link>
			 	</li>
			 	</ul>
			 	</div>
			<Switch>
					<Route path="/Info">
						<Info/>
					</Route>
					<Route path="/Map">
						<Map/>
					</Route>
					<Route path="/">
						<MainScreen />
					</Route>

			</Switch>
		</div>
	</Router>
	);	
  }
}