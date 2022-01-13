import React from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
// import '../styles/components/blog-post.css'
import { formatDate } from '../util/formatDate'
import { AiOutlineHeart } from 'react-icons/ai'

const BlogPost = ({ post }) => {
  console.log(post)
  const content = documentToHtmlString(post.fields.content)
  const date = formatDate(new Date(post.sys.createdAt))

  return (
    <article className='blog-post'>
      <div className='divider'>
        <div className='div-t'></div>
        <div className='date'>{date}</div>
        <div className='div-b'></div>
      </div>
      <div className='post-content'>
        <div className='title'>{post.fields.title}</div>
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
    </article>
  )
}

export default BlogPost
