import React from 'react'
import Forminput from '../../components/RegisterForm'
import './login.css'
import { Outlet } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-form'>
      <h1>Welcome to Breedex, the House of Hounds</h1>
        <Outlet />
    </div>
  )
}

export default Login