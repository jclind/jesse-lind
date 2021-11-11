import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import ProjectItem from '../components/ProjectItem'
import { projectData } from '../assets/data/projectData'

const projects = () => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='page projects-page'>
        <h1 className='fadeinup ad-0-8'>My Projects</h1>
        <div className='projects-container'>
          {projectData.map((project, index) => {
            const { path, name, desc, link } = project
            return (
              <div
                className='project-item fadeinup'
                style={{ animationDelay: `${index / 5 + 1}s` }}
                key={index}
              >
                <ProjectItem path={path} name={name} desc={desc} link={link} />
              </div>
            )
          })}
        </div>
        <div className='prompt'>
          <h1>Let&#39;s Create Your Next Website</h1>
          <p>
            Want to create a personal website or have an idea for a business?{' '}
            {/* <span className='contact-btn'> */}
            {/* <Link href='/contact'>I&#39;d love to talk!</Link> */}
            {/* </span> */}
          </p>
          <button className='action-btn'>I&#39;d love to talk!</button>
          {/* <button className='visit-btn'>Contact Me</button> */}
          {/* <h2>I&#39;d love to help you create your next website!</h2> */}
        </div>
      </div>
    </>
  )
}

export default projects
