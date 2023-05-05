import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import './App.css'
import CheckOut from './pages/checkout/CheckOut'
import Footer from './pages/footer/Footer'
import SharedLayout from './components/SharedLayout'
import Login from './pages/Login/Login'
import Sales from './components/Sales'
import Purchase from './components/Purchase'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import VetCare from './components/VetCare'
import Forminput from './components/Forminput'
import Dashboard from './pages/dashboard/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Home />}/>
        <Route path='services' element={<Services />}>
        <Route path='sales' element={<Sales/>}/>
        <Route index element={<Purchase/>}/>
        <Route path='caretake' element={<VetCare/>}/>
        </Route>
        <Route path='about' element={<About />}/>
        <Route path='login' element={<Login />}>
          <Route index element={<LoginForm/>}/>
          <Route path='register' element={<Forminput/>}/>
        </Route>
        </Route>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App