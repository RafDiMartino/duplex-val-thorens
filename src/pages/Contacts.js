import React from 'react'
import "../styles/contacts.scss"
import Header from '../components/header/Header'

function Contacts() {
    return (
        <div>
            <div className="img-container-contacts"></div>
            <Header 
                h1="Contact Us"
                h2="Send us a message"
            />
        </div>
    )
}

export default Contacts