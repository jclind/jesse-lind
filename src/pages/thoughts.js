import React, { useState } from 'react'
import Head from 'next/head'
import { createClient } from 'contentful'
import BlogPost from '../components/BlogPost'
// import '../styles/thoughts/thoughts.css'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CF_SPACE_ID,
    accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
  })

  const res = await client.getEntries()
  if (res.items) {
    return {
      props: {
        posts: res.items,
      },
    }
  } else {
    return {
      props: {
        posts: 'NOT WORKING!',
      },
    }
  }
}

const Thoughts = ({ posts }) => {
  const [currYear, setCurrYear] = useState('')
  console.log(posts)
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Projects | Jesse Lind</title>
      </Head>
      <div className='thoughts-page'>
        <div className='header'>
          <h1 className='title'>Thoughts</h1>
          <div className='content'>
            A collection of my ideas, interested, and experiences.
          </div>
        </div>
        <div className='posts'>
          {posts &&
            posts.map(post => {
              return <BlogPost post={post} key={post.sys.id} />
            })}
        </div>
      </div>
    </>
  )
}

export default Thoughts
