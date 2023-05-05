import React, { useEffect, useState } from 'react'
import Forminput from '../../components/RegisterForm'
import { persona } from '../../Assets/data'
import axios from 'axios'
import {options,fetchData} from '../../utils/Fetch'


import './Services.css'
import Sales from '../../components/Sales'
import FilterItem from '../../components/FilterItem'
import { Link, Outlet } from 'react-router-dom'
import SearchBreed from '../../components/SearchBreed'

const Services = () => {
  const [breeds,setBreeds] = useState([])

  
useEffect(()=>{
  const fetch = async () =>{
    const breed = await fetchData('https://dog-breeds2.p.rapidapi.com/dog_breeds',options);
    const part = breed.slice(0,10)
    setBreeds(part)
    console.log(part)
    
  } 
  fetch()
// axios.get('https://dog-breeds2.p.rapidapi.com/dog_breeds').then(response=> {
// 	console.log(response.data);
// }).catch(error=>{
// 	console.error(error);
// })
}, [])

  return (
    <section className='Services'>
      <div className="container services-container">
        <div className="Services-button">
          <Link to='/Services/sales'><button>SELL</button></Link>
          <Link to='/Services'><button>BUY</button></Link>
          <Link><button>CROSS-BREED</button></Link>
          <Link to='/Services/caretake'><button>Care-Take</button></Link>
        </div>
        <SearchBreed/>
        <div>
          <Outlet/>
        </div>



      </div>


    </section>
  )
}

export default Services