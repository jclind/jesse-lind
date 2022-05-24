import React, { useRef, useEffect, useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'

const About = () => {
  const skillsRef = useRef()

  const scrollIntoView = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  // From https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
  const getAge = date => {
    const today = new Date()
    const birthDate = new Date(date)
    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()

    // If this month is less than the birthMonth,
    // Or if this month is equal to the birthMonth and the day is less than the birth day,
    // Decrease age by one
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>About | Jesse Lind</title>
      </Head>
      <div className='page about-page'>
        <div className='about section'>
          <div className='about-img-container fadeinup ad-0-4'>
            <Image
              src='/about-page/about-img.png'
              alt='About Page'
              width={400}
              height={400}
              objectFit='contain'
            />
          </div>
          <div className='about-content'>
            <h1 className='title fadeinup ad-0-6'>About Me</h1>
            <p className='text fadeinup ad-0-7'>
              Hello! I’m Jesse, a {getAge('2002-03-28')} year old from Pittsburgh Pennsylvania. In
              2016, my brother callenged me to solve a couple html problems on
              FreeCodeCamp.org and the rest is history, I had found a grand new
              passion.
            </p>
            <p className='text fadeinup ad-0-8'>
              Since that day I have been studying and learning all I can about
              everything from how computers work to what makes an incredible
              user experience on a website.
            </p>
            <button
              className='action-btn fadeinup ad-1-0'
              onClick={scrollIntoView}
            >
              View My Skills
            </button>
          </div>
        </div>
        <div className='skills section fadeinup ad-1-4' ref={skillsRef}>
          <h1 className='title'>Skills And Technologies</h1>
          <p className='text '>
            I love creating beautiful websites with simple but functional UI for
            the best user experience possible. These are some of the languages
            and skills that help me to create with code:
          </p>
          <div className='skills-container '>
            <div className='skill-box'>
              <div className='icon-container'>
                <Image
                  src='/about-page/languages.svg'
                  alt='language icon'
                  width={35}
                  height={35}
                  objectFit='contain'
                />
              </div>
              <h2 className='skill-title'>Languages / Software</h2>
              <div className='skill-items'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.javascript.com/'
                  className='skill-item'
                >
                  Javascript
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.w3schools.com/html/'
                  className='skill-item'
                >
                  HTML
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.w3schools.com/css/'
                  className='skill-item'
                >
                  CSS
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.figma.com/'
                  className='skill-item'
                >
                  Figma
                </a>
              </div>
            </div>
            <div className='skill-box'>
              <div className='icon-container'>
                <Image
                  src='/about-page/frameworks.svg'
                  alt='language icon'
                  width={35}
                  height={35}
                  objectFit='contain'
                />
              </div>
              <h2 className='skill-title'>Frameworks / Libraries</h2>
              <div className='skill-items'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://reactjs.org/'
                  className='skill-item'
                >
                  React.js
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://nextjs.org/'
                  className='skill-item'
                >
                  Next.js
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.gatsbyjs.com/'
                  className='skill-item'
                >
                  Gatsby.js
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://sass-lang.com/'
                  className='skill-item'
                >
                  Scss
                </a>
              </div>
            </div>
            <div className='skill-box'>
              <div className='icon-container'>
                <Image
                  src='/about-page/database.svg'
                  alt='language icon'
                  width={35}
                  height={35}
                  objectFit='contain'
                />
              </div>
              <h2 className='skill-title'>CMS / Databases</h2>
              <div className='skill-items'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.contentful.com/'
                  className='skill-item'
                >
                  Contentful
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://firebase.google.com/'
                  className='skill-item'
                >
                  Firebase
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://graphql.org/'
                  className='skill-item'
                >
                  GraphQL
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
