import React, { useState } from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'


function Navbar() {

    const [openMenu, setOpenMenu] = useState(false)

    let toogleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav>
            <h1 className="logo"><Link to="/">Duplex Val Thorens</Link></h1>
            <div className="wrapper">
                <div className="menu-icon" onClick={toogleMenu}>
                    <i className={openMenu ? "open" : "close"}></i>
                    <i className={openMenu ? "open" : "close"}></i>
                    <i className={openMenu ? "open" : "close"}></i>
                </div>
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/apartment">The Apartment</Link></li>
                    <li><Link to="/rates">Rates</Link></li>
                    <li><Link to="/maps">Maps</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </div>
            <div className={openMenu ? "nav-links" : "nav-links-closed"}>
                <ul>
                    <li onClick={toogleMenu}><Link to="/">Home</Link></li>
                    <li onClick={toogleMenu}><Link to="/apartment">The Apartment</Link></li>
                    <li onClick={toogleMenu}><Link to="/rates">Rates</Link></li>
                    <li onClick={toogleMenu}><Link to="/maps">Maps</Link></li>
                    <li onClick={toogleMenu}><Link to="/contacts">Contacts</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
