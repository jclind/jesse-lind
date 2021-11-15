import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'
import animation from '../../assets/animations/jl-nav-logo-animation.json'

const NavLogo = () => {
  const animationContainer = useRef()

  useEffect(() => {
    setTimeout(() => {
      Lottie.loadAnimation({
        container: animationContainer.current,
        animationData: animation,
        loop: false,
      })
    }, 600)
  }, [])

  return <div className='nav-logo-anim' ref={animationContainer}></div>
}

export default NavLogo
