import React from 'react'

import { MdOutlineWavingHand } from 'react-icons/md'
import { AiOutlineHeart, AiOutlineEdit } from 'react-icons/ai'
import { BsCodeSquare, BsBookmark, BsBook } from 'react-icons/bs'

const BlogPostLogo = ({ type }) => {
  switch (type) {
    case 'love':
      return <AiOutlineHeart className='love' />
    case 'init':
      return <MdOutlineWavingHand className='init' />
    case 'code':
      return <BsCodeSquare className='code' />
    case 'save':
      return <BsBookmark className='save' />
    case 'book':
      return <BsBook className='book' />
  }
  return <AiOutlineEdit className='edit' />
}

export default BlogPostLogo
