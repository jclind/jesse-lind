import React, { useState } from 'react'
import Link from 'next/link'
import NavLogo from './images/NavLogo'
import Hamburger from 'hamburger-react'

const Navbar = () => {
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }
  const handleClick = () => {}

  return (
    <nav>
      <div className='nav-header'>
        <div className='logo-container'>
          <Link href='/' exact={true} onClick={handleClick}>
            <NavLogo />
          </Link>
        </div>
        <div
          className={show ? 'hamburger-container show' : ' hamburger-container'}
          onClick={toggleShow}
        >
          <Hamburger className='hamburger' />
        </div>
      </div>
      <div className={show ? 'nav-links show' : 'nav-links'}>
        <div className='nav-link'>
          <Link href='/about' exact={true} onClick={handleClick}>
            About
          </Link>
        </div>
        <div className='nav-link'>
          <Link href='/projects' exact={true} onClick={handleClick}>
            Projects
          </Link>
        </div>
        <div className='nav-link'>
          <Link href='/contact' exact={true} onClick={handleClick}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
