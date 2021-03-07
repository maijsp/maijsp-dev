import React from 'react'
import content from '../content'
import { Link } from 'react-scroll'

export default function Navigation() {
    return (
        <div className="bg-purple-900">
            <div className="flex items-center justify-between w-10/12 mx-auto py-2 text-white font-nunito">
                <h1 className="text-2xl font-bold">{content.nav.logo}{' '}
                    <span className="w-3 h-3 bg-green-300 rounded-full inline-block"></span>
                </h1>
                <div>
                    {content.nav.links.map((link, ind) => {
                        return <Link key={ind} className="text-lg mr-2 md:text-xl md:mr-4" to={link.to} spy={true} smooth={true}> {link.text} </Link>
                    })}
                </div>
            </div>
        </div>
    )
}
