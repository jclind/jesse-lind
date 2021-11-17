import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'
import animation from '../../assets/animations/jl-logo-animation.json'

const JLMainLogo = () => {
  const animationContainer = useRef()
  useEffect(() => {
    if (animationContainer && animationContainer.current) {
      setTimeout(() => {
        Lottie.loadAnimation({
          container: animationContainer.current,
          animationData: animation,
          loop: false,
        })
      }, 800)
      animationContainer.current.addEventListener('click', () => {
        console.log('loaded!')
      })
    }
  }, [])

  return <div className='jl-logo-anim' ref={animationContainer}></div>
}

export default JLMainLogo
