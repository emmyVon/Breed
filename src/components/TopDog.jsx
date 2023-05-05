import React from 'react'
import fast from '../Assets/IMAGES/fast.jpg'
import big from '../Assets/IMAGES/heavyweight.jpg'
import fashion from '../Assets/IMAGES/style.jpg'
import smart from '../Assets/IMAGES/ft.jpg'

const TopDog = () => {
  return (
    <div className=' container '>
        <h1>TOP DOGS</h1>
        <div className='Top-dog-container'>
        <article className='Top-dog'>
            <img src={fast} alt="" />
            <div className='Top-dog-text'>
            <div>
            <h2>name</h2>
            <h3>breed</h3>
            </div>
            <b>Holding record for fastest dog</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iure officiis nobis dolorem reiciendis, in laboriosam quaerat deleniti beatae soluta harum, consequatur, vitae adipisci facere rerum libero assumenda laborum ipsa!</p>
            </div>
        </article>
        <article className='Top-dog'>
            <img src={big} alt="" />
            <div className='Top-dog-text'>
            <div>
            <h2>name</h2>
            <h3>breed</h3>
            </div>
            <b>Holding record for heavyweight</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iure officiis nobis dolorem reiciendis, in laboriosam quaerat deleniti beatae soluta harum, consequatur, vitae adipisci facere rerum libero assumenda laborum ipsa!</p>
            </div>
        </article>
        <article className='Top-dog'>
            <img src={fashion} alt="" />
            <div className='Top-dog-text'>
            <div>
            <h2>name</h2>
            <h3>breed</h3>
            </div>
            <b>Holding record for the most stylish</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iure officiis nobis dolorem reiciendis, in laboriosam quaerat deleniti beatae soluta harum, consequatur, vitae adipisci facere rerum libero assumenda laborum ipsa!</p>
            </div>
        </article>
        </div>
        
    </div>
  )
}

export default TopDog