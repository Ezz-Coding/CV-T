import { useState } from 'react'


import './index.css'
import Header from './Main/header/header'
import Navber from './Main/navber/Navber'
import Main from './Main/Main-body/Main'
import Footer from './Main/Footer/Footer'
import WhiteBorder from './Main/AME/WhiteBorder'
import { ContextPorvider } from './Component/Login'
import BlackScreen from './Component/BlackScreen'
import video from './assets/videoBG.mp4'
import Intro from './Main/Main-body/intro'
function App() {
  
  const [click,setclick]=useState(false);

  return (
    <> 
  <ContextPorvider>
    <Navber click={click} setClick={()=>setclick(!click)}/>
     <Header  click={click}setClick={()=>setclick(!click)}/>
    <Main/>
    <WhiteBorder/>
    <Intro/>
    <Footer/>
    <BlackScreen/>

    </ContextPorvider>
<video  loop autoPlay muted >
  <source type='video/mp4' src={video} ></source>
</video>
    </>
  )
}

export default App
