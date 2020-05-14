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
      terminated:false,
    };


    componentDidMount() {
      console.log('mount');
      this.requestsAxios();
      this.playerRendering();

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
    };



    streamActions=()=>{
      if (this.state.terminated === false || undefined) {

      axios.post(`http:\//localhost:3000/api/stream/close/${this.state.streamID}`,{id:`${this.state.userID}`})
      .then((response)=>{
          this.setState({terminated:true})
      })
     }else{
      this.setState({terminated:false})
      this.playerRendering();
      this.getStreamPort();
     }
    }



    render(){
      const {portID,terminated} = this.state;
      console.log(portID);
        return (
        <div id="Stream">
          
          <div className="player">
                          <p className="terminatedText"
                           style={terminated === true ? {display:"block"}:{display:'none'} }>
                           Трансляция остановлена
                           </p>
        	     <canvas id="canvas"></canvas>
          
                  <button  className="passwordSendButton streamActions__button"
                       onClick={()=>{this.streamActions()}}
                       style={terminated === true || undefined ? {display:'block'}:{display:'none'}} >
                       <p>Начать трансляцию</p>
                  </button>          



               <button  className="passwordSendButton streamActions__button"
                    onClick={()=>{this.streamActions()}} 
                    style={terminated === false || undefined ? {display:'block'}:{display:'none'}} >
                    <p>Завершить трансляцию</p>
               </button>          



          </div>

        </div>

      	);
      }
    }