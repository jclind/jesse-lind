import React from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
// import '../styles/components/blog-post.css'
import { formatDate } from '../util/formatDate'
import BlogPostLogo from './BlogPostLogo'

const BlogPost = ({ post: { fields, sys } }) => {
  const content = documentToHtmlString(fields.content)
  const date = formatDate(new Date(sys.createdAt))

  return (
    <article className='blog-post'>
      <div className='divider'>
        <div className='div-t'></div>
        <div className='date'>{date}</div>
        <div className='div-b'></div>
      </div>
      <div className='post-content'>
        <div className='title'>
          <div className='blog-post-logo'>
            <BlogPostLogo type={fields.postType} />
          </div>
          {fields.title}
        </div>
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
