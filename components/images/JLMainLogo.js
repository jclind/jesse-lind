import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'
import animation from '../../animations/jl-logo-animation.json'

const JLMainLogo = () => {
  useEffect(() => {
    setTimeout(() => {
      Lottie.loadAnimation({
        container: animationContainer.current,
        animationData: animation,
        loop: false,
      })
    }, 1000)
  }, [])
  const animationContainer = useRef()

  return <div className='anim' ref={animationContainer}></div>
}

export default JLMainLogo
