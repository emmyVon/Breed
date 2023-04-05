import React from 'react'
import './home.css';
import image4 from '../../Assets/IMAGES/fig 1.jpg'
import Appointment from '../../components/Appointment';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
const[search,setSearch] = useSearchParams()
  return (
    <section className="home">
      <div className='container home_container'>
        <form >
          <input type="text" name='search' placeholder='search here' value={search} onChange={(e)=>setSearch(e.target.value, {replace:true})}/>
        </form>
        <div className="intro_left">
          <div className="body-text">
            <h1>Buddy salon</h1>
            <p>we work hard to meet your needs</p>
          </div>
        </div> 
        {/* <div className="intro_right">
            <img src={image4} alt="" />
            <div className="cirle"></div>
        </div> */}
      </div>
      {/* <Appointment /> */}
          

    </section>
   
  )
}

export default Home