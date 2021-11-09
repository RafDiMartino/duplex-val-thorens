import React from 'react'
import "./home-description.scss"

function HomeDescription({ text, image, className }) {
    return (
        <div>
            <div className="description">
                <div className={className}>
                    <img className="view" src={image} alt="view" />
                    <div className="text-wrapper">
                        
                        <h2 className="main-text">{text}</h2>
                        <div className="border-text" /> 
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default HomeDescription
