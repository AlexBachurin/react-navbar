import React from 'react'
import { FaTwitter, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
export default function Navbar() {
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1619820552/main-logo.png" alt="logo" className="logo" />

                </div>
                <div className="links-container">
                    <ul className="links">
                        <li className="link"><a href="#">Home</a> </li>
                        <li className="link"><a href="#">About</a></li>
                        <li className="link"><a href="#">Projects</a></li>
                        <li className="link"><a href="#">Profile</a></li>
                        <li className="link"><a href="#">Contacts</a></li>
                    </ul>
                </div>
                <ul className="social-icons">
                    <li><a href="twitter.com"><FaTwitter /></a></li>
                    <li><a href="facebook.com"><FaFacebookSquare /></a></li>
                    <li><a href="instagram.com"><FaInstagram /></a></li>
                </ul>
            </div>
        </nav>
    )
}
