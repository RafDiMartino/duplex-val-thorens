import React from 'react'
import "../styles/contacts.scss"
import PageTitle from '../components/pages-title/PageTitle'

function Contacts() {
    return (
        <div>
            <div className="img-container-contacts"></div>
            <PageTitle 
                h1="Contact Us"
                h2="Send us a message"
            />
        </div>
    )
}

export default Contacts