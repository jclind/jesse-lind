import React from 'react'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
// import '../styles/components/blog-post.css'
import { formatDate } from '../util/formatDate'
import BlogPostLogo from './BlogPostLogo'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { wordCounter } from '../util/wordCounter'
import { trimLink } from '../util/trimLink'
import { AiOutlineLink } from 'react-icons/ai'
import Image from 'next/image'

const renderOption = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const data = node.data.target.fields.file
      const height = data.details.image.height
      const width = data.details.image.width

      return (
        <div className='img-container'>
          <Image
            src={`https:${data.url}`}
            alt={''}
            layout='responsive'
            height={height}
            width={width}
            objectFit='contain'
            className='blog-img'
          />
        </div>
      )
    },
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className='blog-paragraph'>{children}</p>
    ),
  },
  renderText: text =>
    text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
}

const BlogPost = ({ post: { fields, sys } }) => {
  const richContent = documentToReactComponents(fields.content, renderOption)
  const plainText = documentToPlainTextString(fields.content)
  const wordCount = wordCounter(plainText)
  const link = fields.link ? fields.link : null
  const date = formatDate(new Date(sys.createdAt))
  return (
    <article className='blog-post'>
      <div className='divider'>
        {/* <div className='div-t'></div> */}
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
        <div className='rich-content'>{richContent}</div>
        {link && (
          <div className='post-link-container'>
            <AiOutlineLink className='link-icon' />
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='post-link'
            >
              {trimLink(link)}
            </a>
          </div>
        )}
        <div className='word-count'>{`${wordCount} words`}</div>
      </div>
    </article>
  )
}

export default BlogPost
