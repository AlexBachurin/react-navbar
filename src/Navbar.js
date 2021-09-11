import React, { useState } from 'react'
import { FaTwitter, FaBars } from 'react-icons/fa'
import { social, links } from './data'
export default function Navbar() {
    const [isToggle, setIsToggle] = useState(false);

    //on toggle click show our links container
    const handleNavToggle = () => {
        setIsToggle(!isToggle);
    }
    //var for storing class name to toggle show links functionality
    let clsName = 'links-container'
    if (isToggle) {
        clsName += ' show-container'
    }
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1619820552/main-logo.png" alt="logo" className="logo" />
                    <button onClick={handleNavToggle} className="nav-toggle"><FaBars /></button>
                </div>
                <div className={clsName}>
                    <ul className="links">
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
