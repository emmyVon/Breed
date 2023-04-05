import React from 'react'
import { faqa } from '../Assets/data'

import Faq from './faq'



const Faqs = () => {
  
  return (
    <div className='container faq_container'>
      <div className="faq_wrapper">
        {
          faqa.map((obj) => {
            const{id,question,answer} = obj
            return(
             <Faq key = {id} question = {question} answer= {answer}/>
            )
          })
        }
      </div>
    </div>
  )
}


export default Faqs