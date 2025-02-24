import React, { useContext, useEffect, useRef, useState } from 'react'
import './navber.css'
import iconeclose from './../../assets/close-circle-line.svg'
import imageLogin from '../../assets/login-box-line.svg';
import { Contextthis } from '../../Component/Login';
import imageOut from '../../assets/arrow-right-up-box-line (1).svg';
import { Contact } from '../../Component/ITCV';
import video from './../../assets/Top 10 (2).mp4'
const Navber = ({click,setClick}) => {
  const [close] = useState('');
  
  const [NameLOS,setNameLOS] = useState("Login");
  const [NameLOSM,setNameLOSM] = useState("Login");
  const [button,setButton] = useState("Submit");
  const {Login ,setLogin} = useContext(Contextthis);
const {Back,setBack} = useContext(Contextthis)
const {sure,setSure} = useContext(Contextthis)
const GS = useRef(null);
const PS = useRef(null);
const [lock,setlock] = useState(false);
const {Name , Phone ,Address ,handleAddInfo ,setGamil,setPass} = useContext(Contact);
useEffect(()=>{
  if (NameLOS === "Login") {
    setNameLOS("Sigin UP");
    setNameLOSM("Login");
   }
   else{
    setNameLOSM("Sigin UP");
    setNameLOS("Login");
   }
   

},[Back])

const saving=()=>{
  setGamil(GS.current.value) ;
  setPass(PS.current.value)  ;

handleAddInfo()
}
  const addwssm=(GS,PS)=>{
if (GS == "3zz-code@gmail.com") {
  if (PS == "3zz_100") {
    setLogin(true)
    setBack(false)
  }
}
else if (GS != null && GS !="3zz-code@gmail.com") {
  if (PS == "xdfd") {
    setLogin(true)
    setBack(false)
  }
}
else{
  setLogin(false)
  setBack(true)
}
  }
     return (
    <>
    
      <div className="Main-contaner" id='Main-contaner' style={{right:click ?'-1%':'-100%'}}>
      <div className="closer">
      <i class="ri-close-line" onClick={setClick}></i>

      </div>
        
        {close === 'close'?<p className='weclome_for_user'>Soon 😊</p>:
      Login? <><div className="weclome_for_user">
        Welcome {Name} to CV
      </div>
      <div className="logout">
        <span onClick={()=>setSure(true)}>Logout  <img src={imageOut} alt="" /></span>
       
      </div>
      <div className="nav_info">
       <a href="">About</a>
       <br />
       <br />
       <br />
       <a href="">DevLoper</a>
       <br />
       <br />
       <br />
       <a href="">Help</a>
     
      </div></>:<div className="image_Login"  onClick={()=>{setBack(true)
      setClick(false)
      }}>
          <label >Login</label>
<img src={imageLogin} alt="not found this image" />
     
</div> }


      </div>
     
      {
         close === 'close'?null:
        sure?
        <>
        <div className="backSure">
          <h3>Are you sure for Logout?</h3>
          <button className='Yes'onClick={()=>{setLogin(false)
            setSure(false)
          }}> Yes</button>
         <button className='NO' onClick={()=>setSure(false)}>No</button>
        </div>
        </>:
       
        null
      }
      {
         close === 'close'?null:
  Back? lock?<div className="Login_Main">
  
<div className="Login_Liner Anmation_this" id='Liner_Login'>
  <h1>{NameLOS}</h1>
  <br />
  <br />
  <br />
  <br />

 {
  NameLOS === "Sigin UP"? 
  <>
  <label htmlFor="">User Name</label>
  <input type="text"  />
  <br />
  <br /></>:
  null
 }
   
    <span>
    <label >Gmail</label>
    </span>

    <input type="email" ref={GS} />
    <br />
    <br />
    <label >Password</label>

    <input type="password" ref={PS} />
    <br />
    <br />
    {
      NameLOS === "Login"?
      <><p>Did you forget your password? <span>Forget Password</span></p>
      <br />
      <br />
     </>:
      null
    }
 <br />
    <button  className='Submit' onClick={()=>{
   
addwssm(GS.current.value,PS.current.value);
    }
  

    } >{button}</button>

    <button  className='Submit' onClick={()=>setBack(false)}>Close</button>
  
</div>
<div className="welcome" id='welcome'>
  <h1>Welcome to CV_T</h1>
<button className="Login_SiginUP" onClick={
      ()=>{  if (NameLOS === "Login") {
        setNameLOS("Sigin UP");
        setNameLOSM("Login");
        setButton("Create")
       }
       else{
        setNameLOSM("Sigin UP");
        setNameLOS("Login");
        setButton("Submit")
       }

    }}>{NameLOSM}</button>
</div>
  </div>: <video  loop autoPlay muted className='Video2' >
    <source type='video/mp4' src={video} ></source>
  
  </video>:
  null
}
    </>
  )
}

export default Navber
