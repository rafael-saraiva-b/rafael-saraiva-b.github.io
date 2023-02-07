import React from "react";
import Circles from '../services/Circles'
import { useState,useEffect } from "react";
import { Song, Track, Instrument } from 'reactronica';
import '../Synth.css';
import '../Circle.css';

function Drum(props) {
  const [total,setTotal]= useState(10);
  const [beat,setBeat]=useState(4);
  const MAX = 32;
  const [circles,setCircle]=useState(Circles(total,beat,'D3'));
  const [playedNote,setPlayedNote]=useState(0);
  const [loading, setLoading]=useState(true);
  const [muted,setMuted]=useState(false);
  const [volume,setVolume]=useState(5);
  const[tan,setTan]=useState(Math.tan(Math.PI/total));

  useEffect(()=>{setCircle(Circles(total,beat,'D3'))},[total,beat]);
  useEffect(()=>{if(total<beat){setBeat(total)}},[total,beat]);
  useEffect(()=>{setTan(Math.tan(Math.PI/total))},[total]);

  return(
    <div className="drum">
        <h2>{props.name}</h2>
        <div className="circleContainer" style={{"--m":`${total}`,"--tan":`${tan}`}}>
        {circles.map((beat,index) => {
          if(playedNote!==index){
            return (beat.name)?
            <img src="/Icons/Active.png" alt="Active" key={index} style={{"--i":index}}/>
            :
            <img src="/Icons/Inactive.png" alt="Inactive"key={index} style={{"--i":index}}/>
          }
          return (beat.name)?
          <img src="/Icons/ActivePlayed.png" alt="Active"key={index} style={{"--i":index}}/>
          :
          <img src="/Icons/InactivePlayed.png" alt="Inactive"key={index} style={{"--i":index}}/>
        })}
          </div>
      <form >
        <button
         type='button'
         onClick={()=>{
           setMuted(!muted);
           
          }}
         >{muted ? 'Unmute': 'Mute'}</button>
          <input
            type="range"
            min='0'
            max='15'
            onChange={(e)=>setVolume(parseInt(e.target.value))}
            value={volume}/>
          <p>Volume:{volume}</p>
        <input
          type="range"
          min='2'
          max={MAX}
          onChange={(e)=>{
            setLoading(false);
            setTotal(parseInt(e.target.value));
            setTimeout(()=>{
              setLoading(true);
            },500)
          }}
          value={total}/>
        <p>{total}</p>
        <input
          type="range"
          min='1'
          max={total}
          onChange={(e)=>setBeat(parseInt(e.target.value))}
          value={beat}/>
        <p>{beat}</p>
        <p>Played Note {playedNote}</p>
    </form>
      {loading && 
      <Song bpm={props.bpm} isPlaying={props.playing} >
        <Track
         steps={circles}
         onStepPlay={(note,index)=> {setPlayedNote(index)
        // console.log(props.name,index,note)
      }}
        mute={muted}
        volume={volume-7}
         >
         <Instrument 
          type="sampler"
          samples={{D3:`/samples/${props.name}.wav`}}
          />
        </Track>
      </Song>}
    </div>
)
}

export default Drum;