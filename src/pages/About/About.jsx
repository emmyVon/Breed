import React from 'react'
import Slider from '../../components/Slider'
import Image1 from '../../Assets/IMAGES/dog-image-1.jpg';
import Image2 from '../../Assets/IMAGES/dog-image-3.jpg';
import './about.css';

const About = () => {
  return (
    <section className=" About_us">
      <h1>ABOUT US</h1>
      <div className='container Aboutus_container '>
          <div className="left_heading">
            <h1>Welcome to Buddy Salon</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda voluptatibus, neque quas culpa natus numquam nesciunt repudiandae ipsa, sapiente facilis tenetur ipsam sequi iure et quae praesentium magnam. Saepe?</p>
            <button>Read more</button>
          </div>
          <div className="right_img">
            <img src={Image1} alt="logo" />
            <img src={Image2} alt="logo1" />
          </div>     
      </div>
      <Slider />
    </section>

    
  )
}

export default About