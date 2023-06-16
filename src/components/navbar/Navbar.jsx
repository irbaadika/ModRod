import React, {useState} from 'react'
import {FaBars, FaTimes, FaMotorcycle} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import './NavbarStyles.css'
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Navbar = ({user}) => {
  const[nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)
  const navigate = useNavigate();
  const handleLogout = (e) => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        navigate("/");
      })
      .catch((error) => {
        
      });
  };

  return (
    <div name='top' className='navbar'>
      <div className="container">
        <div className="logo">
            <FaMotorcycle className='icon' /> 
            <h1>ModRod</h1>
        </div>

        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/product'>Products</Link></li>
            <li><Link to='/part'>Parts</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            {!user&&<>
              <button><Link to='/login'>Sign In</Link></button>
            </>}
            {user&&<>
              <li><Link to='/'>{user}</Link></li>
              <button onClick={handleLogout}>Logout</button>
            </>}
            
        </ul>

        <div className='hamburger' onClick={handleNav}>
            {!nav ? (<FaBars className='icon'/>) : (<FaTimes className='icon'/>)}
        </div>
      </div>
    </div>
  )
}

export default Navbar
