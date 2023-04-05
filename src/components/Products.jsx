import React from 'react'
import Product from './Product'
import {Hound} from '../Assets/data'
const Products = () => {
  const Categories = Hound.map((category)=>
  category.breed
  
  )

  const filterItems = (Categories)=>{
     Hound.filter((catitem)=>catitem.breed ===Categories)
  }
  return (
    <section className="container product">
      <div className="button_container">
        {
          Categories.map((btn)=> {
            return <button className ='btn' onClick={()=> filterItems(btn)}>{btn}</button>
          })
        }
      </div>
       <div className=' dog_container'>
          {
            Hound.map((dog)=>{ 
              return(
                <Product image = {dog.image} sex = {dog.sex} breed = {dog.breed}/>
              )
              
            })
          }
      </div>


    </section>
   
  )
}

export default Products
