import React from 'react'
import Head from 'next/head'
import { createClient } from 'contentful'
import BlogPost from '../components/BlogPost'
import { numToLongMonth } from '../util/formatDate'
import { AiOutlineArrowUp } from 'react-icons/ai'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CF_SPACE_ID,
    accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
  })

  // Get entries sorting by date, newest to latest
  const res = await client.getEntries({ order: '-sys.createdAt' })
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

const scrollToTop = () => {
  document.querySelector('nav').scrollIntoView({
    behavior: 'smooth',
  })
}

const Thoughts = ({ posts }) => {
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
          {posts
            ? posts.map((post, idx) => {
                const lastPost = posts[idx - 1]

                const currPostDate = new Date(post.sys.createdAt)
                const currPostYear = currPostDate.getFullYear()
                const currPostMonth = currPostDate.getMonth()

                const lastPostDate = lastPost
                  ? new Date(lastPost.sys.createdAt)
                  : null
                const lastPostYear = lastPostDate
                  ? lastPostDate.getFullYear()
                  : null
                const lastPostMonth = lastPostDate
                  ? lastPostDate.getMonth()
                  : null

                return (
                  <React.Fragment key={post.sys.id}>
                    {!(
                      currPostYear === lastPostYear &&
                      currPostMonth === lastPostMonth
                    ) ? (
                      <>
                        <div className='date-divider'>
                          {`${numToLongMonth(currPostMonth)} ${currPostYear}`}
                        </div>
                        <BlogPost post={post} />
                      </>
                    ) : (
                      <BlogPost post={post} />
                    )}
                  </React.Fragment>
                )
              })
            : 'Posts Loading'}
          <button className='back-to-top btn' onClick={scrollToTop}>
            <AiOutlineArrowUp />
            Back To Top
          </button>
        </div>
      </div>
    </>
  )
}

export default Thoughts
