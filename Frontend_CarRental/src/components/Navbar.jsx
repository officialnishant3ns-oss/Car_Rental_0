import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {
  return (
  <div className="bg-white border-b-2 border-amber-300 px-8 py-4 flex items-center justify-between shadow-sm">

  
  <div className="flex items-center">
    <img src={assets.logo} alt="logo" className="h-10 w-auto" />
  </div>

  <ul className="flex items-center gap-8 text-xl font-semibold text-gray-700">
    <li>
      <NavLink className="hover:text-amber-500 transition">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink className="hover:text-amber-500 transition">
        Car
      </NavLink>
    </li>
    <li>
      <NavLink className="hover:text-amber-500 transition">
        About
      </NavLink>
    </li>
  </ul>

  
  <div className="flex items-center w-80 px-4 py-2 border-3 border-gray-500 rounded-full focus-within:ring-2 focus-within:ring-amber-400 transition">

    <input
      type="text"
      placeholder="Search cars..."
      className="flex-1 outline-none text-gray-800 placeholder-gray-700"
    />

    <img 
      src={assets.search_icon} 
      alt="search" 
      className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100"
    />

  </div>
  <div>
    <div>
      List car
    </div>
    <button>s</button>
  </div>

</div>

  )
}

export default Navbar
