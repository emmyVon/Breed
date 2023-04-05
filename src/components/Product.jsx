import React from 'react'
import { BsPlusLg } from 'react-icons/bs'
import {AiOutlineMinusCircle} from 'react-icons/ai'
import { useState } from 'react'


const Product = (props) => {
   const[intialCount, setInitialCount] = useState(0);
    const stock = 50;
    const addFunc = () => {
        setInitialCount(intialCount <= stock -1? intialCount + 1 : 50)

    }
    const subFunc = () => {
        setInitialCount(intialCount > 0? intialCount- 1 : 0)
    }
  return (
    <article>
            <div className="dog_wrapper">
                <img src= {props.image} alt="" className='dog_image' />
                <div className="product_info">
                    <h2>{props.breed}</h2> 
                    <p>{props.sex}</p>
                    <h2>{props.age}</h2>
                    <p>{props.color}</p>
                </div>
            </div>
        
           
    </article>
  )
}

export default Product