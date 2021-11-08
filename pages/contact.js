import React from 'react'

const contact = () => {
  return (
    <>
      <div className='page contact-page'>
        <div className='info'>
          <div className='info-inner'>
            <div className='img-container'>
              <img src='/contact-page-img.png' alt='contact page' />
            </div>
            <div className='content'>
              <h1>Contact Me</h1>
              <p className='text'>
                Interested in hiring me? Have a question? or just want to say
                hi? Shoot me a message and I’ll reply asap!
              </p>
              <div className='contact-info'>
                <div className='email'>
                  <img src='/contact-mail.svg' alt='mail' />{' '}
                  <span>Jesselindcs@gmail.com</span>
                </div>
                <div className='social-icons'>
                  <img
                    src='/contact-instagram.svg'
                    alt='instagram'
                    className='icon'
                  />
                  <img
                    src='/contact-twitter.svg'
                    alt='twitter'
                    className='icon'
                  />
                  <img
                    src='/contact-linkedin.svg'
                    alt='linkedin'
                    className='icon'
                  />
                  <img
                    src='/contact-github.svg'
                    alt='github'
                    className='icon'
                  />
                  <img
                    src='/contact-coffee.svg'
                    alt='coffee'
                    className='icon'
                  />
                  <img
                    src='/contact-discord.svg'
                    alt='discord'
                    className='icon'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='form-container'>
          <div className='form'>
            <form action=''>
              <div className='names'>
                <label>
                  First Name
                  <input type='text' required />
                </label>
                <label>
                  Last Name
                  <input type='text' required />
                </label>
              </div>
              <label>
                Email
                <input type='email' required />
              </label>
              <label>
                Subject
                <input type='text' required />
              </label>
              <label>
                Message
                <textarea name='message' id='' cols='30' rows='10'></textarea>
              </label>
              <button type='submit' className='action-btn' required>
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
