import React from "react";
import Circles from '../services/Circles'
import { useState,useEffect } from "react";
import { Song, Track, Instrument } from 'reactronica';


function Synth()  {
  const [totalKick,setTotalKick]= useState(10);
  const MAX = 32;
  const [beatKick,setBeatKick]=useState(4);
  const [circles,setCircle]=useState(Circles(totalKick,beatKick))
  const [notes,setNotes]=useState();

  useEffect(()=>{setCircle(Circles(totalKick,beatKick))},[totalKick,beatKick])

  useEffect(()=>{if(totalKick<beatKick){setBeatKick(totalKick)}},[totalKick,beatKick])

    return (
      <>
      <form>
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
      <p>{circles}</p>


      <button
      onMouseDown={()=> setNotes(['D3'])}
      onMouseUp={()=>setNotes([])}
      >
        kick   
      </button>

      <Song>
        <Track>
         <Instrument 
          type="sampler"
          samples={{D3: '../samples/kick.wav'}}
          notes={notes}
          onLoad={(buffers)=>{
            console.log(buffers)
            console.log('deu')
          }}
        />
        </Track>
      </Song>
      </>
    );
  };

export default Synth;