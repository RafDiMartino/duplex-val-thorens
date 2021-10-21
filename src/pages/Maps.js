import React, {useState} from 'react'
import "../styles/maps.scss"
import PageTitle from '../components/pages-title/PageTitle'
import Map1 from "../assets/map1.webp"
import Map2 from "../assets/map2.webp"
import Modal from "../components/modal/Modal"

function Maps() {

    const [selectedImg, setSelectedImg] = useState(null)

    return (
        <div className="maps">
            <div className="img-container-maps"></div>
            <PageTitle 
                h1="Maps of Val Thorens"
                h2="The Apartment is number 12 on the map, under “QUARTIER SOLEIL – SOLEIL DISTRICT”"
            />
            <div className="map-container">
                <img  src={Map1} alt="Val Thorens map" />
                <img onClick={() => setSelectedImg(Map2)} src={Map2} alt="Val Thorens map" />
            </div>
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
            <iframe title="Apartment Map in Val THorens" width="95%" height="500px" style={{border: "0"}} loading="lazy" allowFullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJs2VTQXmHiUcR-wd_4yz1MWI&key=AIzaSyAIOoRf6LLOSYcXx4ctKe46l5QJbjqm0ZY"></iframe>
        </div>
    )
}

export default Maps