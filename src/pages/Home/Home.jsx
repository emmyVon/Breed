import React from 'react'
import './home.css';
import image4 from '../../Assets/IMAGES/fig 1.jpg'
import Appointment from '../../components/Appointment';
import TopDog from '../../components/TopDog';
import SearchBreed from '../../components/SearchBreed';
import About from '../About/About'
import Faqs from '../../components/Faqs';
import Footer from '../../components/Footer';

const Home = () => {

  return (
    <section className="home">
      <div className='container home_container'>
        
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
      <About/>
      <TopDog/>
      <Faqs/>
      <Footer/>
    </section>
   
  )
}

export default Home