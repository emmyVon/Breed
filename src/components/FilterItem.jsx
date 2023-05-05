import React from 'react'
import { useState } from 'react';
import Product from './Product';
import {Hound} from '../Assets/data'



const FilterItem = () => {
    const[menuItems,setMenuItems]= useState(Hound)

    const Categories = ['All', ...new Set(Hound.map(uniq=>uniq.breed))]

    const FilterMenu = (FilterBtn)=>{
        if(FilterBtn === 'All'){
            setMenuItems(Hound);
            return;
        }
        const filtered = Hound.filter(item => item.breed === FilterBtn)
        setMenuItems(filtered)
    }

  return (
    <section className="container product">
            {/* <div className="button_container">
                {
                Categories.map((btn,index)=> {
                    return <button key ={index} type='button' className ='btn'onClick={()=>FilterMenu(btn)}>{btn}</button>
                })
                }
            </div> */}
            <div className=' dog_container'>
            {
                menuItems.map((dog)=>{ 
                return(
                    <Product image = {dog.image} sex = {dog.sex} breed = {dog.breed}/>
                )
                
                })
            }
            </div>

    </section>
  )
}

export default FilterItem