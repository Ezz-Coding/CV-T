import React, { useContext } from 'react'
import './backScreen.css'
import { Contextthis } from './Login'
const BlackScreen = () => {
const {Back} = useContext(Contextthis)
const {sure} = useContext(Contextthis)

  return (
    <>
    {
        Back? 
        <div className='backblack'>
    
        </div>:null

    }
    {
        sure? 
        <div className='backblack'>
    
        </div>:null

    }
 </>
  )
}

export default BlackScreen
