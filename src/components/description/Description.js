import React from 'react'
import "./description.scss"

function Description({ text, image, className }) {
    return (
        <div>
            <div className="description">
                <div className={className}>
                    <h2>{text}</h2>
                    <img  className="view" src={image} alt="view" />
                </div>
            </div>
        </div>
    )
}

export default Description
