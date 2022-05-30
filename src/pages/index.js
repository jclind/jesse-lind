import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import BackgroundIcons from '../components/BackgroundIcons'
import JLMainLogo from '../components/images/JLMainLogo'
import Footer from '../components/Footer'

const Index = () => {
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
