import React from "react";
import { useState } from "react";
import Drum from "../components/Drum";
import DrumsTypes from "../services/DrumsTypes";

function Synth()  {
  const [bpm,setBpm] = useState(120);
  const [playing,setPlaying]=useState(false);
  const [selectedDrum,setSelectedDrum]=useState(DrumsTypes[0]);
  const [addedDrums,setAddedDrums]=useState([]);

    return (
      <>
      <form>
        <p>BPM:{bpm}</p>
        <input
         type="range"
         min='60'
         max='240'
         onChange={(e)=>setBpm(parseInt(e.target.value))}
         value={bpm}/>
         <button
         onClick={()=>setPlaying(!playing)}
         type='button'
         >Playing {playing?"true":"false"}</button>
         <select value={selectedDrum} onChange={(e)=>setSelectedDrum(e.target.value)}>
           {DrumsTypes.map((Drum,index)=><option key={index} value={Drum} >{Drum}</option>)}
         </select>
         <button type='button' onClick={()=>setAddedDrums([...addedDrums,selectedDrum])}>Add Drum</button>
      </form>
      {addedDrums.map((drum,index)=><Drum playing={playing} bpm={bpm} name={drum} key={index}/> )}
      
      </>
    );
  };

export default Synth;