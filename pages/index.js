import React from 'react'
import JLMainLogo from '../components/images/JLMainLogo'
import BackgroundIcons from '../components/images/BackgroundIcons'

const index = () => {
  return (
    <div className='page home-page'>
      <div className='container'>
        <div className='content'>
          <h1>Hi, I&apos;m Jesse</h1>
          <p>
            I create <span className='highlight'>clean</span> and{' '}
            <span className='highlight'>functional</span> websites you can count
            on.
          </p>
          <button className='action-btn'>Let&apos;s Talk!</button>
        </div>
        <div className='logo'>
          <JLMainLogo />
        </div>
        <div className='background-icons'>
          <BackgroundIcons className='icons' />
        </div>
      </div>
    </div>
  )
}

export default index
