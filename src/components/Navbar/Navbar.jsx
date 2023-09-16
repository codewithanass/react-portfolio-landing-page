import './Navbar.css'
import Logo from '../../assets/Logo.svg'
import { useState } from 'react'
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false)

  const handleToggleNav = () => {
    setToggleNav(prev => !prev);
  }


  return (
    <div className='container'>
      <nav className='navbar flex'>
        <div className="logo">
            <img src={Logo} alt="site-logo" />
        </div>
        <div className={toggleNav ? "menu active" : "menu flex"}>
            <ul className='flex'>
                <FaXmark className='close-icon' size={30} onClick={handleToggleNav} />
                <li><a href="#">Home</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button className="btn">Contact</button>
        </div>
        <FaBarsStaggered className='open-icon' size={30} onClick={handleToggleNav} />
      </nav>
    </div>
  )
}

export default Navbar
