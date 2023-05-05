import React from 'react'
import {useFormik} from "formik"
import * as yup from "yup"
import { Link } from 'react-router-dom'

const LoginForm = () => {
     const formik = useFormik({
        initialValues: {
            password: '',
            username: ''
        },
        validationSchema : yup.object().shape ({
            username: yup.string.required,
            password: yup.string().min(6,'must be 6 charaters or more').max(12,'characters too much').required
        }),
        onSubmit: (values) => {
            console.log("Submitted")
        }
    })
  return (
    <form onSubmit={formik.handleSubmit}>
        <div className='input-container'>
        <div className="input-control">
            <label htmlFor="" >Username</label>
            <input 
            type="text" 
            name ="username" 
            placeholder='Enter your username' 
            value = {formik.values.name} 
            onChange = {formik.handleChange}
            onBlur = {formik.handleBlur} 
            />
        </div>
        <div className="input-control">
            <label htmlFor="" >Password</label>
            <input 
            type="text" 
            name ="Password" 
            placeholder='Enter your safety password' 
            value = {formik.values.name} 
            onChange = {formik.handleChange}
            onBlur = {formik.handleBlur} 
            />
        </div>
        <button>Sign in</button>
        </div>
        <div>
            <p>Don't have an account?</p>
            <Link to='/login/register' className='btn'>Register</Link>
        </div>

    </form>
  )
}

export default LoginForm