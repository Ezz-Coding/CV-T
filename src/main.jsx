import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextPorvider } from './Component/Login.jsx'
  
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ContextPorvider className='App'>
    <App />
    </ContextPorvider>

  </StrictMode>
)
  