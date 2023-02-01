import React from "react";
import Circles from '../services/Circles'
import { useState,useEffect } from "react";
import { Song, Track, Instrument } from 'reactronica';
import Kick from "../components/Kick";


function Synth()  {
  // const [totalKick,setTotalKick]= useState(10);
  const [totalHiHat,setTotalHiHat]= useState(10);
  const MAX = 32;
 // const [beatKick,setBeatKick]=useState(4);
  const [beatHiHat,setBeatHiHat]=useState(4);
  //const [circlesKick,setCircleKick]=useState(Circles(totalKick,beatKick,'D3'));
  const [circlesHiHat,setCircleHiHat]=useState(Circles(totalHiHat,beatHiHat,'D3'));
  const [bpm,setBpm] = useState(120);

 // useEffect(()=>{setCircleKick(Circles(totalKick,beatKick,'D3'))},[totalKick,beatKick]);
  useEffect(()=>{setCircleHiHat(Circles(totalHiHat,beatHiHat,'D3'))},[totalHiHat,beatHiHat]);
 // useEffect(()=>{if(totalKick<beatKick){setBeatKick(totalKick)}},[totalKick,beatKick]);
  useEffect(()=>{if(totalHiHat<beatHiHat){setBeatHiHat(totalHiHat)}},[totalHiHat,beatHiHat]);
    return (
      <>
      <form>
        <input
         type="range"
         min='60'
         max='240'
         onChange={(e)=>setBpm(parseInt(e.target.value))}
         value={bpm}/>
         <p>bpm:{bpm}</p>
         <h2>Kick</h2>
        {/* <input
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
         <p>{beatKick}</p> */}
         <h2>HiHat</h2>
         <input
         type="range"
         min='2'
         max={MAX}
         onChange={(e)=>setTotalHiHat(parseInt(e.target.value))}
         value={totalHiHat}/>
         <p>{totalHiHat}</p>
         <input
         type="range"
         min='1'
         max={totalHiHat}
         onChange={(e)=>setBeatHiHat(parseInt(e.target.value))}
         value={beatHiHat}/>
         <p>{beatHiHat}</p>
      </form>

      {/* <Song bpm={bpm} isPlaying={true} >
        <Track
         steps={circlesKick}
         onStepPlay={(e)=>{console.log('kick',e)}}
         >
         <Instrument 
          type="sampler"
          samples={{D3:'/samples/kick.wav'}}
        />
        </Track>
      </Song> */}
      <Song bpm={bpm} isPlaying={true}>
        <Track
         steps={circlesHiHat}
         onStepPlay={(e)=>{console.log('hihat',e)}}
         >
         <Instrument 
          type="sampler"
          samples={{D3:'/samples/hihat.wav'}}
        />
        </Track>
      </Song>
      <Kick/> 
      </>
    );
  };

export default Synth;