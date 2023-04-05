import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { Links } from '../Assets/data'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import './Navbar.css'
import { useState } from 'react'

const NavBar = () => {
   const[isNavShowing,setisNavShowing] = useState(false)
  return (
    <nav >
        <div className="container nav-container">
            <Link to='/' className='logo'>
              BREEDEX
            </Link>
            <ul className= {'nav_links ${isNavShowing ? `show_nav`: `hide_nav`}'}>
              {
                Links.map((item, index) => {
                  const{Name,Path,icon,drop} = item
                  return (
                    <li key={index} className='Navlinks'>
                        <NavLink to = {Path} className = {({isActive}) => isActive ? 'active-nav' : ''}>{Name}{icon}</NavLink>
                    </li>
  
                  )
                })
              } 
              <li>
                <div className='flex quick_nav'>
                  <Link to = '/login' className='btn'>Login</Link>
                </div>
              </li>
            </ul>
           
            <button className='nav_menu_toggle' onClick={()=> setisNavShowing(prev=>!prev)}>
              {
                isNavShowing ? <AiOutlineClose /> : <AiOutlineMenu  />
              }
              
            </button>
        </div>
    </nav>
  )
}



export default NavBar







