import React, { useContext, useEffect, useState } from 'react'
import './../Main-body/Main.css'
import { Contextthis } from '../../Component/Login';
import iconeclose from './../../assets/close-circle-line.svg'


const Main = () => {
    const [click,setClick]= useState(false);
    const {Login} =useContext(Contextthis)
    const [BackInfo,setBackInfo]= useState(false);
    const {setSure} = useContext(Contextthis);
  
    const openClick=()=>{
      const son1 = document.getElementById('Son1');

 
      son1.style.animation=click?'rotat 1s forwards':null;
    }
  return (
    <>
   
      <div className="Main">   
        {Login?  <div className="Main-son" id='Son1' onClick={()=>{
          openClick();
          
          setClick(false)
          setBackInfo(true)
          setSure(true)
        }}>
  
          
  </div>
        :null
      
      }
     
    
        </div>
        {
          BackInfo?<div className="backInfo">
          <img src={iconeclose} onClick={()=>{setBackInfo(false)
            setClick(true)
          openClick();
setSure(false);
          }} alt="not found this image" />
         <span>Name : Ez-Code</span>
         <br />
         <br />
         <span>Phone : 0798078447</span>
         <br />
         <br />

         <span>age : 20</span>
         <br />
         <br />

         <span>Major : Software Engineering</span>
         <table>
          <thead>
            <tr>
              <th><h1>DevWEB</h1></th>
              <th><h1>Links</h1></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><h1>Realvine</h1></td>
              <td><a href="https://github.com/Ezz-Coding/task4">{"🌐"}</a></td>
            
         
              <td><h1>Monogram</h1></td>
              <td><a href=" https://github.com/Ezz-Coding/task5">{"🌐"}</a></td>
            </tr>
            <tr>
              <td><h1>Lobe</h1></td>
              <td><a href="https://github.com/Ezz-Coding/test">{"🌐"}</a></td>
          
              <td><h1>Ableton</h1></td>
              <td><a href="https://github.com/Ezz-Coding/task2">{"🌐"}</a></td>
            </tr>
            <tr>
              <td><h1>Huddle</h1></td>
              <td><a href="https://github.com/Ezz-Coding/Task3">{"🌐"}</a></td>
           
              <td><h1>EV-Car</h1></td>
              <td><a href="https://astonishing-crisp-10ed14.netlify.app">{"🌐"}</a></td>
            </tr>
            <tr>
              <td><h1>Gemini</h1></td>
              <td><a href="https://stupendous-semolina-cadf02.netlify.app">{"🌐"}</a></td>
          
              <td><h1>Chips</h1></td>
              <td><a href="https://elaborate-kataifi-6c8f1b.netlify.app">{"🌐"}</a></td>
            </tr>
            
          </tbody>
         </table>

        </div>:null
        }
        
     
    </>
  )
}

export default Main
