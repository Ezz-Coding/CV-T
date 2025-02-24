
import React, { createContext, useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid';
 

const Contact = createContext();
const ITCV = (props) => {
const [InfoCus , setInfoCus] = useState(() => {
  const localData = localStorage.getItem("Stroge");

  return localData ? JSON.parse(localData) : [];
  
});




  const [Name,setName] = useState('');
  const [Gamil,setGamil] = useState('');
  const [Address,setAddress] = useState('');
  const [Phone,setPhone] = useState(0);
  const [Pass,setPass] = useState('');
   useEffect(()=>{
    localStorage.setItem("Stroge",JSON.stringify(InfoCus));
   }
  ,[InfoCus]);
 

 localStorage.clear();
  const handleAddInfo = () => {
    const InfoCusd ={
      ID : uuidv4(),
     Name:Name,
       Address,
      Phone,
     Gamil:Gamil,
       Pass:Pass,
      
      }


setInfoCus((prv)=>[...prv,InfoCusd])

setName("");

setAddress("");
setPhone("");


}
const ContactValue = {
  InfoCus,
  Name,
  Address,
  Phone,
  setGamil,
  setPass,
handleAddInfo,

 }
  return (
    <>
  
    <Contact.Provider  value={ContactValue}>
     {props.children}
    </Contact.Provider></> 
  )
}

export  {ITCV,Contact}

