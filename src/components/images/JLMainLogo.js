import React, { useEffect, useRef, useContext } from 'react'
import Lottie from 'lottie-web'
import animation from '../../assets/animations/jl-logo-animation.json'
import { LoadingContext } from '../../contexts/LoadingContext'

const JLMainLogo = () => {
  const context = useContext(LoadingContext)

  const animationContainer = useRef()
  useEffect(() => {
    if (animationContainer && animationContainer.current) {
      context.setLogoLoading(false)
    }
  }, [context])
  useEffect(() => {
    if (!context.loading) {
      setTimeout(() => {
        Lottie.loadAnimation({
          container: animationContainer.current,
          animationData: animation,
          loop: false,
        })
      }, 800)
    }
  }, [context.loading])

  return <div className='jl-logo-anim' ref={animationContainer}></div>
}

export default JLMainLogo
