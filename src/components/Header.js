import React from 'react'
import content from '../content'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Typical from 'react-typical'
import styled from 'styled-components'

const CircleSpan = styled.span`
  background-color: purple;
  color: purple;
  position: relative;
  width: 33%;
  height: 33%;
  border-radius: 9999px;
`;

export default function Header() {
    return (
        <div className="min-h-full p-8 flex items-center justify-center bg-white">
            <div className="flex flex-col md:flex-row-reverse items-center justify-between mx-auto w-9/12">
                <div className="mt-5 w-full md:w-1/3">
                    <CircleSpan/>
                    <LazyLoadImage
                        src={content.header.img}
                        placeholderSrc={process.env.PUBLIC_URL + "/assets/logo512.png"}
                        effect="blur"
                        className="rounded-full mx-auto"
                    />
                </div>
                <div className="text-black font-nunito font-bold text-center mt-5">
                    <h2 className="text-4xl">
                        {content.header.text[0]}
                        <br/>
                        {content.header.text[1]}
                    </h2>
                    <h1 className="text-2xl text-gray-600">
                        {content.header.text[2]}
                        <Typical
                            steps={content.header.typical}
                            loop={Infinity}
                            wrapper="p"
                            className="text-lg"
                        />
                    </h1>
                    <div className="flex flex-col mt-5 space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
                        <button className="px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 hover:shadow-lg font-bold text-white text-bold">
                            <a href="mailto:saranphon.pha@gmail.com">GET IN TOUCH</a>
                        </button>
                        <button className="px-8 py-3 rounded-lg hover:bg-purple-200 hover:shadow-lg font-bold text-purple-700 border-solid border-2 border-purple-700 bg-white transition duration-500 ease-in-out">
                            <a href={process.env.PUBLIC_URL + "/resume/saranphon_resume.pdf"} download>DOWNLOAD CV</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
