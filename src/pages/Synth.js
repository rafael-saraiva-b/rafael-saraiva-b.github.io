import React from "react";
import { useState } from "react";
import Kick from "../components/Kick";


function Synth()  {
  const [bpm,setBpm] = useState(120);
  const [playing,setPlaying]=useState(false);

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
      </form>
      <Kick playing={playing} bpm={bpm}/> 
      </>
    );
  };

export default Synth;