import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Import BrowserRouter
import PrivacyPolicy from './PrivacyPolicy'
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap it in BrowserRouter with your repository basename */}
    <BrowserRouter basename="/">
      <PrivacyPolicy />
    </BrowserRouter>
  </React.StrictMode>,
)