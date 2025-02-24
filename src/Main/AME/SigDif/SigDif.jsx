import { useEffect, useState } from "react";

import "./SigDif.css"
const SigDif = () => {
  const [step, setStep] = useState(1);
  const [Click, setClick] = useState(1);
  const [sleep,setSleep] =useState(false);

  console.log(step);
  
  const onStepHandler=()=>{
    const An = document.getElementById('Loading_for_Procss');
if (step===1) {
  An.style.animation= " step1 2s linear forwards " ;    

}
   else if (step===2) {
    An.style.animation= " step2 2s linear forwards " ;    
  }
  else if (step===3) {
    An.style.animation= " step3 2s linear forwards " ;    

  }
  else{
    console.error("Element with id 'Loading_for_Procss' not found."); 
  }}
  useEffect(() => {
  onStepHandler();

}
, [step])
useEffect(()=>{
  const Main = document.getElementById("Main_Contant")
  const header = document.getElementById("header")
  const Son1 = document.getElementById("Main_Son1")
  const line = document.getElementById("color")
  const line1= document.getElementById("color1")
  const line2= document.getElementById("color2")
  const line3 = document.getElementById("color3")
  const line4 = document.getElementById("color4")
  const line5 = document.getElementById("color5")
  const line6 = document.getElementById("color6")
  const label = document.getElementById("label")
  const select = document.getElementById("select")
  const INext = document.getElementById("INext")
  const line7 = document.getElementById("line7")
  const Loading_for_Procss = document.getElementById("Loading_for_Procss")
  const Main_info = document.getElementById("Main_info")

  Main.style.backgroundColor= sleep?" rgb(18, 17, 17)":"white"
  header.style.backgroundColor= sleep?"rgb(15, 15, 16)":" rgb(255, 250, 250)"
  Son1.style.backgroundColor= sleep?" rgb(10, 10, 10)":"aliceblue"
  line.style.color = sleep?"aliceblue":" rgb(10, 10, 10)"
  line1.style.color = sleep?"aliceblue":" rgb(10, 10, 10)"
  line2.style.color = sleep?"aliceblue":" rgb(10, 10, 10)"
  line3.style.color = sleep?"aliceblue":" rgb(10, 10, 10)"
  line4.style.color = sleep?"aliceblue":" rgb(10, 10, 10)"
  line5.style.color = sleep?"aliceblue":" rgb(10, 10, 10)"
  line6.style.color = sleep?"aliceblue":" rgb(10, 10, 10)"
  line6.style.color = sleep?"aliceblue":" rgb(10, 10, 10)"
  select.style.color = sleep? "aliceblue":" rgb(10, 10, 10)"
  label.style.color = sleep? "aliceblue":" rgb(10, 10, 10)"
  INext.style.color = sleep? "aliceblue":" rgb(10, 10, 10)"
  select.style.borderColor = sleep? "aliceblue":" rgb(10, 10, 10)"
  INext.style.borderColor = sleep? "aliceblue":" rgb(10, 10, 10)"
  line7.style.backgroundColor = sleep? "aliceblue":" rgb(10, 10, 10)"

  Loading_for_Procss.style.backgroundColor = sleep? "aliceblue":" rgb(10, 10, 10)"
  Main_info.style.backgroundColor= sleep?"rgb(10, 10, 10)":" aliceblue"

  
},[sleep])

  return (
    <>
    <div className="Main_Contant" id='Main_Contant'>
        <div className="header" id='header'>
<h1 id='color'>Sigin up</h1>
<nav>
  {sleep ?
    <span><i class="ri-sun-line" onClick={()=>{
  setSleep(!sleep)
}}></i></span>
: <i class="ri-moon-line" onClick={()=>{
  setSleep(!sleep)
}
}></i>}
  <span ><a href="#"   id='color1'>Home</a></span>  
    <a href="#"  id='color2'>Privcy</a>
    <a href="#"  id='color3'>About</a>
    

</nav>
        </div>
        <div className="main">
            <div className="Main_Son1" id='Main_Son1'></div>
            <div className="Main_Son2">
            <form action="">

            <div className="Main_info" id='Main_info'>
              <div className="line" id='line7'></div>
              <p  id='color4'>Step {Click}</p>
              <div className="Loading_for_Procss" id='Loading_for_Procss'>
                </div>
                {Click == 1 ?  <>
                <div className="radio" id='color6'>
                  <p  id='color5'>Dept :</p>
                  <input type="radio" name="DeptCust" id="Student" />
                  <label htmlFor='Student'>Student</label>
                  <input type="radio" name="DeptCust" id="Work" />
                  <label htmlFor='Work'>Work</label>
                  <input type="radio" name="DeptCust" id="Dev" />
                  <label htmlFor='Dev' >Devloper</label>
                </div>
                <div className="Select" >
                  <label htmlFor="select" id='label'>Do you using this Account :</label>
                  <select id='select'>
                    <option value="">  Select for used  </option>
                    <option value="">  For search in job </option>
                    <option value="">  For search in employee </option>
                    <option value="">  For search in school </option>
                  </select>
                </div></> : Click == 2 ? 
                <>
                <div className="input_info">
                  <label htmlFor="Frist_Name">Frist Name :</label>
<input type="text" id="Frist_Name" />
<label htmlFor="Last_Name">Last Name :</label>
<input type="text" id="Last_Name" />
<br />
<br />
<br /><br />
<br />
<br />
<label htmlFor="PH" className='PH'>Phone :</label>

<input type="number" id="PH"  />


                </div>
                </>: Click == 3 ? <>
                <div className="input_Email">
                  <label htmlFor="Gmail">Gmail :</label>
                  <input type="email"  id="Gmail" />
                  <br />
<br />
<br /><br />
<br />
<br />
                  <label htmlFor="Password">Password :</label>
                  <input type="password"  id="Password" />
                  </div></> : null}
                  <div className="button">
                  {
                    Click == 2||Click ==3?
                    <i onClick={
                      ()=>{
 setStep(ev=>{
 return ev-1
 })         
 setClick(ev=>{
   return ev-1
 })  

                      }
                    }>Back</i>: null

                  }
                  {Click ==3 ?<button>Submit</button>:<i id='INext' onClick={()=>{
                    setStep(ev =>{
                      if (ev===3) {
                        return 3;
                      }
                      else{
                        return ev+1
                      }
                    })
                   
                 setClick(ev =>{
                 return ev+1});
                }}>Next</i>}
                
                </div>
                <br />
                <br />
                <br />
               
                </div>
               
                </form>
               </div>
              
        </div>
    </div>
    </>
  )
}

export default SigDif
