import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { getWindowWidth } from '../../util/getWindowDimensions'

const AboutPageImg = () => {
  const [width, setWidth] = useState(getWindowWidth())
  useEffect(() => {
    function handleResize() {
      setWidth(getWindowWidth())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })
  console.log(width)
  return (
    <>
      {width >= 768 ? (
        <img
          src='/about-page-img-md.png'
          alt='About Page'
          // objectFit={'contain'}
          // width={310}
          // height={310}
        />
      ) : (
        <img
          src='/about-page-img.png'
          alt='About Page'
          // objectFit={'contain'}
          // width={210}
          // height={210}
        />
      )}
    </>
  )
}

export default AboutPageImg
