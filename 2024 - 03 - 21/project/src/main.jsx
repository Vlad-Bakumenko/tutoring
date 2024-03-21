import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//Step 1.5
import RandomContextProvider from './contexts/RandomContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Step 1.6 */}
    <RandomContextProvider>
    <App />
    </RandomContextProvider>
  </React.StrictMode>,
)
