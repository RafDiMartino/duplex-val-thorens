import React from 'react'
import "../styles/apartment.scss"
import Header from '../components/header/Header'
import Carousel from '../components/carousel/Carousel'
import { imgDataGF, imgDataFF} from '../components/data/imgData'
import FloorDescriptions from '../components/apartment-description/FloorDescriptions'
import { ULGroundFloor, ULFirstFloor } from '../components/apartment-description/ULs'
import SimpleReactLightbox from "simple-react-lightbox"
import { Equipment, Entertainment } from '../components/equipment-entertainment/EquipmentEntertainment'
import { useTranslation} from 'react-i18next'


function Apartment() {

    const { t } = useTranslation()

    return (
        <div>
            <div className="img-container-apartment"></div>
            <Header
                h1={t("headers.page_title_apartment")}
                h2={t("headers.title_apartment")}
            />
            <SimpleReactLightbox>
                <FloorDescriptions
                    className={"floor-container"}
                    title={t("apartment.ground_floor.groundFloor")} 
                    ul={<ULGroundFloor />}
                    carousel={<Carousel data={imgDataGF}/>}
                />
            </SimpleReactLightbox>
            <SimpleReactLightbox>
                <FloorDescriptions
                    className={"floor-container reverse"}
                    title={t("apartment.first_floor.firstFloor")} 
                    ul={<ULFirstFloor />}
                    carousel={<Carousel data={imgDataFF}/>}
                />
            </SimpleReactLightbox>
            <div className="icons-container">
                <Equipment
                   title={t("apartment.equipment.equipmentTitle")}
                />
                <Entertainment
                   title={t("apartment.entertainment.entertainmentTitle")}
                />
            </div>
            <div className="icons">
                <h1 className="h1-equipment">{t("apartment.suitability.suitabilityTitle")}</h1>
                <hr className="hr-floors" />
                <div className="suitability-wrapper">
                    <p className="suitability">{t("apartment.suitability.children")}</p>
                    <p className="suitability">{t("apartment.suitability.smoking")}</p>
                    <p className="suitability">{t("apartment.suitability.pets")}</p>
                    <p className="suitability">{t("apartment.suitability.wheelchair")}</p>
                </div>
            </div>
        </div>
    )
}

export default Apartment