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
  const [loading, setLoading]=useState(true);
  useEffect(()=>{setCircle(Circles(total,beat,'D3'))},[total,beat]);
  useEffect(()=>{if(total<beat){setBeat(total)}},[total,beat]);
  useEffect(()=>{console.log(circles)},[circles]);

  return(
    <>
    <form>
         <h2>{props.name}</h2>
         <button
         type='button'
         onClick={()=>{
           setLoading(false);
           props.delete(props.name);
           setTimeout(()=>{
              setLoading(true);
            },500)
          }}
         >X</button>
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
    </form>
    <p>Played Note {playedNote}</p>
      {loading && 
      <Song bpm={props.bpm} isPlaying={props.playing} >
        <Track
         steps={circles}
         onStepPlay={(note,index)=> {setPlayedNote(index+1)
        console.log(props.name,index,note)
      }}
         >
         <Instrument 
          type="sampler"
          samples={{D3:`/samples/${props.name}.wav`}}
          />
        </Track>
      </Song>}
    </>
)
}

export default Drum;