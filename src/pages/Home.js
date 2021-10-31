import React from 'react'
import "../styles/home.scss"
import Description from '../components/description/Description'
import Background from "../assets/view-resized.webp"
import HomeImage2 from "../assets/living-room-resized.webp"
import HomeImage3 from "../assets/home-bedroom-resized.webp"
import PageTitle from '../components/pages-title/PageTitle'

function Home() {
    return (
        <div>
            <div className="img-container"></div>
            <PageTitle 
                h1="Welcome"
                h2="We are delighted to offer you the opportunity to rent our 80 square metres apartment. Spread over two floors, situated on the top floor of the residence “Les Lauzieres”."
            />
            <Description 
                className={"view-wrapper"}
                text="This apartment offers one of the most amazing views of the mountains, and its fantastic location allows you to ski right up to the building entrance."
                image={Background}
            />
            <Description 
            className={"view-wrapper home-reverse"}
                text="It accommodates up to 10 people in a quiet, guarded and safe residence. Right in the heart of Val Thorens, the building is only 50 metres away from the sports & shopping centre."
                image={HomeImage2}
            />
            <Description 
                className={"view-wrapper"}
                text="All beds will be freshly made ready to welcome you. Clean shower/bath towels for each of you are provided along with a kitchen towel set."
                image={HomeImage3}
            />
        </div>
    )
}

export default Home
