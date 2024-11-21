import React, { useContext, useEffect, useState } from 'react'
import './navber.css'
import iconeclose from './../../assets/close-circle-line.svg'
import imageLogin from '../../assets/login-box-line.svg';
import { Contextthis } from '../../Component/Login';
import imageOut from '../../assets/arrow-right-up-box-line (1).svg';
 
const Navber = ({click,setClick}) => {
  const [close] = useState('close');
  
  const [NameLOS,setNameLOS] = useState("Sigin UP");
  const [NameLOSM,setNameLOSM] = useState("Login");
  const [button,setButton] = useState("Submit");
  const {Login ,setLogin} = useContext(Contextthis);
const {Back,setBack} = useContext(Contextthis)
const {sure,setSure} = useContext(Contextthis)
 
useEffect(()=>{
  if (NameLOS === "Login") {
    setNameLOS("Sigin UP");
    setNameLOSM("Login");
   }
   else{
    setNameLOSM("Sigin UP");
    setNameLOS("Login");
   }

},[])
   
     return (
    <>
    
      <div className="Main-contaner" id='Main-contaner' style={{right:click ?'-1%':'-100%'}}>
        <img src={iconeclose}onClick={setClick} alt="not found this image" className='image2' />
        {close === 'close'?<p className='weclome_for_user'>Soon 😊</p>:
      Login? <><div className="weclome_for_user">
        Welcome ?? to CV
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
     
      </div></>:<div className="image_Login"  onClick={()=>setBack(true)}>
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
  Back?<div className="Login_Main">
    
<div className="Login_Liner">
  <h1>{NameLOS}</h1>
  <br />
  <br />
  <br />
  <br />

 {
  NameLOS === "Sigin UP"? 
  <>
  <label htmlFor="">User Name</label>
  <input type="text" name="" id="" />
  <br />
  <br /></>:
  null
 }
   
    <span>
    <label htmlFor="">Gmail</label>
    </span>

    <input type="email" name="" id="" />
    <br />
    <br />
    <label htmlFor="">Password</label>

    <input type="password" name="" id="" />
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
    <button  className='Submit' >{button}</button>
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
    <button  className='Submit' onClick={()=>setBack(false)}>Close</button>
  
</div>
  </div>:
  null
}
    </>
  )
}

export default Navber
