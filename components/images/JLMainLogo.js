import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'
import animation from '../../assets/animations/jl-logo-animation.json'

const JLMainLogo = () => {
  useEffect(() => {
    setTimeout(() => {
      Lottie.loadAnimation({
        container: animationContainer.current,
        animationData: animation,
        loop: false,
      })
    }, 800)
  }, [])
  const animationContainer = useRef()

  return <div className='jl-logo-anim' ref={animationContainer}></div>
}

export default JLMainLogo
