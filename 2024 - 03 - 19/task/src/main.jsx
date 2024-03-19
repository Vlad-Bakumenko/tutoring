import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.scss'
import UsersContextProvider from './contexts/UsersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </UsersContextProvider>
  </React.StrictMode>,
)

// In general, it's a good practice to keep the context as close to the components that need it as possible. So, if the context is only needed by the components rendered by the BrowserRouter, it's better to nest the UsersContextProvider inside the BrowserRouter component. However, if the context is needed by all the components in your application, it's better to wrap the BrowserRouter component with the UsersContextProvider.