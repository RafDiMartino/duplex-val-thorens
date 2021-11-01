import "./floor-descriptions.scss"

function FloorDescriptions({ title, ul, carousel, className }){

    return (
    <div className= {className}>
        <div className="floor">
            <div className="floor-wrapper">  
                <h1 className="h1-floor">{title}</h1>
                <hr className="hr-floors" />
            </div>
            <div className="ul-wrapper">{ul}</div>
        </div>
        {carousel}
    </div>
    )
}

export default FloorDescriptions
