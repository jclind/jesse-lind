import React, { useState, useEffect } from 'react'
import { getWindowWidth } from '../../util/getWindowDimensions'

const JLMainLogo = () => {
  // console.log(window.innerWidth)
  const [width, setWidth] = useState(getWindowWidth())

  useEffect(() => {
    function handleResize() {
      setWidth(getWindowWidth())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <>
      {width >= 768 ? (
        <svg
          width='186'
          height='294'
          viewBox='0 0 186 294'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M47.4049 235.425C37.7986 235.425 28.9128 233.343 20.7475 229.181C12.5822 225.018 5.93785 219.094 0.814506 211.409L11.3814 199.401C20.6674 213.17 32.7553 220.055 47.645 220.055C68.4586 220.055 78.8654 207.727 78.8654 183.071V81.2443H17.3853V65.8743H96.3968V182.35C96.3968 199.962 92.2341 213.25 83.9087 222.216C75.7434 231.022 63.5754 235.425 47.4049 235.425Z'
            fill='#FF7C7C'
          />
          <path
            d='M79.6982 68.8228H96.1799V210.476H183.488V224.731H79.6982V68.8228Z'
            fill='#FF7C7C'
          />
        </svg>
      ) : (
        <svg
          width='178'
          height='280'
          viewBox='0 0 178 280'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g opacity='0.4'>
            <path
              d='M45.3527 223.376C36.1775 223.376 27.6905 221.388 19.8916 217.412C12.0927 213.436 5.7465 207.778 0.853072 200.438L10.9458 188.969C19.8151 202.12 31.3606 208.696 45.5821 208.696C65.4616 208.696 75.4014 196.921 75.4014 173.372V76.1146H16.6803V61.4343H92.1461V172.683C92.1461 189.505 88.1702 202.197 80.2184 210.76C72.4195 219.171 60.7976 223.376 45.3527 223.376Z'
              fill='#FF7C7C'
            />
            <path
              d='M76.1969 64.4876H91.939V199.785H175.33V213.399H76.1969V64.4876Z'
              fill='#FF7C7C'
            />
          </g>
        </svg>
      )}
    </>
  )
}

export default JLMainLogo
