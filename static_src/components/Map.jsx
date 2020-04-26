import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";



export default function Info(){
return(
	<div className="map">
	<Link to='/' style={{textDecoration:"none",margin:"0",padding:'0'}}>←</Link>
	<h1 >Map</h1>
	<iframe className="mapFrame"
	 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8992.973377628592!2d36.82287590258678!3d55.70214179016053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b560789bdd1357%3A0xde3f800204edc10b!2z0JvRg9GG0LjQvdGB0LrQvtC1INGILiwgNCwg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC7LiwgMTQzMTgw!5e0!3m2!1sru!2sru!4v1586846076469!5m2!1sru!2sru" 
	 ></iframe>
	 <p className='mapLoaderText'>Map is loading...</p>
	</div>
	);

};


{/*
Dumb компонент
*/}