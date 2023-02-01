import React from "react";
import Circles from '../services/Circles'
import { useState,useEffect } from "react";
import { Song, Track, Instrument } from 'reactronica';

function Kick(props) {
  const [totalKick,setTotalKick]= useState(10);
  const [beatKick,setBeatKick]=useState(4);
  const MAX = 32;
  const [circlesKick,setCircleKick]=useState(Circles(totalKick,beatKick,'D3'));
  useEffect(()=>{setCircleKick(Circles(totalKick,beatKick,'D3'))},[totalKick,beatKick]);
  useEffect(()=>{if(totalKick<beatKick){setBeatKick(totalKick)}},[totalKick,beatKick]);

  return(
    <>
    <form>
         <h2>Kick</h2>
        <input
         type="range"
         min='2'
         max={MAX}
         onChange={(e)=>setTotalKick(parseInt(e.target.value))}
         value={totalKick}/>
         <p>{totalKick}</p>
         <input
         type="range"
         min='1'
         max={totalKick}
         onChange={(e)=>setBeatKick(parseInt(e.target.value))}
         value={beatKick}/>
         <p>{beatKick}</p>
    </form>
      <Song bpm={props.bpm} isPlaying={props.playing} >
        <Track
         steps={circlesKick}
         onStepPlay={(e)=>{console.log('kick',e)}}
         >
         <Instrument 
          type="sampler"
          samples={{D3:'/samples/kick.wav'}}
          />
        </Track>
      </Song>
    </>
)
}

export default Kick;