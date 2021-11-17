import React from 'react'

const Footer = () => {
  return (
    <footer>
      <p>
        {' '}
        &#169; {new Date().getFullYear()} || Made with{' '}
        <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>
          Next.js
        </a>
      </p>
    </footer>
  )
}

export default Footer
