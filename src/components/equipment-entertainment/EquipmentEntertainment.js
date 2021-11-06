import Icon1 from "../../assets/icons-equipment/fridge.png"
import Icon2 from "../../assets/icons-equipment/washing-machine.png"
import Icon3 from "../../assets/icons-equipment/dishwasher.png"
import Icon4 from "../../assets/icons-equipment/microwave.png"
import Icon5 from "../../assets/icons-equipment/toaster.png"
import Icon6 from "../../assets/icons-equipment/raclette.png"
import Icon7 from "../../assets/icons-equipment/fondue.png"
import Icon8 from "../../assets/icons-equipment/coffee-machine.png"
import Icon9 from "../../assets/icons-equipment/filter-coffee.png"
import Icon10 from "../../assets/icons-equipment/kettle.png"
import Icon11 from "../../assets/icons-equipment/vacuum.png"
import Icon12 from "../../assets/icons-equipment/ironing.png"
import Icon13 from "../../assets/icons-equipment/hair-dryer.png"
import Icon14 from "../../assets/icons-equipment/baby-crib.png"
import Icon15 from "../../assets/icons-entertainment/wifi.png"
import Icon16 from "../../assets/icons-entertainment/tv-monitor.png"
import Icon17 from "../../assets/icons-entertainment/dvd-player.png"
import Icon18 from "../../assets/icons-entertainment/xbox.png"
import Icon19 from "../../assets/icons-entertainment/board-game.png"
import Icon20 from "../../assets/icons-entertainment/books.png"
import Icon21 from "../../assets/icons-equipment/skiing.png"
import React from 'react'
import "./equipment-entertainment.scss"
import { useTranslation} from 'react-i18next'


export function Equipment({title}) {

    const { t } = useTranslation()

    return (
        <div className="icons">
            <h1 className="h1-equipment">{title}</h1>
            <hr className="hr-floors" />
            <div className="icon-container">
                <div className="icon-wrapper">
                    <img className="icon" src={Icon1} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.equipment.fridge")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon2} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.equipment.washing_machine")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon3} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.equipment.dishwasher")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon4} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.equipment.microwave")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon5} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.equipment.toaster")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon6} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.equipment.raclette")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon7} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.equipment.foundue")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon8} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.equipment.coffe")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon9} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.equipment.filter_coffe")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon10} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.equipment.kettle")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon11} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.equipment.vacuum")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon12} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.equipment.iron")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon13} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.equipment.hair_dryer")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon14} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.equipment.baby_bed")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon21} alt="Equipment icons" />
                <p className="icon-description">{t("apartment.equipment.ski_closet")}</p>
            </div>
            </div>
        </div>
    )
}

export function Entertainment({title}) {

    const { t } = useTranslation()

    return (
        <div className="icons">
            <h1 className="h1-equipment">{title}</h1>
            <hr className="hr-floors" />
            <div className="icon-container">
                <div className="icon-wrapper">
                    <img className="icon" src={Icon15} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.entertainment.wifi")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon16} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.entertainment.tv")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon17} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.entertainment.dvd")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon18} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.entertainment.xbox")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon19} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.entertainment.games")}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={Icon20} alt="Equipment icons" />
                    <p className="icon-description">{t("apartment.entertainment.books")}</p>
                </div>
            </div>
        </div>
    )
}



/*This was my first solution, to create one component only, for both
equipment and entertainment,
unfortunately I had problems with the i18next, I wasn't able to 
transate correctly the "item.title" from the imgData.js
*/


// <div className="icons-wrapper">
// {data.map(item => (
//     <div className="icon-wrapper">
//         <img className="icon" src={item.url} key={item.id} alt="Equipment icons" />
//         <p className="icon-description">{item.title}</p>
//     </div>
// ))}
// </div>
