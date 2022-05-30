import React from 'react'
import Image from 'next/image'

const ProjectItem = ({ path, name, desc, skills, link }) => {
  return (
    <article className='project'>
      <div className='img-container'>
        <Image
          src={path}
          alt='name'
          // width={300}
          // height={350}
          quality={100}
          objectFit='cover'
          objectPosition='center'
          layout='fill'
        />
      </div>
      <div className='text-content'>
        <h3 className='title'>{name}</h3>
        <p className='description'>{desc}</p>
        <div className='skills'>
          {skills.map((skill, idx) => {
            return (
              <div className='skill' key={idx}>
                {skill}
              </div>
            )
          })}
        </div>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <button className='visit-btn'>Visit Site</button>
        </a>
      </div>
    </article>
  )
}

export default ProjectItem
