import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { projectData } from '../assets/data/projectData'

const projects = () => {
  return (
    <>
      <div className='page projects-page'>
        <h1>My Projects</h1>
        <div className='projects-container'>
          {projectData.map((project, index) => {
            const { path, name, desc, link } = project
            return (
              <div className='project-item' key={index}>
                <ProjectItem path={path} name={name} desc={desc} link={link} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default projects
