import { createContext, useState } from "react";

const Contextthis  = createContext();


const ContextPorvider = (props) => {
    const [Login,setLogin] =useState(true);
        const [click,setClick]= useState(true);
        const[start,setStart]=useState("Guset");
    const [Back,setBack] = useState(false);
  const [sure,setSure] = useState(false);

  const[ log_sig,setLog_sig] = useState('Guest');
  
 

const contextValue ={
    Login,
    setLogin,
    Back,
    setBack
    ,sure,
    setSure
    ,click,
    setClick,
    start
    ,setStart,
    log_sig,
    setLog_sig,
    
    
}
  return (
    <Contextthis.Provider value={contextValue}>
        {props.children}
    </Contextthis.Provider>
  )
}

export  {ContextPorvider,Contextthis};

