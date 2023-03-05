import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HomeScreen } from './screens/home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HomeScreen />
  </React.StrictMode>,
)
