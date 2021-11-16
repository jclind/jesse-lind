import React from 'react'
import Image from 'next/image'
const ProjectItem = ({ path, name, desc, link }) => {
  return (
    <article className='project'>
      <div className='img-container'>
        <Image
          src={`${path}`}
          alt='name'
          width={300}
          height={350}
          objectFit='contain'
        />
        <div className='overlay'>
          <a
            href={link}
            className='visit-btn'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit Project
          </a>
        </div>
      </div>
      <h3>{name}</h3>
      <p className='text'>{desc}</p>
    </article>
  )
}

export default ProjectItem
