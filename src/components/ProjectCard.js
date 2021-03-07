import React from 'react'
import content from '../content';

export default function ProjectCard(props) {
    const link = props.link;

    return (
        <div class="max-w-sm bg-white p-6 rounded-lg shadow-lg font-nunito">
            <div id="header" className="flex items-center mb-4"> 
                <div id="header-text" className="leading-5">
                    <h4 id="name" className="text-2xl font-bold">{props.name}</h4>
                    <div className="mt-2 flex flex-row flex-wrap justify-start">
                    {
                        props.tech.map((tech, index) => {
                            return (
                                <span className="font-bold text-sm text-blue-700 bg-blue-100 px-2 py-1 rounded-full mr-2 mt-1">{tech}</span>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            <div id="quote">
                <p className=" text-gray-600 text-base">{props.description}</p>
            </div>
            <div className="mt-2" id="link items-center">
                {
                    link != "" 
                    ?   <button className="text-blue-600 text-sm hover:bg-blue-100 rounded-md p-2 transition duration-500 ease-in-out">
                            <a className=""href={props.link}>Read more</a>
                            <svg className="ml-1 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </button> 
                    : ""
                }

            </div>
        </div>
    )
}
