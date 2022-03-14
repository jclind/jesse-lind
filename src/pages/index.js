import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import BackgroundIcons from '../components/BackgroundIcons'
import JLMainLogo from '../components/images/JLMainLogo'
import Footer from '../components/Footer'

const Index = ({ jlMainLogo }) => {
  // useEffect(() => {
  //   let stylesArray = [
  //     'background-image: url(https://ux.christmas//static/teaser-1-95bcc16151dc1d561bd79ede903e9e7c.jpg)',
  //     'background-size: cover',
  //     'color: #fff',
  //     'padding: 10px 20px',
  //     'line-height: 35px',
  //     'width : 70px',
  //     'height : 70px',
  //     'border : 5px solid black',
  //   ].join(';')
  //   console.log('%c 生命 > 死, 力 > 弱, 旅 > 先', stylesArray)
  // }, [])

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Home | Jesse Lind</title>
      </Head>
      <div className='page home-page'>
        <div className='container'>
          <div className='content'>
            <h1 className='fadeinup ad-0-6'>Hi, I&apos;m Jesse</h1>
            <p className='fadeinup ad-0-8'>
              I create <span className='highlight'>clean</span> and{' '}
              <span className='highlight'>functional</span> websites you can
              count on.
            </p>
            <Link href='/projects' passHref={true}>
              <button className='action-btn fadeinup ad-1-2'>
                My Projects
              </button>
            </Link>
          </div>
          <div className='logo'>
            <JLMainLogo />
          </div>
        </div>
        <BackgroundIcons />
        <div className='footer-container fadeinup ad-1-6'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Index
