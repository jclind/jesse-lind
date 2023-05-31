import React, { useRef, useEffect, useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { skillsData } from '../assets/data/skillsData'

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
              Hello! My name is Jesse and I am a {getAge('2002-03-28')} year old
              from Pittsburgh, Pennsylvania. My journey in the world of web
              development began in 2016 when my brother challenged me to solve a
              couple of HTML problems on FreeCodeCamp.org. Little did I know,
              that challenge would ignite a grand new passion within me.
            </p>
            <p className='text fadeinup ad-0-8'>
              Since then I dedicated myself to mastering all aspects of web
              development, from the inner workings of computers to exceptional
              user experience design. My constant drive to improve and stay
              updated with the latest technology led me to pursue a career in
              this field.
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
          <h2 className='title'>Skills And Technologies</h2>
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
              <h3 className='skill-title'>Languages / Software</h3>
              <div className='skill-items'>
                {skillsData
                  .find(data => data.type === 'language')
                  .skills.map(skill => {
                    return (
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={skill.link}
                        className='skill-item'
                        key={skill.title}
                      >
                        {skill.title}
                      </a>
                    )
                  })}
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
              <h3 className='skill-title'>Frameworks / Libraries</h3>
              <div className='skill-items'>
                {skillsData
                  .find(data => data.type === 'framework')
                  .skills.map(skill => {
                    return (
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={skill.link}
                        className='skill-item'
                        key={skill.title}
                      >
                        {skill.title}
                      </a>
                    )
                  })}
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
              <h3 className='skill-title'>CMS / Databases</h3>
              <div className='skill-items'>
                {skillsData
                  .find(data => data.type === 'database')
                  .skills.map(skill => {
                    return (
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={skill.link}
                        className='skill-item'
                        key={skill.title}
                      >
                        {skill.title}
                      </a>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
