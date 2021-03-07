import React from 'react'
import content from '../content'

export default function Navigation() {
    return (
        <div className="bg-purple-900">
            <div className="flex items-center justify-between w-10/12 mx-auto py-2 text-white font-nunito">
                <h1 className="text-3xl font-bold">{content.nav.logo}{' '}
                    <span className="w-3 h-3 bg-green-300 rounded-full inline-block"></span>
                </h1>
                <div>
                    {content.nav.links.map((link, ind) => {
                        return <a key={ind} className="text-xl mr-4" ref={link.to}>{link.text}</a>
                    })}
                </div>
            </div>
        </div>
    )
}
