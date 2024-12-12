import React, { useEffect, useRef, useContext } from 'react'
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
    if (!context.loading && animationContainer.current) {
      const loadLottieAnimation = async () => {
        const lottie = await import('lottie-web')
        lottie.default.loadAnimation({
          container: animationContainer.current,
          animationData: animation,
          renderer: 'svg',
          loop: false,
          autoplay: true,
        })
      }

      setTimeout(() => {
        loadLottieAnimation()
      }, 800)
    }
  }, [context.loading])

  return <div className='jl-logo-anim' ref={animationContainer}></div>
}

export default JLMainLogo
