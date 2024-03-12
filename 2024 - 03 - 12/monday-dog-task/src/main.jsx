import React from 'react'
import ReactDOM from 'react-dom/client'
// Something is missing
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.StrictMode>,
)
