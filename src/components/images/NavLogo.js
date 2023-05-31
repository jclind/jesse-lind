import React, { useEffect, useRef, useContext } from 'react'
import Lottie from 'lottie-web'
import animation from '../../assets/animations/jl-nav-logo-animation.json'
import { LoadingContext } from '../../contexts/LoadingContext'

const NavLogo = () => {
  const animationContainer = useRef()
  const context = useContext(LoadingContext)

  useEffect(() => {
    context.setNavLoading(false)
  }, [context])
  useEffect(() => {
    if (!context.loading) {
      setTimeout(() => {
        Lottie.loadAnimation({
          container: animationContainer.current,
          animationData: animation,
          loop: false,
        })
      }, 600)
    }
  }, [context.loading])

  return (
    <div className='nav-logo-anim' ref={animationContainer} tabIndex={0}></div>
  )
}

export default NavLogo
