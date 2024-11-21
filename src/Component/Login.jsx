import { createContext, useState } from "react";

const Contextthis  = createContext();


const ContextPorvider = (props) => {
    const [Login,setLogin] =useState(true);
    const [Back,setBack] = useState(false);
  const [sure,setSure] = useState(false);


const contextValue ={
    Login,
    setLogin,
    Back,
    setBack
    ,sure,
    setSure
}
  return (
    <Contextthis.Provider value={contextValue}>
        {props.children}
    </Contextthis.Provider>
  )
}

export  {ContextPorvider,Contextthis};

