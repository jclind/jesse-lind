import React from 'react'
import ProjectItem from '../components/ProjectItem'

const projects = () => {
  return (
    <>
      <div className='page projects-page'>
        <h1>My Projects</h1>
        <div className='projects-container'>
          <div className='project-item'>
            <ProjectItem
              path={'/project-1-img.png'}
              name={'Jesse lind photography'}
              desc={'Photography portfolio website.'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default projects
