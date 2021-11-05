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
        >
          <Hamburger className='hamburger' toggled={show} toggle={setShow} />
        </div>
      </div>
      <div className={show ? 'nav-links show' : 'nav-links'}>
        <div className='nav-link' onClick={handleClick}>
          <Link href='/about' exact={true}>
            About
          </Link>
        </div>
        <div className='nav-link' onClick={handleClick}>
          <Link href='/projects' exact={true}>
            Projects
          </Link>
        </div>
        <div className='nav-link' onClick={handleClick}>
          <Link href='/contact' exact={true}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
