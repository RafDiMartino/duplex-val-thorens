import "./floor-descriptions.scss"

function FloorDescriptions({ title, ul, carousel }){

    return (
    <div>
        <div className="floor">
            <div className="ground-floor-wrapper">  
                <h1 className="h1-ground-floor">{title}</h1>
                <hr className="hr-floors" />
            </div>
            <div className="ul-wrapper">{ul}</div>
        </div>
        {carousel}
    </div>
    )
}

export default FloorDescriptions
