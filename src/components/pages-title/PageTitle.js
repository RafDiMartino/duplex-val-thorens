import React from 'react'
import "./page-title.scss"

function PageTitle({ h1, h2 }) {
    return (
        <div className="page-title-wrapper">
            <h1 className="page-title">{h1}</h1>
            <h2 className="page-title2">{h2}</h2>
        </div>
    )
}

export default PageTitle
