import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// FIX: Automatically use the BASE_URL provided by Vite/Vite build process.
// For local dev, BASE_URL is '/'. For deployment, BASE_URL is '/agile-guide/'.
const base = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap the entire application in BrowserRouter */}
    <BrowserRouter basename={base}>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
