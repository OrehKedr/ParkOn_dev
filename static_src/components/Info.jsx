import React from "react";
import ReactDOM from "react-dom";

const style = {
fontSize:'30px',
};

export default function Info(){
return(
	<>
	<h1 style={ style }>Info</h1>
		<ul style={ {listStyle:'none',padding:'0 10px'} }>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
		</ul>
	</>
	);

};


