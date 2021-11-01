import React from 'react'
import "./equipment-entertainment.scss"


function EquipmentEntertainment({title, data}) {
    return (
        <div className="icons">
            <h1 className="h1-equipment">{title}</h1>
            <hr className="hr-floors" />
            <div className="icons-wrapper">
                {data && data.map(item => (
                    <div className="icon-wrapper">
                        <img className="icon" src={item.url} key={item.id} alt="Equipment icons" />
                        <p className="icon-description">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EquipmentEntertainment
