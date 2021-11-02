import React, { useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import NavLogo from './images/NavLogo'
import Hamburger from 'hamburger-react'

const Navbar = () => {
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }
  const handleClick = () => {
    setShow(false)
  }

  return (
    <nav>
      <div className='nav-header'>
        <div
          className='logo-container'
          onClick={() => {
            Router.push('/')
            handleClick()
          }}
        >
          <NavLogo />
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
