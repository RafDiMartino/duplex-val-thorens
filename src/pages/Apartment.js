import React from 'react'
import "../styles/apartment.scss"
import Header from '../components/header/Header'
import Carousel from '../components/carousel/Carousel'
import { imgDataGF, imgDataFF, iconEquipment, iconEntertainment } from '../components/data/imgData'
import FloorDescriptions from '../components/apartment-description/FloorDescriptions'
import { ULGroundFloor, ULFirstFloor } from '../components/apartment-description/ULs'
import SimpleReactLightbox from "simple-react-lightbox"
import EquipmentEntertainment from '../components/equipment-entertainment/EquipmentEntertainment'


function Apartment() {

    return (
        <div>
            <div className="img-container-apartment"></div>
            <Header
                h1="The Apartment"
                h2="Details & Photos"
            />
            <SimpleReactLightbox>
                <FloorDescriptions
                    className={"floor-container"}
                    title="Ground Floor" 
                    ul={<ULGroundFloor />}
                    carousel={<Carousel data={imgDataGF}/>}
                />
            </SimpleReactLightbox>
            <SimpleReactLightbox>
                <FloorDescriptions
                    className={"floor-container reverse"}
                    title="First Floor" 
                    ul={<ULFirstFloor />}
                    carousel={<Carousel data={imgDataFF}/>}
                />
            </SimpleReactLightbox>
            <div className="icons-container">
                <EquipmentEntertainment
                   title="Equipment"
                   data={iconEquipment} 
                />
                <EquipmentEntertainment
                   title="Entertainment"
                   data={iconEntertainment} 
                />
            </div>
            <div className="icons">
                <h1 className="h1-equipment">Suitability</h1>
                <hr className="hr-floors" />
                <div className="suitability-wrapper">
                    <p className="suitability">Children welcome</p>
                    <p className="suitability">This is a non-smoking apartment, but smoking is permitted on the balcony</p>
                    <p className="suitability">Pets not allowed</p>
                    <p className="suitability">Wheelchair inaccessible</p>
                </div>
            </div>
        </div>
    )
}

export default Apartment