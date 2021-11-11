import React, { useRef } from 'react'
import Head from 'next/head'

const contact = () => {
  const discordTag = 'Thinrin#4693'
  const discordTooltip = useRef()

  function copyText(e) {
    navigator.clipboard.writeText(discordTag)
    discordTooltip.current.innerText = 'Copied'
    setTimeout(() => {
      discordTooltip.current.innerText = 'Copy'
    }, 3000)
  }

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='page contact-page'>
        <div className='info'>
          <div className='info-inner'>
            <div className='img-container'>
              <img
                src='/contact-page-img.png'
                alt='contact page'
                className='fadeinup'
              />
            </div>
            <div className='content'>
              <h1 className='fadeinup'>Contact Me</h1>
              <p className='text fadeinup'>
                Interested in hiring me? Have a question? or just want to say
                hi? Shoot me a message and I’ll reply asap!
              </p>
              <div className='contact-info'>
                <div className='email fadeinup'>
                  <a href='mailto:jesselindcs@gmail.com'>
                    <img src='/contact-mail.svg' alt='mail' />
                  </a>
                  <span>Jesselindcs@gmail.com</span>
                </div>
                <div className='social-icons fadeinup'>
                  <a
                    href='https://www.instagram.com/jclind02/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icon'
                  >
                    <img src='/contact-instagram.svg' alt='instagram' />
                  </a>
                  <a
                    href='https://twitter.com/jclind02'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src='/contact-twitter.svg' alt='twitter' />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/jesseclind/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icon'
                  >
                    <img src='/contact-linkedin.svg' alt='linkedin' />
                  </a>
                  <a
                    href='https://github.com/jclind'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src='/contact-github.svg' alt='github' />
                  </a>
                  <a
                    href='https://www.buymeacoffee.com/jesseclind'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icon'
                  >
                    <img src='/contact-coffee.svg' alt='coffee' />
                  </a>
                  <div
                    href=''
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icon'
                    onClick={copyText}
                    onKeyPress={copyText}
                  >
                    <img src='/contact-discord.svg' alt='discord' />
                    <span className='tooltiptext' ref={discordTooltip}>
                      Copy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='form-container'>
          <div className='form'>
            <form action='https://formspree.io/f/xknklanj' method='POST'>
              <div className='names fadeinup'>
                <label>
                  First Name
                  <input type='text' name='firstName' required />
                </label>
                <label>
                  Last Name
                  <input type='text' name='lastName' required />
                </label>
              </div>
              <label className='email fadeinup'>
                Email
                <input type='email' name='email' required />
              </label>
              <label className='subject fadeinup'>
                Subject
                <input type='text' name='subject' required />
              </label>
              <label className='message fadeinup'>
                Message
                <textarea
                  name='message'
                  id=''
                  cols='30'
                  rows='10'
                  required
                ></textarea>
              </label>
              <button type='submit' className='action-btn fadeinup' required>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default contact
