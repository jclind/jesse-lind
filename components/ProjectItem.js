import React from 'react'

const ProjectItem = ({ path, name, desc, link }) => {
  return (
    <article className='project'>
      <div className='img-container'>
        <img src={`${path}`} alt='name' />
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
