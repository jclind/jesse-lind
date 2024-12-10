import React, { useEffect, useRef, useContext } from 'react'
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
      const loadLottieAnimation = async () => {
        const lottie = await import('lottie-web')
        lottie.default.loadAnimation({
          container: animationContainer.current,
          animationData: animation,
          loop: false,
        })
      }

      setTimeout(() => {
        loadLottieAnimation()
      }, 600)
    }
  }, [context.loading])

  return (
    <div className='nav-logo-anim' ref={animationContainer} tabIndex={0}></div>
  )
}

export default NavLogo
