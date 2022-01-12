import React from 'react'
import Head from 'next/head'
import { createClient } from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

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
  console.log(posts)
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Projects | Jesse Lind</title>
      </Head>
      <div className='page'>
        {posts &&
          posts.map(post => {
            const content = documentToHtmlString(post.fields.content)
            return (
              <article key={post.sys.id}>
                <h2>{post.fields.title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                />
              </article>
            )
          })}
      </div>
    </>
  )
}

export default Thoughts
