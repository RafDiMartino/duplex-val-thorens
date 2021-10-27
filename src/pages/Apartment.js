import React from 'react'
import "../styles/apartment.scss"
import PageTitle from '../components/pages-title/PageTitle'
import Carousel from '../components/carousel/Carousel'
import { imgDataGF, imgDataFF } from '../components/carousel/imgData'
import FloorDescriptions from '../components/apartment-description/FloorDescriptions'
import { ULGroundFloor, ULFirstFloor } from '../components/apartment-description/ULs'
import SimpleReactLightbox from "simple-react-lightbox"

function Apartment() {

    return (
        <div>
            <div className="img-container-apartment"></div>
            <PageTitle 
                h1="The Apartment"
                h2="Details & Photos"
            />
            <SimpleReactLightbox>
                <FloorDescriptions
                    title="Ground Floor" 
                    ul={<ULGroundFloor />}
                    carousel={<Carousel data={imgDataGF}/>}
                />
            </SimpleReactLightbox>
            <SimpleReactLightbox>
                <FloorDescriptions
                    title="First Floor" 
                    ul={<ULFirstFloor />}
                    carousel={<Carousel data={imgDataFF}/>}
                />
            </SimpleReactLightbox>
        </div>
    )
}

export default Apartment