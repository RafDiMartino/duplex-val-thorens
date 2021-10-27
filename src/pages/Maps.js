// import React, {useState} from 'react'
import "../styles/maps.scss"
import PageTitle from '../components/pages-title/PageTitle'
import Map1 from "../assets/map1.webp"
import Map2 from "../assets/map2.webp"
// import Modal from "../components/modal/Modal"

function Maps() {

    // const [selectedImg, setSelectedImg] = useState(null)

    return (
        <div className="maps">
            <div className="img-container-maps"></div>
            <PageTitle 
                h1="Maps"
                h2="Val Thorens"
            />
            <h3 className="location-on-map">The apartment building is number 12 on the map, under “QUARTIER SOLEIL – SOLEIL DISTRICT”.</h3>
            <hr className="hr-maps" />
            <div className="map-container">
                <a href={Map1} target="_blank" rel="noreferrer"><img src={Map1} alt="Val Thorens map" /></a>
                <a href={Map2} target="_blank" rel="noreferrer"><img src={Map2} alt="Val Thorens map" /></a>
            </div>
            <iframe title="Apartment Map in Val THorens" width="95%" height="500px" style={{border: "0"}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJs2VTQXmHiUcR-wd_4yz1MWI&key=AIzaSyAIOoRf6LLOSYcXx4ctKe46l5QJbjqm0ZY"></iframe>
        </div>
    )
}

export default Maps