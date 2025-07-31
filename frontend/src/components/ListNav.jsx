import { Link } from 'react-router-dom';
import './styles/ListNav.css'



import React from 'react'

const ListNav = () => {

  console.log("ListNav rendered");
  return (
    <div className="logo-listing">
  <Link to="/" className='re'>
    EZEEPZEE
  </Link>
   </div>
    
  )
}

export default ListNav


