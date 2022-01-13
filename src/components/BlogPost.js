import React from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
// import '../styles/components/blog-post.css'
import { formatDate } from '../util/formatDate'
import BlogPostLogo from './BlogPostLogo'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const renderOption = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <img
          src={`https:${node.data.target.fields.file.url}`}
          className='blog-img'
        />
      )
    },
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className='blog-paragraph'>{children}</p>
    ),
  },
}

const trimLink = url => {
  const urlTrim = url.replace(/(^\w+:|^)\/\//, '')
  const result = urlTrim.split('/')[0]
  return result
}

const BlogPost = ({ post: { fields, sys } }) => {
  const content = documentToHtmlString(fields.content)
  const link = fields.link ? fields.link : null
  const date = formatDate(new Date(sys.createdAt))
  console.log(content)
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
        <div className='rich-content'>
          {documentToReactComponents(fields.content, renderOption)}
        </div>
        {link && (
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='post-link'
          >
            {trimLink(link)}
          </a>
        )}
      </div>
    </article>
  )
}

export default BlogPost
