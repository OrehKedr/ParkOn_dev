import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import axios from "axios";
import JSMpeg from 'jsmpeg-player';



export default class Stream extends React.Component {

    state={
    	streamID:' ',
      userID:' ',
      portID:9001,
    };


    componentDidMount() {
      console.log('mount');
      this.requestsAxios();

    };


    getStream = () => {
      console.log('ID потока получен');
      return axios.get('http:\//localhost:3000/api/stream');
    };

    getUser = () => {
      console.log('User ID получен');
      return axios.get('http:\//localhost:3000/api/user/');
    };

     getStreamPort = () => {
        console.log('Порт получен');
       axios.post(`http:\//localhost:3000/api/stream/open/${this.state.streamID}`,{ id:`${this.state.userID}`})
       .then((response)=>{
            this.setState({portID:response.data})
       })
      };



    requestsAxios = () => {
      console.log('requests start')
      axios.all([this.getStream(), this.getUser()])
      .then (axios.spread( (strm,usr) => {
        const strmID = strm.data[2]._id;
        const usrID = usr.data[0]._id ;
        this.setState({streamID:strmID,userID:usrID});
        console.log('stream ID и User Id записаны');
        const strmPort = this.getStreamPort();
        console.log('Requests ended');
      }));
    }

    playerRendering = () => {
      const portid = this.state.portID;
      setTimeout(()=>{

      const streamURL = `ws://localhost:${portid}`;
      let canvas = document.getElementById('canvas');
      const player = new JSMpeg.Player(streamURL, {canvas:canvas} );
      console.log('player create');
      },800);
    }



    render(){
      const {portid} = this.state;
      console.log(this.state.portID);
      const player = this.playerRendering();
        return (
        <div id="Stream">
          <div className="player">
        	<canvas id="canvas"></canvas>
          </div>
        </div>

      	);
      }
    }