import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import JLMainLogo from '../components/images/JLMainLogo'
// import BackgroundIcons from '../components/images/BackgroundIcons'
import BackgroundIcons from '../components/BackgroundIcons'

const index = () => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='page home-page'>
        <div className='container'>
          <div className='content'>
            {/* <motion.div
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={{
                hidden: {
                  transform: 'translate3d(0, 40px, 0)',
                  opacity: 0,
                  transition: 'all 0.5s ease',
                },
                visible: {
                  transform: 'translate3d(0, 0, 0)',
                  opacity: 1,
                },
              }}
            > */}
            <h1 className='fadeinup'>Hi, I&apos;m Jesse</h1>
            {/* </motion.div> */}
            <p className='fadeinup'>
              I create <span className='highlight'>clean</span> and{' '}
              <span className='highlight'>functional</span> websites you can
              count on.
            </p>
            <button className='action-btn fadeinup'>Let&apos;s Talk!</button>
          </div>
          <div className='logo'>
            <JLMainLogo />
          </div>
          <BackgroundIcons />
        </div>
      </div>
    </>
  )
}

export default index
