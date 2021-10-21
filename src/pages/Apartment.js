import React from 'react'
import "../styles/apartment.scss"
import PageTitle from '../components/pages-title/PageTitle'

function Apartment() {
    return (
        <div>
            <div className="img-container-apartment"></div>
            <PageTitle 
                h1="The Apartment"
                h2="A vendre"
            />
        </div>
    )
}

export default Apartment