import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { social, links } from './data'
export default function Navbar() {
    const [isToggle, setIsToggle] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    //on toggle click show our links container
    const handleNavToggle = () => {
        setIsToggle(!isToggle);
    }

    //every time we toggle button rerender page and check for our links height and set this height to ur container,
    //so if we add more links then container will dynamically adjust to this height
    useEffect(() => {
        //check height of the links by using getBoundingClientRect()
        const linksHeight = linksRef.current.getBoundingClientRect();
        //if toggle is in true state, then we show our links container by setting its height to links height , else we hide it
        if (isToggle) {
            linksContainerRef.current.style.height = `${linksHeight.height}px`;
        } else {
            linksContainerRef.current.style.height = `0px`;
        }

    }, [isToggle])
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1619820552/main-logo.png" alt="logo" className="logo" />
                    <button onClick={handleNavToggle} className="nav-toggle"><FaBars /></button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        {/* get links from data */}
                        {links.map(({ id, url, text }) => {
                            return (
                                <li key={id} className="link">
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <ul className="social-icons">
                    {/* get social icons from data */}
                    {social.map(({ id, url, icon }) => {
                        return (
                            <li key={id} className="social-link">
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
