
import {slides} from '../Assets/data'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import { useState } from 'react'


const Slider = () => {
const [current, setCurrent] = useState(0)
const length = slides.length
const nextSlide = () =>{
  setCurrent(current === length -1 ? 0 : current + 1)

}


const prevSlide = () => (
  setCurrent(current === 0 ? length - 1 : current -1 )
)

console.log(current)

  return (
    <div className='cauSlider'>
      <BsFillArrowRightCircleFill className='arroright' onClick={nextSlide}/>
      <BsFillArrowLeftCircleFill className='arroleft' onClick={prevSlide}/>
      {
            slides.map((slide,index) => {
                return (  
                  <div key = {index}>
                      {
                    index === current && <img className='sliderImage' src= {slide.image} alt="slide_i" />
                  }     
                   
                  </div>  
                   
                )
            })
        }
      
    </div>
  )
}

export default Slider
