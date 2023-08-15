import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './templates/Home'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './templates/Login'
import NotFound from './templates/NotFound'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/home' Component={Home}/>
        <Route path='*' Component={NotFound}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)