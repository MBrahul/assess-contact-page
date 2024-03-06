import React from 'react'
import logo from '../assets/Unknown.png'

export default function Navbar() {
  return (
        <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid">
        <a className="navbar-brand font-main px-2 logo" href="/"> <img src={logo} alt="" /> assessli</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse px-4" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 font-main">
            <li className="navbar-list-item px-2 py-2 "><a href="https://www.assessli.com">Home</a></li>
            <li className="navbar-list-item px-2 py-2"><a href="https://www.assessli.com">About Us</a></li>
            <li className="navbar-list-item px-2 py-2"><a className='act' href="/">Contact Us</a></li>
        </ul>
        </div>
    </div>
    </nav>
    )
}
