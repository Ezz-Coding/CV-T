  import { useContext, useEffect, useState } from 'react'


  import './index.css'
  import Header from './Main/header/Header'
  import Navber from './Main/navber/Navber'
  import Main from './Main/Main-body/Main'
  import Footer from './Main/Footer/Footer'   
  import WhiteBorder from './Main/AME/White/WhiteBorder'
  import {  Contextthis } from './Component/Login'
  import BlackScreen from './Component/BlackScreen'
  import video from './assets/videoBG (1).mp4'

  import Intro from './Main/Main-body/Intro'
  import { ITCV } from './Component/ITCV'
import StartWelcome from './Main/AME/Start/StartWelcome'
import SigDif from './Main/AME/SigDif/SigDif'
import LoginDif from './Main/AME/LoginDif/LoginDif'






  
  function App() {
        const [click,setclick]=useState(false);
    
    const{start}=useContext(Contextthis);
    
        
        
        
    
 
    

  const [startSaved,setstartSaved]=useState(()=>{
      const strartsaved =localStorage.getItem('start');
      return strartsaved?JSON.parse(strartsaved):false;
  });
  
  useEffect(()=>{
    localStorage.setItem('start',JSON.stringify(start))
    },[start])
    return (
  
      <>
         
      {
       
     start == "Guest"? <>
        <ITCV>
        <Navber click={click} setClick={()=>setclick(!click)}/>
        </ITCV>
    
        <Header  click={click}setClick={()=>setclick(!click)}/>
        <Main/>
        
      
        <WhiteBorder/>
        <Intro/>
        <Footer/>
        <BlackScreen/>
    
        <video  loop autoPlay muted className='Video1'  preload="auto">
  <source type='video/mp4' src={video} ></source>

  </video>
        </>
  : start == "Sigup"?<SigDif/>: start=="Login"?<LoginDif/>: <StartWelcome/>
      
      }
      </>
  

  

    )
  }

  export default App
