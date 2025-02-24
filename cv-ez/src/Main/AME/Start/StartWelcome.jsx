import './start.css';
import React, { useContext, useState } from 'react'
import video1 from './../../../assets/ADS(3).mp4'
import video3 from './../../../assets/ADS(2).mp4'


import { Contextthis } from '../../../Component/Login';
const StartWelcome = () => {
  const{ setStart ,log_sig,
    setLog_sig,
    
   
   }=useContext(Contextthis);


   const handleStart=(event)=>{
  setLog_sig(event.target.value); 
  }
 
  const gate=()=>{
 if (log_sig == "Login") {
  setStart("Login")
 }
 else if(log_sig == "Sigup"){
  setStart("Sigup")


 }

 else{
  setStart("Guest")

 }
  }
  return (
 
<div className="main_start">

<video  playsinline   autoPlay muted className='Video4'  loading="lazy" preload="auto">
<source type='video/mp4' src={video3} ></source>

</video>
<video playsinline  loop autoPlay muted className='Video3'  loading="lazy" preload="auto">
<source type='video/mp4' src={video1} ></source>

    </video>
    <div className="main_for_button">
      <div className="liner_button">
        <select value={log_sig} onChange={handleStart}>
          
          <option value={"Guest"}>Guest</option>
      
          <option value={"Sigup"}>Sigup</option>
          <option value={"Login"}>Login</option>
        </select>
     
      </div>
    <button className='Bn-s' onClick={()=>{
    
    gate();
    }}><i class="ri-arrow-right-line"></i></button>
    </div>
    </div>
  )
}

export default StartWelcome
