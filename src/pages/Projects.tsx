import React from 'react'
import MainCard from '@/components/ProjectCard/MainCard'
import Title from '@/components/Title'
import { Project } from '@/utils/types'
import { projects } from '@/utils/data'




const Projects = () => {
  return (
    <div className=' w-[70%] mx-auto py-40'>
      <Title num='03.' title='Some Things I’ve Built'></Title>

      <div
        className='flex flex-col gap-28'
      >
        {
          projects.map((project) =>

            <MainCard
              title={project.title}
              details={project.details}
              technologies={project.technologies}
              leftSide={project.leftSide}
              image={project.image}
              github={project.github}
              liveURL={project.liveURL}

            ></MainCard>

          )
        }
      </div>
    </div>
  )
}

export default Projects