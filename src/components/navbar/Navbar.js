import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"
import "flag-icon-css/css/flag-icons.min.css"
import { useTranslation} from 'react-i18next'

function Navbar() {

    const { t, i18n} = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

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
                    <li><Link to="/">{t("navbar.home")}</Link></li>
                    <li><Link to="/apartment">{t("navbar.apartment")}</Link></li>
                    <li><Link to="/rates">{t("navbar.rates")}</Link></li>
                    <li><Link to="/maps">{t("navbar.maps")}</Link></li>
                    <li><Link to="/contacts">{t("navbar.contacts")}</Link></li>
                </ul>
                <div className="translation-wrapper">
                    <button className="translation" onClick={() => changeLanguage("fr")}><span className="flag-icon flag-icon-fr"></span></button>
                    <button className="translation" onClick={() => changeLanguage("en")}><span className="flag-icon flag-icon-gb"></span></button>
                </div>
            </div>
            <div className={openMenu ? "nav-links" : "nav-links-closed"}>
                <ul>
                    <li onClick={toogleMenu}><Link to="/">{t("navbar.home")}</Link></li>
                    <li onClick={toogleMenu}><Link to="/apartment">{t("navbar.apartment")}</Link></li>
                    <li onClick={toogleMenu}><Link to="/rates">{t("navbar.rates")}</Link></li>
                    <li onClick={toogleMenu}><Link to="/maps">{t("navbar.maps")}</Link></li>
                    <li onClick={toogleMenu}><Link to="/contacts">{t("navbar.contacts")}</Link></li>
                </ul>
                <div className="translation-wrapper">
                    <button className="translation" onClick={() => changeLanguage("fr")}><span className="flag-icon flag-icon-fr"></span></button>
                    <button className="translation" onClick={() => changeLanguage("en")}><span className="flag-icon flag-icon-gb"></span></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

// <Trans i18nKey="navBar.home">Home</Trans>