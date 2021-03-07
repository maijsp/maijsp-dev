import React from 'react'
import content from '../content'
import ProjectCard from './ProjectCard'
import Fade from 'react-reveal'

export default function Project() {
    return (
            <div id="myproject" className="h-full w-full p-10 flex flex-col items-center justify-center from-blue-600 to-purple-500 bg-gradient-to-r">
                {/* Header */}
                <div className="font-nunito text-4xl font-bold text-white">
                    {content.project.title}
                    <div className="header-bar mx-auto"></div>
                </div>
                {/* Project Cards */}
                <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Fade left>
                    {content.project.projects.map((project, index) => {
                        return (
                            <ProjectCard name={project.name} tech={project.tech} description={project.description} link={project.link}/>
                        )
                    })}
                    </Fade>
                </div>
            </div>
    )
}
