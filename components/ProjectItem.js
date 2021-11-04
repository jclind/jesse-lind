import React from 'react'

const ProjectItem = ({ path, name, desc }) => {
  return (
    <article className='project'>
      <img src={`${path}`} alt='name' />
      <h3>{name}</h3>
      <p className='text'>{desc}</p>
    </article>
  )
}

export default ProjectItem
