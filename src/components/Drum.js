import React from "react";
import Circles from '../services/Circles'
import { useState,useEffect } from "react";
import { Song, Track, Instrument } from 'reactronica';

function Drum(props) {
  const [total,setTotal]= useState(10);
  const [beat,setBeat]=useState(4);
  const [num,setNum]=useState(1);
  const MAX = 32;
  const [circles,setCircle]=useState(Circles(total,beat,'D3'));
  useEffect(()=>{setCircle(Circles(total,beat,'D3'))},[total,beat]);
  useEffect(()=>{if(total<beat){setBeat(total)}},[total,beat]);

  return(
    <>
    <form>
         <h2>{props.name}</h2>
        <input
         type="range"
         min='2'
         max={MAX}
         onChange={(e)=>setTotal(parseInt(e.target.value))}
         value={total}/>
         <p>{total}</p>
         <input
         type="range"
         min='1'
         max={total}
         onChange={(e)=>setBeat(parseInt(e.target.value))}
         value={beat}/>
         <p>{beat}</p>
         <input
         type="range"
         min='1'
         max='2'
         onChange={(e)=>setNum(parseInt(e.target.value))}
         value={num}/>
         <p>{num}</p>
    </form>
      <Song bpm={props.bpm} isPlaying={props.playing} >
        <Track
         steps={circles}
         >
         <Instrument 
          type="sampler"
          samples={{D3:`/samples/${props.name}${num}.wav`}}
          />
        </Track>
      </Song>
    </>
)
}

export default Drum;