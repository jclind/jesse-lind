import React from 'react'

const about = () => {
  return (
    <div className='page about-page'>
      <div className='about section'>
        <img
          src='/about-page-img.png'
          alt='Person sitting on computer desk'
          className='about-img'
        />
        <h1 className='title'>About Me</h1>
        <p className='text'>
          Hello! I’m Jesse, a 19 year old from Pittsburgh Pennsylvania. In 2016,
          my brother callenged me to solve a couple html problems on
          FreeCodeCamp.org and the rest is history, I had found a grand new
          passion.
        </p>
        <p className='text'>
          Since that day I have been studying and learning all I can about
          everything from how computers work to what makes an incredible user
          experience on a website.
        </p>
        <button className='action-btn'>View My Skills</button>
      </div>
      <div className='skills section'>
        <h1 className='title'>Skills And Technologies</h1>
        <p className='text'>
          I love creating beautiful websites with simple but functional UI for
          the best user experience possible. These are some of the languages and
          skills that help me to create with code:
        </p>
        <div className='skills-container'>
          <div className='skill-box'>
            <div className='icon-container'>
              <img src='/about-languages-icon.svg' alt='language icon' />
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
              <img src='/about-languages-icon.svg' alt='language icon' />
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
              <img src='/about-languages-icon.svg' alt='language icon' />
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
  )
}

export default about
