import React from 'react'
import HomeDescription from '../components/home-description/HomeDescription'
import Background from "../assets/view-resized.webp"
import HomeImage2 from "../assets/living-room-resized.webp"
import HomeImage3 from "../assets/home-bedroom-resized.webp"
import Header from '../components/header/Header'
import { useTranslation} from 'react-i18next'
import "../styles/home.scss"

function Home() {

    const { t } = useTranslation()

    return (
        <div>
            <div className="img-container"></div>
            <Header 
                h1={t("headers.page_title_home")}
                h2={t("headers.title_home")}
            />
            <HomeDescription 
                className={"view-wrapper"}
                text={t("home.first_paragraph")}
                image={Background}
            />
            <HomeDescription 
                className={"view-wrapper home-reverse"}
                text={t("home.second_paragraph")}
                image={HomeImage2}
            />
            <HomeDescription 
                className={"view-wrapper"}
                text={t("home.third_paragraph")}
                image={HomeImage3}
            />
        </div>
    )
}

export default Home

// "We are delighted to offer you the opportunity to rent our 80 square metre (861 square feet) apartment. Spread over two floors, situated on the top floor of the residence “Les Lauzieres”."