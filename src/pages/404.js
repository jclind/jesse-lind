import React from 'react'
import Head from 'next/head'

const Error = () => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>404 | Jesse Lind</title>
      </Head>
      <div className='error-page page'>
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </div>
    </>
  )
}

export default Error
