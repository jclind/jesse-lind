import React from 'react'

import { MdOutlineWavingHand } from 'react-icons/md'
import { AiOutlineHeart, AiOutlineEdit } from 'react-icons/ai'
import { BsCodeSquare, BsBookmark } from 'react-icons/bs'

const BlogPostLogo = ({ type }) => {
  console.log(type)
  switch (type) {
    case 'love':
      return <AiOutlineHeart className='love' />
    case 'init':
      return <MdOutlineWavingHand className='init' />
    case 'edit':
      return <AiOutlineEdit className='edit' />
    case 'code':
      return <BsCodeSquare className='code' />
    case 'save':
      return <BsBookmark className='save' />
  }
  return <div className='blog-post-logo'>basdf</div>
}

export default BlogPostLogo
