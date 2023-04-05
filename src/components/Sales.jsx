import { Form } from 'formik'
import React from 'react'

const Sales = () => {
  return (
     <div className='Sales-container'>
        <h1>WElcome , Let's help your sell your dog</h1>
        <div className="PetInfo-display">
            <div className='pet-pic'/>
            <div className='pet-pic'/>
            <div className='pet-pic'/>
        </div>
        <form>
            <div>
                <label htmlFor="Pet-image">Dog pic</label>
                <input type="file" name='Pet-image' />  
            </div>
            <div>
                <label htmlFor="Pet-age">Age</label>
                <input type="text" name='Pet-age' placeholder='Enter pet Age' />  
            </div>
            <div>
                <label htmlFor="Pet-weight">Dog pic</label>
                <input type="text" name='Pet-weight' />  
            </div>
            <div>
                <label htmlFor="Pet-description">Dog atrributes</label>
                <textarea type="text" name='Pet-description' />  
            </div>
        </form>
    </div>
  )
}

export default Sales