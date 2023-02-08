import React from "react";
import { useState } from "react";
import Drum from "../components/Drum";
import DrumsTypes from "../services/DrumsTypes";
import '../Synth.css';

function Synth()  {
  const [bpm,setBpm] = useState(150);
  const [playing,setPlaying]=useState(true);
  const [selectedDrum,setSelectedDrum]=useState(DrumsTypes[0]);
  const [addedDrums,setAddedDrums]=useState([]);


    return (
      <>
      <h1>Euclidean Circles Drum Machine</h1>
      <div id='synth'>
      <form className="generalForm">
         <select value={selectedDrum} onChange={(e)=>setSelectedDrum(e.target.value)}>
           {DrumsTypes.map((Drum,index)=><option key={index} value={Drum} >{Drum}</option>)}
         </select>
         <button id='addBtn' type='button' onClick={()=>setAddedDrums([...addedDrums,selectedDrum])}>Add</button>
        <button
        onClick={()=>setPlaying(!playing)}
        type='button'
        id={playing?'playBtnActive':'playBtnInactive'}
        >
        <img src={playing?"/Icons/Pause.png":'/Icons/Play.png'} alt="pause/play" id="playPause"/></button>
        <div id='bpmDiv'>
        <p>BPM:{bpm}</p>
        <input
         type="range"
         min='60'
         max='360'
         onChange={(e)=>setBpm(parseInt(e.target.value))}
         value={bpm}/>
         </div>
         <button
         type='button'
         id="helpBtn"
         >?</button>
      </form>
      <div className="drums">
        {addedDrums.map((drum,index)=><Drum 
          playing={playing} 
          bpm={bpm} 
          name={drum} 
          key={index}
          /> )}
        </div>
      
      </div>
          </>
    );
  };

export default Synth;