import React from "react";
import Circles from '../services/Circles'
import { useState,useEffect } from "react";
import { Song, Track, Instrument } from 'reactronica';

function Drum(props) {
  const [total,setTotal]= useState(10);
  const [beat,setBeat]=useState(4);
  const MAX = 32;
  const [circles,setCircle]=useState(Circles(total,beat,'D3'));
  const [playedNote,setPlayedNote]=useState(0);
  const [inPlaying, setInPlaying]=useState(props.playing);
  useEffect(()=>{setCircle(Circles(total,beat,'D3'))},[total,beat]);
  useEffect(()=>{if(total<beat){setBeat(total)}},[total,beat]);
  useEffect(()=>{setInPlaying(props.playing)},[props.playing]);

  return(
    <>
    <form>
         <h2>{props.name}</h2>
        <input
          type="range"
          min='2'
          max={MAX}
          onChange={(e)=>{setTotal(parseInt(e.target.value))
            setInPlaying(false)
            setTimeout(()=>setInPlaying(props.playing),1000)}}
          value={total}/>
        <p>{total}</p>
        <input
          type="range"
          min='1'
          max={total}
          onChange={(e)=>setBeat(parseInt(e.target.value))}
          value={beat}/>
        <p>{beat}</p>
    </form>
    <p>Played Note {playedNote}</p>
      <Song bpm={props.bpm} isPlaying={inPlaying} >
        <Track
         steps={circles}
         onStepPlay={(note,index)=> {setPlayedNote(index+1)
        console.log(note)}}
         >
         <Instrument 
          type="sampler"
          samples={{D3:`/samples/${props.name}.wav`}}
          />
        </Track>
      </Song>
    </>
)
}

export default Drum;